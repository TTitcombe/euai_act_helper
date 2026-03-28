"""
EU AI Act Compliance Helper — Playground

Run this to test different inputs against your prompts and compare API approaches.

Usage:
    python playground.py                     # interactive menu
    python playground.py --scenario high_risk_cv_screening
    python playground.py --scenario high_risk_cv_screening --mode websearch
    python playground.py --list              # list all scenarios

Modes:
    claude      — plain Claude API call (default)
    websearch   — Claude with web_search tool enabled (searches EU AI Act text live)

Set your API key:
    export ANTHROPIC_API_KEY=sk-ant-...
"""

import os
import sys
import json
import argparse
from dotenv import load_dotenv
from prompts import PROMPT_MAP, GPAI_TEMPLATE, ANNEX_III_TEXT

# Load API key from .env file
load_dotenv()

# ─────────────────────────────────────────────────
# Test scenarios — edit/add as needed
# ─────────────────────────────────────────────────

SCENARIOS = {
    "prohibited_emotion_workplace": {
        "org_name": "WorkWatch AI",
        "domain": "employment",
        "description": "Camera-based system that monitors employee facial expressions during meetings to assess engagement and flag disengaged workers to managers.",
        "role": "provider",
        "autonomy": "fully_automated",
        "affected_group": "employees",
        "feature_flags": ["emotion_recognition"],
        "is_public_body": False,
        "is_gpai": False,
        "tier": "PROHIBITED",
    },
    "high_risk_cv_screening": {
        "org_name": "TalentSort Ltd",
        "domain": "employment",
        "description": "AI tool that screens incoming CVs, ranks candidates by predicted job fit, and auto-rejects the bottom 50% before a human recruiter sees them.",
        "role": "provider",
        "autonomy": "human_sometimes",
        "affected_group": "applicants",
        "feature_flags": [],
        "is_public_body": False,
        "is_gpai": False,
        "tier": "HIGH_RISK",
    },
    "high_risk_patient_triage": {
        "org_name": "Acme Health Ltd",
        "domain": "healthcare",
        "description": "AI system that triages patient symptoms in A&E and recommends priority levels to nurses.",
        "role": "provider",
        "autonomy": "human_sometimes",
        "affected_group": "patients",
        "feature_flags": ["direct_interaction"],
        "is_public_body": False,
        "is_gpai": False,
        "tier": "HIGH_RISK",
    },
    "limited_chatbot": {
        "org_name": "ShopHelper Inc",
        "domain": "general_consumer",
        "description": "Customer service chatbot on a retail website that answers product questions and helps track orders.",
        "role": "deployer",
        "autonomy": "informational",
        "affected_group": "general_public",
        "feature_flags": ["direct_interaction", "synthetic_content"],
        "is_public_body": False,
        "is_gpai": False,
        "tier": "LIMITED",
    },
    "minimal_internal_tool": {
        "org_name": "DataCorp",
        "domain": "internal_tool",
        "description": "Internal dashboard that uses ML to forecast quarterly revenue for the finance team.",
        "role": "deployer",
        "autonomy": "informational",
        "affected_group": "internal_staff",
        "feature_flags": [],
        "is_public_body": False,
        "is_gpai": False,
        "tier": "MINIMAL",
    },
    "excluded_research": {
        "org_name": "University of Example",
        "domain": "other",
        "description": "Open-source NLP model being developed for academic research on multilingual sentiment analysis. Not deployed in production.",
        "role": "provider",
        "autonomy": "informational",
        "affected_group": "internal_staff",
        "feature_flags": [],
        "is_public_body": False,
        "is_gpai": False,
        "tier": "EXCLUDED",
    },
    "high_risk_gpai_credit": {
        "org_name": "FinScore AI",
        "domain": "financial_services",
        "description": "Foundation model fine-tuned for credit scoring that evaluates loan applications for banks across the EU.",
        "role": "provider",
        "autonomy": "human_sometimes",
        "affected_group": "applicants",
        "feature_flags": [],
        "is_public_body": False,
        "is_gpai": True,
        "tier": "HIGH_RISK",
    },
}


# ─────────────────────────────────────────────────
# Prompt builder
# ─────────────────────────────────────────────────

def build_prompt(scenario: dict) -> str:
    """Build the filled prompt for a given scenario."""
    tier = scenario["tier"]
    template = PROMPT_MAP[tier]

    kwargs = {
        "org_name": scenario.get("org_name", "Unknown"),
        "domain": scenario.get("domain", "Unknown"),
        "description": scenario.get("description", "Not provided"),
        "role": scenario.get("role", "Unknown"),
        "autonomy": scenario.get("autonomy", "Unknown"),
        "affected_group": scenario.get("affected_group", "Unknown"),
        "feature_flags": ", ".join(scenario.get("feature_flags", [])) or "None",
        "is_public_body": scenario.get("is_public_body", False),
    }

    if tier == "HIGH_RISK":
        kwargs["annex_iii_text"] = ANNEX_III_TEXT

    return template.format(**kwargs)


def build_gpai_prompt(scenario: dict) -> str:
    """Build the GPAI add-on prompt."""
    return GPAI_TEMPLATE.format(
        org_name=scenario.get("org_name", "Unknown"),
        role=scenario.get("role", "Unknown"),
        description=scenario.get("description", "Not provided"),
    )


# ─────────────────────────────────────────────────
# API callers
# ─────────────────────────────────────────────────

def call_claude_plain(prompt: str, model: str = "claude-sonnet-4-20250514") -> str:
    """Plain Claude API call — no tools."""
    from anthropic import Anthropic

    client = Anthropic()
    message = client.messages.create(
        model=model,
        max_tokens=4000,
        messages=[{"role": "user", "content": prompt}],
    )
    return message.content[0].text


def call_claude_websearch(prompt: str, model: str = "claude-sonnet-4-20250514") -> str:
    """Claude API call with web_search tool enabled.

    This lets Claude search the actual EU AI Act text and official sources
    mid-response, grounding its output in real regulation rather than just
    training data.
    """
    from anthropic import Anthropic

    client = Anthropic()

    # Add instruction to search the actual regulation
    enhanced_prompt = (
        prompt
        + "\n\nIMPORTANT: Use your web search capability to look up the specific "
        "articles and provisions of the EU AI Act (Regulation (EU) 2024/1689) "
        "that apply to this system. Cite specific article numbers and their "
        "actual text where relevant. Search for the official EUR-Lex text at "
        "eur-lex.europa.eu if needed."
    )

    message = client.messages.create(
        model=model,
        max_tokens=8000,
        tools=[{"type": "web_search_20250305"}],
        messages=[{"role": "user", "content": enhanced_prompt}],
    )

    # Extract text blocks from the response (web search returns mixed content)
    text_parts = []
    for block in message.content:
        if block.type == "text":
            text_parts.append(block.text)
    return "\n".join(text_parts)


# ─────────────────────────────────────────────────
# Main
# ─────────────────────────────────────────────────

def list_scenarios():
    print("\nAvailable scenarios:")
    print("-" * 60)
    for key, val in SCENARIOS.items():
        print(f"  {key:<35} [{val['tier']:<12}] {val['org_name']}")
    print()


def run_scenario(scenario_key: str, mode: str = "claude", show_prompt: bool = False):
    """Run a scenario and print the report."""
    if scenario_key not in SCENARIOS:
        print(f"ERROR: Unknown scenario '{scenario_key}'")
        list_scenarios()
        sys.exit(1)

    scenario = SCENARIOS[scenario_key]
    prompt = build_prompt(scenario)

    print(f"\n{'='*60}")
    print(f"Scenario:  {scenario_key}")
    print(f"Org:       {scenario['org_name']}")
    print(f"Tier:      {scenario['tier']}")
    print(f"Domain:    {scenario['domain']}")
    print(f"Mode:      {mode}")
    print(f"{'='*60}")

    if show_prompt:
        print(f"\n--- PROMPT ---\n{prompt}\n--- END PROMPT ---\n")

    # Pick the API caller
    if mode == "websearch":
        caller = call_claude_websearch
        print("\n[Using Claude + web search — this may take longer...]\n")
    else:
        caller = call_claude_plain
        print("\n[Using plain Claude API...]\n")

    # Main report
    print("Generating main report...")
    main_report = caller(prompt)
    print(f"\n{'─'*60}")
    print("MAIN REPORT")
    print(f"{'─'*60}\n")
    print(main_report)

    # GPAI add-on if applicable
    if scenario.get("is_gpai", False):
        print(f"\n{'─'*60}")
        print("GPAI OBLIGATIONS (add-on)")
        print(f"{'─'*60}\n")
        gpai_prompt = build_gpai_prompt(scenario)
        gpai_report = caller(gpai_prompt)
        print(gpai_report)

    print(f"\n{'='*60}")
    print("Done.")


def interactive_menu():
    """Simple interactive menu when run without arguments."""
    print("\n" + "=" * 60)
    print("  EU AI Act Compliance Helper — Playground")
    print("=" * 60)

    list_scenarios()

    scenario_key = input("Pick a scenario (copy/paste name): ").strip()
    if not scenario_key:
        print("No scenario selected. Exiting.")
        sys.exit(0)

    print("\nModes:")
    print("  1. claude     — plain Claude API (faster, cheaper)")
    print("  2. websearch  — Claude + web search (grounded in real EU AI Act text)")
    mode_choice = input("\nPick mode [1/2, default=1]: ").strip()
    mode = "websearch" if mode_choice == "2" else "claude"

    show = input("Show raw prompt? [y/N]: ").strip().lower() == "y"

    run_scenario(scenario_key, mode=mode, show_prompt=show)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="EU AI Act Compliance Helper — Playground")
    parser.add_argument("--scenario", "-s", help="Scenario key to run")
    parser.add_argument("--mode", "-m", choices=["claude", "websearch"], default="claude",
                        help="API mode: 'claude' (plain) or 'websearch' (Claude + web search)")
    parser.add_argument("--list", "-l", action="store_true", help="List available scenarios")
    parser.add_argument("--show-prompt", "-p", action="store_true", help="Print the raw prompt")

    args = parser.parse_args()

    if args.list:
        list_scenarios()
    elif args.scenario:
        run_scenario(args.scenario, mode=args.mode, show_prompt=args.show_prompt)
    else:
        interactive_menu()

# EU AI Act Compliance Helper — Output Module (v2)

## Implementation Plan for Claude Code

### Overview

This module takes a classification result from Tom's classifier and produces
a full compliance report using Claude API calls. It exposes a FastAPI endpoint
that Tom's Next.js frontend (on Vercel) calls. It also includes a local
Streamlit test harness so you can develop and iterate on prompts independently.

### Stack

- **Python 3.11+**
- **FastAPI** — API layer that Tom's frontend calls
- **Uvicorn** — ASGI server for FastAPI
- **Anthropic Python SDK** — for Claude API calls
- **python-dotenv** — for API key management
- **Pydantic** — request/response validation (comes with FastAPI)
- **Streamlit** — local dev/test harness only (not deployed)

### Project Structure

```
eu-ai-act-output/
├── api.py                    # FastAPI app — the production endpoint
├── dev_harness.py            # Streamlit app — local dev/testing only
├── output_engine.py          # Core logic — prompt routing + Claude calls
├── models.py                 # Pydantic models for request/response validation
├── prompts/
│   ├── __init__.py
│   ├── prohibited.py         # Prompt template for PROHIBITED tier
│   ├── high_risk.py          # Prompt template for HIGH_RISK tier
│   ├── limited.py            # Prompt template for LIMITED tier
│   ├── minimal.py            # Prompt template for MINIMAL tier
│   ├── excluded.py           # Prompt template for EXCLUDED tier
│   └── gpai.py               # GPAI add-on prompt (appended to any tier)
├── reference/
│   └── annex_iii.md          # Condensed Annex III use case list for prompt context
├── mock_inputs.py            # Pre-built test scenarios for dev
├── requirements.txt
├── .env.example
└── README.md
```

### The Input Contract

This is what Tom's classifier hands over. His Next.js frontend POSTs this
JSON to your FastAPI endpoint. During development, you construct these
manually via the Streamlit test harness.

```python
{
    # === User inputs (pass-through from form) ===
    "org_name": str,           # e.g. "Acme Health Ltd"
    "domain": str,             # one of: "biometrics", "critical_infrastructure",
                               #   "education", "employment", "essential_services",
                               #   "law_enforcement", "migration", "justice",
                               #   "healthcare", "financial_services",
                               #   "general_consumer", "internal_tool", "other"
    "description": str,        # free text, 2-3 sentences about what the AI does
    "role": str,               # one of: "provider", "deployer", "both",
                               #   "importer", "distributor"
    "autonomy": str,           # one of: "fully_automated", "human_decides",
                               #   "human_sometimes", "informational"
    "affected_group": str,     # one of: "general_public", "employees",
                               #   "students", "patients", "applicants",
                               #   "internal_staff"
    "feature_flags": list,     # subset of: ["subliminal", "social_scoring",
                               #   "emotion_recognition", "realtime_surveillance",
                               #   "biometric_id", "biometric_verification",
                               #   "profiling_protected", "synthetic_content",
                               #   "direct_interaction"]
    "is_public_body": bool,
    "is_gpai": bool,

    # === Classification output ===
    "tier": str,               # one of: "PROHIBITED", "HIGH_RISK", "LIMITED",
                               #   "MINIMAL", "EXCLUDED"
}
```

### File-by-File Specification

---

#### `models.py`

Pydantic models for request/response validation. FastAPI uses these to
auto-validate incoming JSON and auto-generate OpenAPI docs.

```python
"""
Pydantic models for the EU AI Act Output API.
"""

from pydantic import BaseModel, Field
from typing import Optional
from enum import Enum


class Tier(str, Enum):
    PROHIBITED = "PROHIBITED"
    HIGH_RISK = "HIGH_RISK"
    LIMITED = "LIMITED"
    MINIMAL = "MINIMAL"
    EXCLUDED = "EXCLUDED"


class Domain(str, Enum):
    BIOMETRICS = "biometrics"
    CRITICAL_INFRASTRUCTURE = "critical_infrastructure"
    EDUCATION = "education"
    EMPLOYMENT = "employment"
    ESSENTIAL_SERVICES = "essential_services"
    LAW_ENFORCEMENT = "law_enforcement"
    MIGRATION = "migration"
    JUSTICE = "justice"
    HEALTHCARE = "healthcare"
    FINANCIAL_SERVICES = "financial_services"
    GENERAL_CONSUMER = "general_consumer"
    INTERNAL_TOOL = "internal_tool"
    OTHER = "other"


class Role(str, Enum):
    PROVIDER = "provider"
    DEPLOYER = "deployer"
    BOTH = "both"
    IMPORTER = "importer"
    DISTRIBUTOR = "distributor"


class Autonomy(str, Enum):
    FULLY_AUTOMATED = "fully_automated"
    HUMAN_DECIDES = "human_decides"
    HUMAN_SOMETIMES = "human_sometimes"
    INFORMATIONAL = "informational"


class AffectedGroup(str, Enum):
    GENERAL_PUBLIC = "general_public"
    EMPLOYEES = "employees"
    STUDENTS = "students"
    PATIENTS = "patients"
    APPLICANTS = "applicants"
    INTERNAL_STAFF = "internal_staff"


class ClassificationRequest(BaseModel):
    """What Tom's frontend sends."""
    org_name: str = Field(..., min_length=1, max_length=200)
    domain: Domain
    description: str = Field(..., min_length=10, max_length=2000)
    role: Role
    autonomy: Autonomy
    affected_group: AffectedGroup
    feature_flags: list[str] = Field(default_factory=list)
    is_public_body: bool = False
    is_gpai: bool = False
    tier: Tier

    class Config:
        json_schema_extra = {
            "example": {
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
            }
        }


class TierConfig(BaseModel):
    """Display metadata for the tier."""
    label: str
    colour: str
    summary: str


class ComplianceReport(BaseModel):
    """What your API returns to Tom's frontend."""
    tier: Tier
    tier_config: TierConfig
    main_report: str           # markdown from Claude
    gpai_report: Optional[str] = None  # markdown from Claude if GPAI
    disclaimer: str
    input_summary: dict        # echo back the inputs for display
```

---

#### `mock_inputs.py`

Pre-built test scenarios so you can develop without Tom's classifier.
Include at least 7 scenarios covering each tier:

```python
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
        "tier": "PROHIBITED"
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
        "tier": "HIGH_RISK"
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
        "tier": "HIGH_RISK"
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
        "tier": "LIMITED"
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
        "tier": "MINIMAL"
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
        "tier": "EXCLUDED"
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
        "tier": "HIGH_RISK"
    }
}
```

---

#### `reference/annex_iii.md`

A condensed version of Annex III for prompt context. This gets included
in the HIGH_RISK prompt so Claude matches against the actual use case list
rather than relying on training data. Keep it tight — just the domain
headings and use cases, no full legal text.

```markdown
# EU AI Act — Annex III High-Risk Use Cases (condensed)

## 1. Biometrics
(a) Remote biometric identification (NOT verification-only)
(b) Biometric categorisation by sensitive/protected attributes
(c) Emotion recognition

## 2. Critical infrastructure
Safety components in: digital infrastructure, road traffic, water, gas, heating, electricity

## 3. Education & vocational training
(a) Admissions / access decisions
(b) Evaluating learning outcomes / steering learning
(c) Assessing appropriate education level
(d) Monitoring/detecting prohibited behaviour during tests

## 4. Employment, workers management, self-employment access
(a) Recruitment, job ads, CV screening, candidate evaluation
(b) Decisions on work terms, promotion, termination, task allocation, performance monitoring

## 5. Essential services (public & private)
(a) Eligibility for public benefits/healthcare
(b) Credit scoring (EXCEPT fraud detection)
(c) Life/health insurance risk assessment & pricing
(d) Emergency call triage / dispatch priority

## 6. Law enforcement
(a) Victim risk assessment
(b) Polygraph / similar tools
(c) Evidence reliability evaluation
(d) Reoffending risk assessment
(e) Profiling in criminal investigations

## 7. Migration, asylum, border control
(a) Polygraph / similar tools
(b) Risk assessment of persons entering territory
(c) Examining asylum/visa/residence applications
(d) Detecting/identifying persons at borders (NOT travel doc verification)

## 8. Justice & democratic processes
(a) Assisting judicial authorities in researching/interpreting/applying law
(b) Influencing election outcomes or voting behaviour (NOT campaign logistics tools)
```

---

#### `prompts/__init__.py`

Empty file to make prompts a package.

```python
```

---

#### `prompts/prohibited.py`

```python
PROHIBITED_TEMPLATE = """
You are an EU AI Act compliance advisor.

## Classification
This AI system has been classified as PROHIBITED under the EU AI Act.

## Organisation
- Name: {org_name}
- Role: {role}
- Domain: {domain}

## System description
{description}

## Relevant details
- Decision autonomy: {autonomy}
- Affected group: {affected_group}
- Feature flags: {feature_flags}

## Your task
Based on the system description and feature flags, determine which specific
Article 5 prohibition applies. Then provide:

1. WHICH PROHIBITION: Identify the specific Article 5(1) sub-paragraph
   (a through h) that this system violates and explain in plain English
   why it is prohibited.

2. IMMEDIATE ACTIONS: What must the organisation do right now? (Typically:
   cease use, remove from market, notify if already deployed.)

3. EXCEPTIONS CHECK: Are there any narrow exceptions that MIGHT apply?
   For example, law enforcement exceptions for real-time biometrics,
   or medical/safety exceptions for emotion recognition. Be specific
   about conditions that would need to be met.

4. PENALTY EXPOSURE: State the maximum penalties (up to EUR 35 million
   or 7% of global annual turnover, whichever is higher).

5. ALTERNATIVES: Briefly suggest how the system might be redesigned to
   fall outside the prohibition, if possible.

Format your response as follows (use these exact headers):

### Prohibition
[which Article 5 sub-paragraph and why]

### Immediate actions
[what to do now — numbered list]

### Possible exceptions
[any exceptions that might apply, or "None applicable"]

### Penalty exposure
[maximum fines]

### Potential redesign
[how to modify the system to comply, if possible]

IMPORTANT: Frame everything as regulatory guidance, not legal advice.
End with a note that the organisation should seek qualified legal counsel.
"""
```

---

#### `prompts/high_risk.py`

```python
HIGH_RISK_TEMPLATE = """
You are an EU AI Act compliance advisor.

## Classification
This AI system has been classified as HIGH-RISK under the EU AI Act.

## Organisation
- Name: {org_name}
- Role: {role} (this determines which obligations apply — providers have
  the heaviest burden under Article 16, deployers under Article 26)
- Public body: {is_public_body}
- Domain: {domain}

## System description
{description}

## Relevant details
- Decision autonomy: {autonomy}
- Affected group: {affected_group}
- Feature flags: {feature_flags}

## Annex III reference
Using the condensed Annex III below, identify which specific area and
sub-paragraph this system falls under:

{annex_iii_text}

## Your task
Provide a compliance report with the following sections:

1. ANNEX III MATCHING: Which specific Annex III area and sub-paragraph
   does this system match? Explain why in one sentence.

2. ARTICLE 6(3) DOWNGRADE CHECK: Could this system qualify for a
   downgrade from high-risk? Check whether it:
   (a) performs only a narrow procedural task, OR
   (b) only improves a previously completed human activity, OR
   (c) only detects patterns without replacing human assessment, OR
   (d) only performs a preparatory task.
   If any apply, note it. Also note that profiling of natural persons
   ALWAYS stays high-risk regardless.

3. OBLIGATIONS TABLE: Based on whether the organisation is a {role},
   list their specific obligations. Format as a markdown table:

   | Obligation | Article | What it means practically | Priority |

   For PROVIDERS, draw from Articles 9-22 (risk management, data
   governance, technical documentation, record-keeping, transparency,
   human oversight, accuracy/robustness, quality management, conformity
   assessment, CE marking, EU database registration).

   For DEPLOYERS, draw from Article 26 (use in accordance with
   instructions, human oversight, input data relevance, monitoring,
   record keeping, inform workers).

   Priority should be High/Medium/Low based on typical implementation
   effort and regulatory urgency.

4. TOP 3 IMMEDIATE ACTIONS: The three most important things the
   organisation should do first, in priority order.

5. FUNDAMENTAL RIGHTS IMPACT ASSESSMENT: If the organisation is a
   public body ({is_public_body}), note the requirement under
   Article 27 to perform an FRIA before deployment.

6. TRANSPARENCY OBLIGATIONS: Check if any Article 50 transparency
   obligations also apply (e.g. if the system interacts directly
   with people or generates synthetic content based on feature flags).

Format your response using these exact markdown headers:
### Annex III classification
### Downgrade assessment
### Obligations
### Top 3 immediate actions
### Fundamental rights impact assessment
### Additional transparency obligations

IMPORTANT: Frame everything as regulatory guidance, not legal advice.
End with a note that the organisation should seek qualified legal counsel.
"""
```

---

#### `prompts/limited.py`

```python
LIMITED_TEMPLATE = """
You are an EU AI Act compliance advisor.

## Classification
This AI system has been classified as LIMITED RISK under the EU AI Act,
meaning it is subject to transparency obligations under Article 50.

## Organisation
- Name: {org_name}
- Role: {role}
- Domain: {domain}

## System description
{description}

## Relevant details
- Decision autonomy: {autonomy}
- Affected group: {affected_group}
- Feature flags: {feature_flags}

## Your task
Based on the feature flags and description, determine which specific
Article 50 transparency obligations apply:

- Article 50(1): Systems interacting directly with people must disclose
  they are interacting with AI (unless obvious from context).
- Article 50(2): Providers of systems generating synthetic content
  (audio, image, video, text) must ensure outputs are marked as
  AI-generated in a machine-readable format.
- Article 50(3): Deployers using emotion recognition or biometric
  categorisation must inform the people being subjected to it.
- Article 50(4): Deployers of systems generating deepfakes or
  manipulated content must disclose that it is AI-generated.

Provide:

### Applicable transparency requirements
[Which Article 50 sub-paragraphs apply and why]

### Practical implementation steps
[Numbered list of concrete things to do — e.g. add a disclosure banner,
mark metadata, inform users at point of interaction]

### Common pitfalls
[2-3 things organisations typically get wrong with transparency obligations]

### Could this become high-risk?
[Brief note on whether changing the system's use or scope could push it
into high-risk territory — based on the domain and description]

Keep this concise — limited risk means lighter obligations. Don't
over-complicate the response.

IMPORTANT: Frame as regulatory guidance, not legal advice.
"""
```

---

#### `prompts/minimal.py`

```python
MINIMAL_TEMPLATE = """
You are an EU AI Act compliance advisor.

## Classification
This AI system has been classified as MINIMAL RISK under the EU AI Act.
No mandatory obligations apply under the Act.

## Organisation
- Name: {org_name}
- Role: {role}
- Domain: {domain}

## System description
{description}

## Relevant details
- Decision autonomy: {autonomy}
- Affected group: {affected_group}

## Your task
Provide a brief, encouraging response that covers:

### AI literacy (Article 4)
Note that Article 4 applies to ALL AI systems regardless of risk level.
The organisation must ensure sufficient AI literacy among staff who
operate and use the system. Explain what this means practically.

### Voluntary codes of conduct (Article 95)
Briefly mention that the organisation can voluntarily adopt codes of
conduct covering areas like environmental sustainability, accessibility,
stakeholder participation, and diversity.

### Watch list
Note 2-3 specific ways this system's use could evolve such that it
would be reclassified to a higher risk tier. Base this on the domain
and description provided.

Keep the overall tone positive — this is good news for the organisation.
But make sure the watch list is specific and actionable.

IMPORTANT: Frame as regulatory guidance, not legal advice.
"""
```

---

#### `prompts/excluded.py`

```python
EXCLUDED_TEMPLATE = """
You are an EU AI Act compliance advisor.

## Classification
This AI system appears to be EXCLUDED from the scope of the EU AI Act
under Article 2.

## Organisation
- Name: {org_name}
- Domain: {domain}

## System description
{description}

## Your task
Provide a brief response covering:

### Why this is excluded
Based on the description, identify which Article 2 exclusion applies
(military, personal use, R&D, open-source pre-deployment, third-country
law enforcement cooperation). Explain in plain English.

### Conditions for the exclusion
What would cause the exclusion to no longer apply? For example:
- R&D exclusion ends when the system is placed on the market
- Open-source exclusion ends if integrated into a high-risk system
- Personal use exclusion only applies to natural persons

### Recommendations
Even though excluded, briefly note any good practices the organisation
should consider voluntarily.

Keep this very concise — 2-3 short paragraphs total.

IMPORTANT: Frame as regulatory guidance, not legal advice.
"""
```

---

#### `prompts/gpai.py`

```python
GPAI_TEMPLATE = """
You are an EU AI Act compliance advisor.

This organisation is also a provider of a General-Purpose AI (GPAI)
model, which triggers additional obligations under Chapter V of the
EU AI Act, independent of the system's risk classification.

## Organisation
- Name: {org_name}
- Role: {role}

## System description
{description}

## Your task
List the GPAI-specific obligations:

### Core GPAI obligations (Article 53)
All GPAI providers must:
- Maintain technical documentation (per Annex XI)
- Provide information and documentation to downstream providers (Annex XII)
- Comply with the Copyright Directive
- Publish a sufficiently detailed summary of training data

### Systemic risk obligations (Article 55)
Note whether systemic risk obligations might apply (compute > 10^25 FLOPS
or Commission-designated). If they might:
- Perform model evaluations including adversarial testing
- Assess and mitigate systemic risks
- Track and report serious incidents
- Ensure adequate cybersecurity protections

### Practical steps
[3-4 specific actions the organisation should take]

Keep this section self-contained — it will be appended below the main
tier-specific output.

IMPORTANT: Frame as regulatory guidance, not legal advice.
"""
```

---

#### `output_engine.py`

The core logic module. Both the FastAPI endpoint and the Streamlit
test harness call this.

```python
"""
EU AI Act Output Engine

Takes a classification result dict and produces a compliance report
using Claude API calls.

Usage:
    from output_engine import generate_report
    report = generate_report(classification_result)
"""

import os
from anthropic import Anthropic
from dotenv import load_dotenv
from prompts.prohibited import PROHIBITED_TEMPLATE
from prompts.high_risk import HIGH_RISK_TEMPLATE
from prompts.limited import LIMITED_TEMPLATE
from prompts.minimal import MINIMAL_TEMPLATE
from prompts.excluded import EXCLUDED_TEMPLATE
from prompts.gpai import GPAI_TEMPLATE

load_dotenv()

# Load Annex III reference text
ANNEX_III_PATH = os.path.join(os.path.dirname(__file__), "reference", "annex_iii.md")
with open(ANNEX_III_PATH, "r") as f:
    ANNEX_III_TEXT = f.read()

PROMPT_MAP = {
    "PROHIBITED": PROHIBITED_TEMPLATE,
    "HIGH_RISK": HIGH_RISK_TEMPLATE,
    "LIMITED": LIMITED_TEMPLATE,
    "MINIMAL": MINIMAL_TEMPLATE,
    "EXCLUDED": EXCLUDED_TEMPLATE,
}

TIER_CONFIG = {
    "PROHIBITED": {
        "label": "Prohibited",
        "colour": "red",
        "summary": "This AI practice is banned under Article 5 of the EU AI Act.",
    },
    "HIGH_RISK": {
        "label": "High-risk",
        "colour": "orange",
        "summary": "This system is subject to extensive compliance requirements.",
    },
    "LIMITED": {
        "label": "Limited risk",
        "colour": "yellow",
        "summary": "This system has transparency obligations under Article 50.",
    },
    "MINIMAL": {
        "label": "Minimal risk",
        "colour": "green",
        "summary": "No mandatory obligations. Voluntary best practices encouraged.",
    },
    "EXCLUDED": {
        "label": "Excluded",
        "colour": "grey",
        "summary": "This system appears to be outside the scope of the EU AI Act.",
    },
}

DISCLAIMER = (
    "This analysis is for informational purposes only and does not constitute "
    "legal advice. The EU AI Act is complex and its interpretation may vary "
    "by jurisdiction and circumstance. Please consult qualified legal counsel "
    "for compliance decisions."
)


def build_prompt(result: dict) -> str:
    """Select the right template and inject all context."""
    tier = result["tier"]
    template = PROMPT_MAP[tier]

    kwargs = {
        "org_name": result.get("org_name", "Unknown"),
        "domain": result.get("domain", "Unknown"),
        "description": result.get("description", "Not provided"),
        "role": result.get("role", "Unknown"),
        "autonomy": result.get("autonomy", "Unknown"),
        "affected_group": result.get("affected_group", "Unknown"),
        "feature_flags": ", ".join(result.get("feature_flags", [])) or "None",
        "is_public_body": result.get("is_public_body", False),
    }

    if tier == "HIGH_RISK":
        kwargs["annex_iii_text"] = ANNEX_III_TEXT

    return template.format(**kwargs)


def build_gpai_prompt(result: dict) -> str:
    """Build the GPAI add-on prompt if applicable."""
    return GPAI_TEMPLATE.format(
        org_name=result.get("org_name", "Unknown"),
        role=result.get("role", "Unknown"),
        description=result.get("description", "Not provided"),
    )


def call_claude(prompt: str, model: str = "claude-sonnet-4-20250514") -> str:
    """Make a Claude API call and return the response text."""
    client = Anthropic()
    message = client.messages.create(
        model=model,
        max_tokens=2000,
        messages=[{"role": "user", "content": prompt}],
    )
    return message.content[0].text


def generate_report(result: dict) -> dict:
    """
    Main entry point. Takes a classification result dict,
    calls Claude with the appropriate prompt, and returns
    a structured report.

    Args:
        result: The classification dict (see input contract above)

    Returns:
        {
            "tier": str,
            "tier_config": dict,
            "main_report": str,
            "gpai_report": str | None,
            "disclaimer": str,
            "input_summary": dict,
        }
    """
    tier = result["tier"]

    main_prompt = build_prompt(result)
    main_report = call_claude(main_prompt)

    gpai_report = None
    if result.get("is_gpai", False):
        gpai_prompt = build_gpai_prompt(result)
        gpai_report = call_claude(gpai_prompt)

    return {
        "tier": tier,
        "tier_config": TIER_CONFIG[tier],
        "main_report": main_report,
        "gpai_report": gpai_report,
        "disclaimer": DISCLAIMER,
        "input_summary": result,
    }
```

---

#### `api.py`

The FastAPI app. This is what gets deployed and what Tom's frontend calls.

```python
"""
EU AI Act Compliance Helper — API

Run locally:  uvicorn api:app --reload --port 8000
Docs:         http://localhost:8000/docs

Tom's frontend calls:
    POST https://<your-domain>/report
    Body: ClassificationRequest JSON
    Response: ComplianceReport JSON
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models import ClassificationRequest, ComplianceReport, TierConfig
from output_engine import generate_report, TIER_CONFIG, DISCLAIMER
from mock_inputs import SCENARIOS

app = FastAPI(
    title="EU AI Act Compliance Helper — Output API",
    description="Takes a classification result and generates a compliance report using Claude.",
    version="0.1.0",
)

# CORS — allow Tom's Vercel frontend to call this API.
# In production, replace "*" with the actual Vercel domain.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # TODO: lock down to Tom's Vercel URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    """Health check."""
    return {"status": "ok", "service": "eu-ai-act-output-api"}


@app.post("/report", response_model=ComplianceReport)
def create_report(request: ClassificationRequest):
    """
    Generate a compliance report.

    Tom's frontend POSTs the classification result here.
    Returns a structured report with tier info, obligations,
    and practical guidance.
    """
    try:
        result = request.model_dump()
        # Convert enums to strings for the prompt templates
        result = {k: v.value if hasattr(v, 'value') else v for k, v in result.items()}
        report = generate_report(result)
        return ComplianceReport(
            tier=report["tier"],
            tier_config=TierConfig(**report["tier_config"]),
            main_report=report["main_report"],
            gpai_report=report["gpai_report"],
            disclaimer=report["disclaimer"],
            input_summary=report["input_summary"],
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/scenarios")
def list_scenarios():
    """
    List available test scenarios.
    Useful for Tom to test his frontend integration.
    """
    return {
        "scenarios": {
            key: {
                "org_name": val["org_name"],
                "tier": val["tier"],
                "domain": val["domain"],
            }
            for key, val in SCENARIOS.items()
        }
    }


@app.post("/report/test/{scenario_key}")
def test_scenario(scenario_key: str):
    """
    Run a test scenario by name.
    Useful for quick testing without constructing the full request body.

    Example: POST /report/test/high_risk_cv_screening
    """
    if scenario_key not in SCENARIOS:
        raise HTTPException(
            status_code=404,
            detail=f"Scenario '{scenario_key}' not found. "
                   f"Available: {list(SCENARIOS.keys())}"
        )
    result = SCENARIOS[scenario_key]
    report = generate_report(result)
    return ComplianceReport(
        tier=report["tier"],
        tier_config=TierConfig(**report["tier_config"]),
        main_report=report["main_report"],
        gpai_report=report["gpai_report"],
        disclaimer=report["disclaimer"],
        input_summary=report["input_summary"],
    )
```

---

#### `dev_harness.py`

The Streamlit dev/test harness. Run this locally to iterate on prompts
and see outputs in real time. NOT deployed — just for your development.

```python
"""
EU AI Act Compliance Helper — Dev/Test Harness

Run with: streamlit run dev_harness.py
"""

import streamlit as st
from mock_inputs import SCENARIOS
from output_engine import generate_report, TIER_CONFIG

st.set_page_config(
    page_title="EU AI Act — Output Dev Harness",
    page_icon="🇪🇺",
    layout="wide"
)

st.title("🇪🇺 EU AI Act — Output Dev Harness")
st.caption("Test prompt templates and output rendering")

# --- SIDEBAR: Input controls ---
st.sidebar.header("Test inputs")

input_mode = st.sidebar.radio(
    "Input mode",
    ["Pick a scenario", "Manual input"]
)

if input_mode == "Pick a scenario":
    scenario_key = st.sidebar.selectbox(
        "Scenario",
        list(SCENARIOS.keys()),
        format_func=lambda k: k.replace("_", " ").title()
    )
    result = SCENARIOS[scenario_key].copy()
    st.sidebar.markdown("---")
    st.sidebar.subheader("Input preview")
    st.sidebar.json(result)

else:
    result = {}
    result["org_name"] = st.sidebar.text_input("Organisation name", "Test Corp")
    result["domain"] = st.sidebar.selectbox(
        "Domain",
        ["biometrics", "critical_infrastructure", "education",
         "employment", "essential_services", "law_enforcement",
         "migration", "justice", "healthcare", "financial_services",
         "general_consumer", "internal_tool", "other"]
    )
    result["description"] = st.sidebar.text_area(
        "System description",
        "Describe the AI system in 2-3 sentences..."
    )
    result["role"] = st.sidebar.selectbox(
        "Role",
        ["provider", "deployer", "both", "importer", "distributor"]
    )
    result["autonomy"] = st.sidebar.selectbox(
        "Decision autonomy",
        ["fully_automated", "human_decides", "human_sometimes", "informational"]
    )
    result["affected_group"] = st.sidebar.selectbox(
        "Most affected group",
        ["general_public", "employees", "students", "patients",
         "applicants", "internal_staff"]
    )
    result["feature_flags"] = st.sidebar.multiselect(
        "Feature flags",
        ["subliminal", "social_scoring", "emotion_recognition",
         "realtime_surveillance", "biometric_id", "biometric_verification",
         "profiling_protected", "synthetic_content", "direct_interaction"]
    )
    result["is_public_body"] = st.sidebar.checkbox("Public body?")
    result["is_gpai"] = st.sidebar.checkbox("GPAI provider?")
    result["tier"] = st.sidebar.selectbox(
        "Classification tier (simulating Tom's classifier)",
        ["PROHIBITED", "HIGH_RISK", "LIMITED", "MINIMAL", "EXCLUDED"]
    )

# --- MAIN AREA: Output ---
if st.sidebar.button("Generate report", type="primary", use_container_width=True):
    tier_conf = TIER_CONFIG[result["tier"]]

    colour_map = {
        "red": "🔴", "orange": "🟠", "yellow": "🟡",
        "green": "🟢", "grey": "⚪"
    }
    badge = colour_map.get(tier_conf["colour"], "⚪")

    st.markdown(f"## {badge} {tier_conf['label']}")
    st.info(tier_conf["summary"])

    with st.expander("Input summary"):
        col1, col2 = st.columns(2)
        with col1:
            st.markdown(f"**Organisation:** {result['org_name']}")
            st.markdown(f"**Domain:** {result['domain']}")
            st.markdown(f"**Role:** {result['role']}")
            st.markdown(f"**Autonomy:** {result['autonomy']}")
        with col2:
            st.markdown(f"**Affected group:** {result['affected_group']}")
            st.markdown(f"**Public body:** {result['is_public_body']}")
            st.markdown(f"**GPAI:** {result['is_gpai']}")
            st.markdown(f"**Flags:** {', '.join(result.get('feature_flags', [])) or 'None'}")
        st.markdown(f"**Description:** {result['description']}")

    with st.spinner("Generating compliance report..."):
        report = generate_report(result)

    st.markdown("---")
    st.markdown(report["main_report"])

    if report["gpai_report"]:
        st.markdown("---")
        st.markdown("## GPAI model obligations")
        st.markdown(report["gpai_report"])

    st.markdown("---")
    st.warning(report["disclaimer"])

    # Debug: show raw prompt (helpful for iterating)
    with st.expander("Debug: raw prompt sent to Claude"):
        from output_engine import build_prompt
        st.code(build_prompt(result), language="text")

else:
    st.markdown(
        "Select a test scenario or configure manual inputs in the "
        "sidebar, then click **Generate report** to see the output."
    )
```

---

#### `requirements.txt`

```
fastapi>=0.110.0
uvicorn[standard]>=0.27.0
anthropic>=0.40.0
python-dotenv>=1.0.0
pydantic>=2.5.0
streamlit>=1.30.0
```

---

#### `.env.example`

```
ANTHROPIC_API_KEY=sk-ant-...
```

---

### How Tom's Frontend Calls Your API

Tom's Next.js frontend makes a single fetch call:

```javascript
// In Tom's Next.js code, after classification:
const response = await fetch("https://your-api-domain.com/report", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        org_name: formData.orgName,
        domain: formData.domain,
        description: formData.description,
        role: formData.role,
        autonomy: formData.autonomy,
        affected_group: formData.affectedGroup,
        feature_flags: formData.featureFlags,
        is_public_body: formData.isPublicBody,
        is_gpai: formData.isGpai,
        tier: classificationResult.tier,  // from Tom's classifier
    }),
});

const report = await response.json();

// report.tier           → "HIGH_RISK"
// report.tier_config    → { label, colour, summary }
// report.main_report    → markdown string (render with a markdown lib)
// report.gpai_report    → markdown string or null
// report.disclaimer     → string
// report.input_summary  → echo of the inputs
```

Tom renders the markdown in his React frontend using a library like
`react-markdown` or `@mdx-js/react`.

---

### Deployment Options

For the hackathon, the fastest deployment options for your FastAPI backend:

**Railway (recommended for hackathon)**
- Push to GitHub, connect Railway, auto-deploys
- Free tier available
- Gives you a URL like `your-app.up.railway.app`
- Add `ANTHROPIC_API_KEY` as an env var in Railway dashboard

**Render**
- Similar to Railway, free tier available
- Slightly slower cold starts on free tier

**Fly.io**
- Good free tier, fast deploys
- Needs `fly.toml` config file

For any of these, you need a `Procfile` or equivalent:
```
web: uvicorn api:app --host 0.0.0.0 --port $PORT
```

---

### Dev Workflow

1. Create the project structure above
2. Copy `.env.example` to `.env` and add your Anthropic API key
3. `pip install -r requirements.txt`
4. **Test with Streamlit:** `streamlit run dev_harness.py`
   — pick scenarios, iterate on prompts, check outputs
5. **Test the API:** `uvicorn api:app --reload --port 8000`
   — open `http://localhost:8000/docs` for auto-generated Swagger UI
   — use the `/report/test/high_risk_cv_screening` endpoint for quick tests
6. When prompts look good, deploy the FastAPI app
7. Give Tom the deployed URL — he points his frontend at it

### Things to iterate on during development

- **Prompt quality**: The templates are a starting point. Refine based
  on what Claude actually returns. Common tweaks: level of detail,
  obligations table granularity, tone.

- **Response length**: `max_tokens=2000` might need adjusting per tier.
  HIGH_RISK reports are much longer than MINIMAL ones. Consider a
  per-tier max_tokens map in output_engine.py.

- **Error handling**: The API has basic try/except. Add more granular
  error handling: API key missing, rate limited, invalid tier, etc.

- **Timeouts**: Claude calls can take 5-15 seconds. Tom's frontend
  needs a loading state. Consider adding streaming support later
  (FastAPI + Anthropic SDK both support SSE streaming).

- **Caching**: For the hackathon demo, consider caching responses
  for the test scenarios so the demo doesn't depend on API latency.
  Use `functools.lru_cache` or a simple dict cache keyed on the
  input hash.

- **CORS**: Before the demo, lock down the CORS origins from "*" to
  Tom's actual Vercel domain.

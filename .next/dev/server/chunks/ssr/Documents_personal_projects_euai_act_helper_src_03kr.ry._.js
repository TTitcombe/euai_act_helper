module.exports = [
"[project]/Documents/personal/projects/euai_act_helper/src/types/assessment.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ANNEX_III_DOMAINS",
    ()=>ANNEX_III_DOMAINS
]);
const ANNEX_III_DOMAINS = [
    "biometrics_identity",
    "critical_infrastructure",
    "education",
    "employment",
    "essential_services",
    "law_enforcement",
    "migration_asylum",
    "justice_democracy"
];
}),
"[project]/Documents/personal/projects/euai_act_helper/src/lib/classify.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildFinalAssessment",
    ()=>buildFinalAssessment,
    "preClassify",
    ()=>preClassify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$types$2f$assessment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/types/assessment.ts [app-ssr] (ecmascript)");
;
function preClassify(draft) {
    const notes = [];
    const prohibitedFlags = draft.risk_flags?.prohibited_flags ?? [];
    const highRiskIndicators = draft.risk_flags?.high_risk_indicators ?? [];
    const domain = draft.deployment?.domain;
    const capabilities = draft.ai_system?.capabilities ?? [];
    const isGPAI = draft.ai_system?.is_gpai ?? false;
    const consequentialDecisions = draft.risk_flags?.consequential_decisions ?? false;
    const transparencyObligations = draft.risk_flags?.transparency_obligations ?? false;
    const geography = draft.risk_flags?.geography ?? [];
    // Prohibited check (highest priority)
    const likelyProhibited = prohibitedFlags.length > 0;
    if (likelyProhibited) {
        notes.push(`Potential prohibited AI use detected: ${prohibitedFlags.map((f)=>f.replace(/_/g, " ")).join(", ")}`);
    }
    // GPAI check
    const likelyGPAI = isGPAI;
    if (likelyGPAI) {
        notes.push("This system appears to be a general-purpose AI model (GPAI) with specific obligations under the Act.");
    }
    // High risk: Annex III domain + consequential decisions or indicators
    const inAnnexIIIDomain = domain ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$types$2f$assessment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANNEX_III_DOMAINS"].includes(domain) : false;
    const likelyHighRisk = !likelyProhibited && inAnnexIIIDomain && (consequentialDecisions || highRiskIndicators.length >= 1);
    if (likelyHighRisk) {
        notes.push(`Your domain (${domain?.replace(/_/g, " ")}) is listed in Annex III of the EU AI Act as high-risk.`);
        if (consequentialDecisions) {
            notes.push("Your system makes consequential decisions affecting individuals, a key high-risk indicator.");
        }
    }
    // Limited risk: NLG, image generation, or explicit transparency flag
    const likelyLimitedRisk = !likelyProhibited && !likelyHighRisk && (capabilities.includes("natural_language_generation") || capabilities.includes("image_video_generation") || transparencyObligations);
    if (likelyLimitedRisk) {
        notes.push("Your system likely has transparency obligations (e.g. disclosing AI-generated content or chatbot identity).");
    }
    // EU exposure note
    if (geography.includes("no_eu_exposure")) {
        notes.push("You indicated no EU exposure — the EU AI Act may not apply to your system.");
    } else if (geography.length > 0) {
        notes.push("Your system has EU exposure and the EU AI Act is likely to apply.");
    }
    // Confidence: higher when more data is present
    const filledFields = [
        draft.company?.name,
        draft.ai_system?.description,
        domain,
        draft.deployment?.role
    ].filter(Boolean).length;
    const confidence = filledFields >= 3 ? "high" : filledFields >= 2 ? "medium" : "low";
    return {
        likely_prohibited: likelyProhibited,
        likely_high_risk: likelyHighRisk,
        likely_gpai: likelyGPAI,
        likely_limited_risk: likelyLimitedRisk,
        confidence,
        notes
    };
}
function buildFinalAssessment(draft) {
    const classification = preClassify(draft);
    return {
        metadata: {
            generated_at: new Date().toISOString(),
            schema_version: "1.0"
        },
        company: {
            name: draft.company?.name ?? "",
            description: draft.company?.description ?? "",
            employee_range: draft.company?.employee_range ?? "1-10"
        },
        ai_system: {
            name: draft.ai_system?.name,
            description: draft.ai_system?.description ?? "",
            capabilities: draft.ai_system?.capabilities ?? [],
            is_gpai: draft.ai_system?.is_gpai ?? false,
            gpai_downstream_uses: draft.ai_system?.gpai_downstream_uses,
            human_oversight: draft.ai_system?.human_oversight ?? "partial",
            automated_decision_making: draft.ai_system?.automated_decision_making ?? false
        },
        deployment: {
            role: draft.deployment?.role ?? "unsure",
            third_party_ai: draft.deployment?.third_party_ai,
            domain: draft.deployment?.domain ?? "other",
            domain_detail: draft.deployment?.domain_detail,
            end_users: draft.deployment?.end_users ?? "businesses",
            affected_persons: draft.deployment?.affected_persons ?? "none"
        },
        risk_flags: {
            prohibited_flags: draft.risk_flags?.prohibited_flags ?? [],
            high_risk_indicators: draft.risk_flags?.high_risk_indicators ?? [],
            geography: draft.risk_flags?.geography ?? [],
            consequential_decisions: draft.risk_flags?.consequential_decisions ?? false,
            vulnerable_populations: draft.risk_flags?.vulnerable_populations ?? false,
            transparency_obligations: draft.risk_flags?.transparency_obligations ?? false
        },
        preliminary_classification: classification
    };
}
}),
"[project]/Documents/personal/projects/euai_act_helper/src/lib/detect.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "detectCapabilities",
    ()=>detectCapabilities,
    "detectDomain",
    ()=>detectDomain
]);
// ─── Capability detection ────────────────────────────────────────────────────
const CAPABILITY_KEYWORDS = {
    natural_language_generation: [
        "chat",
        "chatbot",
        "conversation",
        "conversational",
        "agent",
        "assistant",
        "gpt",
        "llm",
        "language model",
        "nlp",
        "text",
        "write",
        "writing",
        "draft",
        "summarise",
        "summarize",
        "summarization",
        "generate text",
        "content",
        "coach",
        "coaching",
        "advice",
        "guidance",
        "respond",
        "response",
        "answer",
        "q&a",
        "qa",
        "question",
        "explain",
        "feedback"
    ],
    image_video_generation: [
        "image",
        "photo",
        "picture",
        "video",
        "audio",
        "visual",
        "generate image",
        "stable diffusion",
        "midjourney",
        "dall-e",
        "synthetic media",
        "deepfake",
        "avatar",
        "render",
        "illustration"
    ],
    decision_making: [
        "decision",
        "approve",
        "reject",
        "automate",
        "automation",
        "workflow",
        "triage",
        "flag",
        "action",
        "introduce",
        "introduction",
        "match",
        "matching",
        "connect",
        "connects",
        "route",
        "routing",
        "assign",
        "allocate",
        "hire",
        "hiring",
        "shortlist",
        "select",
        "selection"
    ],
    scoring_ranking: [
        "score",
        "scoring",
        "rank",
        "ranking",
        "rate",
        "rating",
        "prioritise",
        "prioritize",
        "priorit",
        "cv",
        "resume",
        "candidate",
        "applicant",
        "credit",
        "risk",
        "screen",
        "screening",
        "evaluate",
        "evaluation",
        "assess",
        "assessment",
        "grade",
        "grading"
    ],
    biometric_recognition: [
        "face",
        "facial",
        "biometric",
        "fingerprint",
        "voice recognition",
        "speaker",
        "identity verification",
        "liveness",
        "authenticate",
        "id check"
    ],
    emotion_detection: [
        "emotion",
        "sentiment",
        "mood",
        "stress",
        "mental state",
        "feeling",
        "affect",
        "wellbeing",
        "engagement",
        "attention"
    ],
    classification: [
        "classif",
        "categor",
        "label",
        "tag",
        "sort",
        "filter",
        "moderate",
        "moderation",
        "detect",
        "detection",
        "identify",
        "identification",
        "flag content",
        "spam",
        "fraud detection"
    ],
    recommendation: [
        "recommend",
        "recommendation",
        "suggest",
        "suggestion",
        "personalise",
        "personalize",
        "personalised",
        "personalized",
        "feed",
        "curate",
        "job",
        "jobs",
        "career",
        "opportunity",
        "opportunities",
        "search",
        "find",
        "discover",
        "match",
        "connect"
    ],
    prediction: [
        "predict",
        "prediction",
        "forecast",
        "churn",
        "anomaly",
        "detect risk",
        "early warning",
        "likely to",
        "probability",
        "propensity"
    ],
    translation: [
        "translat",
        "translation",
        "multilingual",
        "language barrier",
        "localise",
        "localize"
    ],
    other: []
};
function detectCapabilities(text) {
    const lower = text.toLowerCase();
    return Object.entries(CAPABILITY_KEYWORDS).filter(([cap, keywords])=>cap !== "other" && keywords.some((kw)=>lower.includes(kw))).map(([cap])=>cap);
}
// ─── Domain detection ────────────────────────────────────────────────────────
const DOMAIN_KEYWORDS = {
    employment: [
        "job",
        "jobs",
        "career",
        "careers",
        "recruit",
        "recruitment",
        "hire",
        "hiring",
        "interview",
        "interviews",
        "candidate",
        "applicant",
        "cv",
        "resume",
        "workforce",
        "employee",
        "employer",
        "hr ",
        "human resource",
        "talent",
        "staffing",
        "hiring manager",
        "payroll",
        "onboard"
    ],
    education: [
        "student",
        "school",
        "university",
        "college",
        "learn",
        "learning",
        "course",
        "curriculum",
        "tutor",
        "tutoring",
        "grade",
        "exam",
        "educat",
        "classroom",
        "teacher",
        "academic",
        "admission"
    ],
    healthcare: [
        "health",
        "healthcare",
        "medical",
        "patient",
        "clinical",
        "diagnos",
        "treatment",
        "hospital",
        "doctor",
        "therapy",
        "drug",
        "pharma",
        "symptom",
        "wellbeing",
        "mental health",
        "care"
    ],
    essential_services: [
        "credit",
        "loan",
        "mortgage",
        "insurance",
        "bank",
        "financial",
        "benefit",
        "welfare",
        "housing",
        "utility",
        "social service"
    ],
    biometrics_identity: [
        "biometric",
        "facial recognition",
        "fingerprint",
        "identity",
        "id verification",
        "kyc",
        "know your customer"
    ],
    critical_infrastructure: [
        "energy",
        "power grid",
        "water",
        "transport network",
        "railway",
        "airport",
        "nuclear",
        "infrastructure",
        "utility network",
        "telecom"
    ],
    law_enforcement: [
        "police",
        "law enforcement",
        "crime",
        "criminal",
        "surveillance",
        "security agency",
        "border force",
        "investigation"
    ],
    migration_asylum: [
        "migration",
        "immigrant",
        "asylum",
        "refugee",
        "border",
        "visa",
        "passport",
        "nationality",
        "citizenship"
    ],
    justice_democracy: [
        "court",
        "judge",
        "legal",
        "justice",
        "election",
        "vote",
        "voting",
        "democracy",
        "parliament",
        "sentencing",
        "litigation"
    ],
    transportation: [
        "transport",
        "autonomous vehicle",
        "self-driving",
        "traffic",
        "logistics",
        "delivery",
        "fleet",
        "aviation",
        "drone"
    ],
    general_business: [
        "crm",
        "analytics",
        "productivity",
        "operations",
        "internal tool",
        "sales",
        "marketing",
        "customer service",
        "support",
        "erp"
    ],
    creative_entertainment: [
        "creative",
        "entertainment",
        "gaming",
        "game",
        "music",
        "art",
        "media",
        "film",
        "content creator",
        "influencer",
        "social media"
    ],
    other: []
};
function detectDomain(text) {
    const lower = text.toLowerCase();
    // Score each domain by how many keywords match
    const scores = Object.entries(DOMAIN_KEYWORDS).filter(([d])=>d !== "other").map(([domain, keywords])=>({
            domain,
            score: keywords.filter((kw)=>lower.includes(kw)).length
        })).filter(({ score })=>score > 0).sort((a, b)=>b.score - a.score);
    return scores[0]?.domain ?? null;
}
}),
"[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/ProgressBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgressBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function ProgressBar({ currentStep, totalSteps, stepTitles }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-slate-600",
                        children: [
                            "Step ",
                            currentStep,
                            " of ",
                            totalSteps
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/ProgressBar.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-slate-500",
                        children: stepTitles[currentStep - 1]
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/ProgressBar.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/ProgressBar.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1",
                children: Array.from({
                    length: totalSteps
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `h-1.5 flex-1 rounded-full transition-all duration-300 ${i < currentStep ? "bg-blue-600" : "bg-slate-200"}`
                    }, i, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/ProgressBar.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/ProgressBar.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/ProgressBar.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/personal/projects/euai_act_helper/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/button/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
            outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
            ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
            destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
            lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
            icon: "size-8",
            "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
            "icon-lg": "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/StepNavigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
"use client";
;
;
;
function StepNavigation({ onBack, onNext, isFirst, isLast }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between pt-6 mt-6 border-t border-slate-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                variant: "ghost",
                onClick: onBack,
                disabled: isFirst,
                className: "gap-2 text-slate-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/StepNavigation.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    "Back"
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/StepNavigation.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                onClick: onNext,
                className: "gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6",
                children: isLast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/StepNavigation.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this),
                        "View my assessment"
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Continue",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/StepNavigation.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/StepNavigation.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/StepNavigation.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/personal/projects/euai_act_helper/src/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$input$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/input/Input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$input$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Documents/personal/projects/euai_act_helper/src/components/ui/textarea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Documents/personal/projects/euai_act_helper/src/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/ui/label.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step1Company
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/label.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const SIZE_OPTIONS = [
    {
        value: "1-10",
        label: "1–10",
        sub: "Solo / micro"
    },
    {
        value: "11-50",
        label: "11–50",
        sub: "Startup"
    },
    {
        value: "51-250",
        label: "51–250",
        sub: "Scale-up"
    },
    {
        value: "251-1000",
        label: "251–1,000",
        sub: "Mid-size"
    },
    {
        value: "1000+",
        label: "1,000+",
        sub: "Enterprise"
    }
];
function Step1Company({ data, onChange, errors }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-slate-900",
                        children: "Tell us about your company"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-slate-500",
                        children: "We'll use this to tailor your EU AI Act assessment."
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "company-name",
                        className: "text-sm font-medium text-slate-700",
                        children: "Company name"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        id: "company-name",
                        placeholder: "e.g. Acme AI Ltd",
                        value: data.name ?? "",
                        onChange: (e)=>onChange({
                                name: e.target.value
                            }),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-white", errors.name && "border-red-400")
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-500",
                        children: errors.name
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
                        lineNumber: 44,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "company-description",
                        className: "text-sm font-medium text-slate-700",
                        children: "What does your company do?"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-500",
                        children: "Describe in 1–3 sentences. No jargon needed."
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                id: "company-description",
                                placeholder: "e.g. We build software that helps hospitals automate patient triage using AI-driven priority scoring.",
                                value: data.description ?? "",
                                onChange: (e)=>onChange({
                                        description: e.target.value.slice(0, 400)
                                    }),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-white min-h-[100px] resize-none", errors.description && "border-red-400")
                            }, void 0, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute bottom-2 right-3 text-xs text-slate-400",
                                children: [
                                    (data.description ?? "").length,
                                    "/400"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    errors.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-500",
                        children: errors.description
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
                        lineNumber: 64,
                        columnNumber: 32
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        className: "text-sm font-medium text-slate-700",
                        children: "Company size"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-2 sm:grid-cols-5",
                        children: SIZE_OPTIONS.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onChange({
                                        employee_range: opt.value
                                    }),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-2 rounded-lg p-3 text-center cursor-pointer transition-all", data.employee_range === opt.value ? "border-blue-600 bg-blue-50" : "border-slate-200 hover:border-slate-300 bg-white"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-slate-900 text-sm",
                                        children: opt.label
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 mt-0.5",
                                        children: opt.sub
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, opt.value, true, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    errors.employee_range && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-500",
                        children: errors.employee_range
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
                        lineNumber: 87,
                        columnNumber: 35
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step2Role
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/tooltip.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const ROLE_OPTIONS = [
    {
        value: "provider",
        label: "We build AI",
        sub: "Provider",
        example: "We train, fine-tune, or develop our own AI models or AI-powered products."
    },
    {
        value: "deployer",
        label: "We use AI tools",
        sub: "Deployer",
        example: "We integrate third-party AI (OpenAI, Azure AI, Google Gemini, etc.) into our products or workflows."
    },
    {
        value: "both",
        label: "Both",
        sub: "Provider & Deployer",
        example: "We build some AI capabilities and also integrate external AI services."
    },
    {
        value: "unsure",
        label: "Not sure",
        sub: "Help me decide",
        example: "I'm not certain which category applies to us."
    }
];
function Step2Role({ data, onChange, errors }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-slate-900",
                                children: "What's your role with AI?"
                            }, void 0, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                        className: "text-slate-400 hover:text-slate-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                        side: "right",
                                        className: "max-w-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium mb-1",
                                                children: "Provider vs Deployer"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Provider:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Spotify building their own recommendation model.",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 92
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Deployer:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Spotify using a third-party recommendation engine via API."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400 mt-1",
                                                children: "This distinction matters under the EU AI Act — providers and deployers have different obligations."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-slate-500",
                        children: "This affects which EU AI Act obligations apply to you."
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: ROLE_OPTIONS.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onChange({
                                role: opt.value
                            }),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full border-2 rounded-lg p-4 text-left cursor-pointer transition-all", data.role === opt.value ? "border-blue-600 bg-blue-50" : "border-slate-200 hover:border-slate-300 bg-white"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-0.5 h-4 w-4 rounded-full border-2 flex-shrink-0", data.role === opt.value ? "border-blue-600 bg-blue-600" : "border-slate-300")
                                }, void 0, false, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-slate-900",
                                                    children: opt.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full",
                                                    children: opt.sub
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-500 mt-0.5",
                                            children: opt.example
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this)
                    }, opt.value, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            errors.role && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-red-500",
                children: errors.role
            }, void 0, false, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                lineNumber: 107,
                columnNumber: 23
            }, this),
            (data.role === "deployer" || data.role === "both") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        className: "text-sm font-medium text-slate-700",
                        children: [
                            "Which AI tools or vendors do you use?",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-400 font-normal",
                                children: "(optional)"
                            }, void 0, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                        placeholder: "e.g. OpenAI GPT-4, Google Vertex AI, Azure Cognitive Services...",
                        value: data.third_party_ai ?? "",
                        onChange: (e)=>onChange({
                                third_party_ai: e.target.value
                            }),
                        className: "bg-white min-h-[80px] resize-none"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step3AIDescription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/tooltip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$detect$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/lib/detect.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const CAPABILITY_OPTIONS = [
    {
        value: "natural_language_generation",
        label: "Generates text or code"
    },
    {
        value: "image_video_generation",
        label: "Creates images, video or audio"
    },
    {
        value: "decision_making",
        label: "Makes or suggests decisions"
    },
    {
        value: "scoring_ranking",
        label: "Scores, ranks or rates"
    },
    {
        value: "biometric_recognition",
        label: "Recognises faces, voices or identities"
    },
    {
        value: "emotion_detection",
        label: "Detects emotions or mental states"
    },
    {
        value: "classification",
        label: "Classifies or categorises"
    },
    {
        value: "recommendation",
        label: "Recommends content or products"
    },
    {
        value: "prediction",
        label: "Predicts future outcomes"
    },
    {
        value: "translation",
        label: "Translates languages"
    }
];
function Step3AIDescription({ data, onChange, errors, prefilled }) {
    const capabilities = data.capabilities ?? [];
    // Re-run auto-tagging whenever description changes — merge with manually selected
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!data.description) return;
        const detected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$detect$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectCapabilities"])(data.description);
        const merged = Array.from(new Set([
            ...data.capabilities ?? [],
            ...detected
        ]));
        if (merged.length !== (data.capabilities ?? []).length) {
            onChange({
                capabilities: merged
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        data.description
    ]);
    function toggleCapability(cap) {
        const next = capabilities.includes(cap) ? capabilities.filter((c)=>c !== cap) : [
            ...capabilities,
            cap
        ];
        onChange({
            capabilities: next
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-slate-900",
                        children: "Describe your AI system"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-slate-500",
                        children: "Tell us about the AI product or feature you want assessed."
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            prefilled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "h-4 w-4 text-blue-500 flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-blue-700",
                        children: "Pre-filled from your company description — edit or expand as needed."
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        className: "text-sm font-medium text-slate-700",
                        children: [
                            "AI system name ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-400 font-normal",
                                children: "(optional)"
                            }, void 0, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                                lineNumber: 76,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        placeholder: "e.g. RecruitBot, Triage AI, SmartLens...",
                        value: data.name ?? "",
                        onChange: (e)=>onChange({
                                name: e.target.value
                            }),
                        className: "bg-white"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        className: "text-sm font-medium text-slate-700",
                        children: "What does this AI system do?"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-500",
                        children: "Describe it plainly — what problem does it solve and how?"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                placeholder: "e.g. Scans CVs to rank job candidates for open roles and suggests an interview shortlist to the hiring manager.",
                                value: data.description ?? "",
                                onChange: (e)=>onChange({
                                        description: e.target.value.slice(0, 600)
                                    }),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-white min-h-[110px] resize-none", errors.description && "border-red-400")
                            }, void 0, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute bottom-2 right-3 text-xs text-slate-400",
                                children: [
                                    (data.description ?? "").length,
                                    "/600"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    errors.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-500",
                        children: errors.description
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-sm font-medium text-slate-700",
                                children: "What can it do?"
                            }, void 0, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-400",
                                children: "Auto-suggested from your description — tap to adjust"
                            }, void 0, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: CAPABILITY_OPTIONS.map((opt)=>{
                            const selected = capabilities.includes(opt.value);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>toggleCapability(opt.value),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm px-3 py-1.5 rounded-full border transition-all", selected ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"),
                                children: [
                                    selected ? "✓ " : "",
                                    opt.label
                                ]
                            }, opt.value, true, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    errors.capabilities && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-500",
                        children: errors.capabilities
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-sm font-medium text-slate-700",
                                children: "Is this a general-purpose AI model (GPAI)?"
                            }, void 0, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                        className: "text-slate-400 hover:text-slate-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                        side: "right",
                                        className: "max-w-xs",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs",
                                            children: "A GPAI model can perform many different tasks and is made available to others to build on — like GPT-4, Claude, Llama, or Stable Diffusion. If you're building the foundation model itself (not just using one), answer Yes."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            {
                                value: true,
                                label: "Yes"
                            },
                            {
                                value: false,
                                label: "No"
                            }
                        ].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onChange({
                                        is_gpai: opt.value
                                    }),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-2 rounded-lg px-6 py-2.5 text-sm font-medium transition-all", data.is_gpai === opt.value ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"),
                                children: opt.label
                            }, String(opt.value), false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    data.is_gpai && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-sm font-medium text-slate-700",
                                children: [
                                    "What are the likely downstream uses?",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400 font-normal",
                                        children: "(optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                placeholder: "e.g. Customer service chatbots, document summarisation, code generation...",
                                value: data.gpai_downstream_uses ?? "",
                                onChange: (e)=>onChange({
                                        gpai_downstream_uses: e.target.value
                                    }),
                                className: "bg-white min-h-[80px] resize-none"
                            }, void 0, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/personal/projects/euai_act_helper/src/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$render$2f$useRender$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/use-render/useRender.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
            secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
            destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
            outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
            ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
            link: "text-primary underline-offset-4 hover:underline"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant = "default", render, ...props }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$render$2f$useRender$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRender"])({
        defaultTagName: "span",
        props: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])({
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
                variant
            }), className)
        }, props),
        render,
        state: {
            slot: "badge",
            variant
        }
    });
}
;
}),
"[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step4Domain.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step4Domain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2d$pattern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/fingerprint-pattern.js [app-ssr] (ecmascript) <export default as Fingerprint>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/scale.js [app-ssr] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/car.js [app-ssr] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-ssr] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$types$2f$assessment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/types/assessment.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const DOMAIN_OPTIONS = [
    {
        value: "biometrics_identity",
        label: "Biometrics & Identity",
        description: "Face recognition, fingerprinting, voice ID",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2d$pattern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__["Fingerprint"],
        contextNote: "Biometric identification systems are listed as high-risk in Annex III. Real-time biometric surveillance in public spaces may be prohibited."
    },
    {
        value: "critical_infrastructure",
        label: "Critical Infrastructure",
        description: "Energy, water, transport, digital networks",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        contextNote: "AI used in critical infrastructure safety components is high-risk under Annex III."
    },
    {
        value: "education",
        label: "Education & Training",
        description: "Learning platforms, admissions, grading",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
        contextNote: "AI that determines access to education or assesses students is high-risk under Annex III."
    },
    {
        value: "employment",
        label: "Employment & HR",
        description: "Recruitment, performance, workforce management",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
        contextNote: "HR and recruitment AI is listed as high-risk in Annex III when used for hiring, promotion, or performance monitoring."
    },
    {
        value: "essential_services",
        label: "Financial & Essential Services",
        description: "Credit, insurance, housing, benefits",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
        contextNote: "AI used for creditworthiness assessment or insurance pricing affecting individuals is high-risk under Annex III."
    },
    {
        value: "healthcare",
        label: "Healthcare & Wellness",
        description: "Diagnostics, treatment, patient management",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        contextNote: "Medical AI devices may fall under both the EU AI Act and the Medical Device Regulation."
    },
    {
        value: "law_enforcement",
        label: "Law Enforcement",
        description: "Policing, crime prediction, evidence analysis",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        contextNote: "Law enforcement AI is high-risk under Annex III. Predictive policing based on individual profiling may be prohibited."
    },
    {
        value: "migration_asylum",
        label: "Migration & Immigration",
        description: "Border control, visa assessment, asylum",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        contextNote: "AI used in migration management and asylum processing is high-risk under Annex III."
    },
    {
        value: "justice_democracy",
        label: "Justice & Democracy",
        description: "Courts, electoral processes, legal decisions",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"],
        contextNote: "AI assisting judicial decisions or influencing elections is high-risk under Annex III."
    },
    {
        value: "transportation",
        label: "Transportation",
        description: "Autonomous vehicles, traffic, logistics",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"]
    },
    {
        value: "general_business",
        label: "Business Operations",
        description: "CRM, analytics, internal tooling, productivity",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
    },
    {
        value: "creative_entertainment",
        label: "Creative & Media",
        description: "Content creation, gaming, entertainment",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"]
    },
    {
        value: "other",
        label: "Other",
        description: "Doesn't fit the above categories",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"]
    }
];
function Step4Domain({ data, onChange, errors }) {
    const selectedDomain = DOMAIN_OPTIONS.find((d)=>d.value === data.domain);
    const isHighRisk = data.domain ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$types$2f$assessment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANNEX_III_DOMAINS"].includes(data.domain) : false;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-slate-900",
                        children: "What domain does your AI operate in?"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step4Domain.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-slate-500",
                        children: "The EU AI Act places different obligations depending on where AI is used."
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step4Domain.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step4Domain.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 gap-2",
                children: DOMAIN_OPTIONS.map((opt)=>{
                    const Icon = opt.icon;
                    const annex = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$types$2f$assessment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANNEX_III_DOMAINS"].includes(opt.value);
                    const selected = data.domain === opt.value;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onChange({
                                domain: opt.value
                            }),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-2 rounded-lg p-3 text-left cursor-pointer transition-all relative", selected ? "border-blue-600 bg-blue-50" : "border-slate-200 hover:border-slate-300 bg-white"),
                        children: [
                            annex && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute top-2 right-2 text-[10px] font-semibold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded-full",
                                children: "High Risk"
                            }, void 0, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step4Domain.tsx",
                                lineNumber: 148,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-5 w-5 mb-2", selected ? "text-blue-600" : "text-slate-400")
                            }, void 0, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step4Domain.tsx",
                                lineNumber: 152,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium", selected ? "text-blue-900" : "text-slate-800"),
                                children: opt.label
                            }, void 0, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step4Domain.tsx",
                                lineNumber: 153,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 mt-0.5 leading-tight",
                                children: opt.description
                            }, void 0, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step4Domain.tsx",
                                lineNumber: 156,
                                columnNumber: 15
                            }, this)
                        ]
                    }, opt.value, true, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step4Domain.tsx",
                        lineNumber: 136,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step4Domain.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            errors.domain && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-red-500",
                children: errors.domain
            }, void 0, false, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step4Domain.tsx",
                lineNumber: 161,
                columnNumber: 25
            }, this),
            selectedDomain?.contextNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-lg p-4 border text-sm", isHighRisk ? "bg-amber-50 border-amber-200 text-amber-800" : "bg-blue-50 border-blue-200 text-blue-800"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-xs flex-shrink-0 mt-0.5", isHighRisk ? "bg-amber-100 text-amber-700 border-amber-300" : "bg-blue-100 text-blue-700 border-blue-300"),
                            variant: "outline",
                            children: isHighRisk ? "Annex III" : "Note"
                        }, void 0, false, {
                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step4Domain.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: selectedDomain.contextNote
                        }, void 0, false, {
                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step4Domain.tsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step4Domain.tsx",
                    lineNumber: 172,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step4Domain.tsx",
                lineNumber: 164,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        className: "text-sm font-medium text-slate-700",
                        children: [
                            "Describe your specific use case within this domain",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-400 font-normal",
                                children: "(optional)"
                            }, void 0, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step4Domain.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step4Domain.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                        placeholder: "e.g. We analyse CV data to shortlist candidates for engineering roles at mid-sized tech companies...",
                        value: data.domain_detail ?? "",
                        onChange: (e)=>onChange({
                                domain_detail: e.target.value
                            }),
                        className: "bg-white min-h-[80px] resize-none"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step4Domain.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step4Domain.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step4Domain.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/personal/projects/euai_act_helper/src/components/ui/checkbox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$checkbox$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Checkbox$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/@base-ui/react/esm/checkbox/index.parts.js [app-ssr] (ecmascript) <export * as Checkbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
"use client";
;
;
;
;
function Checkbox({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$checkbox$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Checkbox$3e$__["Checkbox"].Root, {
        "data-slot": "checkbox",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$checkbox$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Checkbox$3e$__["Checkbox"].Indicator, {
            "data-slot": "checkbox-indicator",
            className: "grid place-content-center text-current transition-none [&>svg]:size-3.5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {}, void 0, false, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/ui/checkbox.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/ui/checkbox.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/ui/checkbox.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step5Impact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const END_USER_OPTIONS = [
    {
        value: "businesses",
        label: "Businesses",
        sub: "B2B — other companies are your customers"
    },
    {
        value: "consumers",
        label: "Consumers",
        sub: "B2C — individual members of the public"
    },
    {
        value: "public_authorities",
        label: "Public authorities",
        sub: "Government bodies, law enforcement, regulators"
    },
    {
        value: "mixed",
        label: "Mixed",
        sub: "A combination of the above"
    }
];
const AFFECTED_PERSONS_OPTIONS = [
    {
        value: "none",
        label: "None — internal tooling only"
    },
    {
        value: "<1k",
        label: "Fewer than 1,000 people"
    },
    {
        value: "1k-100k",
        label: "1,000 to 100,000 people"
    },
    {
        value: "100k-1m",
        label: "100,000 to 1 million people"
    },
    {
        value: "1m+",
        label: "Over 1 million people"
    }
];
const OVERSIGHT_OPTIONS = [
    {
        value: "full",
        label: "Full review",
        sub: "A human always reviews and approves before any action is taken"
    },
    {
        value: "partial",
        label: "Partial oversight",
        sub: "A human can override but may not always do so"
    },
    {
        value: "none",
        label: "Fully automated",
        sub: "Decisions are made and acted on without human review"
    }
];
const DECISION_TYPES = [
    {
        value: "makes_consequential_decisions",
        label: "Hiring, promotion, or firing decisions"
    },
    {
        value: "affects_access_to_services",
        label: "Access to credit, loans, or insurance"
    },
    {
        value: "used_by_authorities",
        label: "Access to healthcare or social benefits"
    },
    {
        value: "monitors_workers",
        label: "Employee monitoring or performance scoring"
    },
    {
        value: "used_in_education_assessment",
        label: "Educational grading or progression"
    },
    {
        value: "processes_biometric_data",
        label: "Criminal risk scoring or profiling"
    },
    {
        value: "operates_critical_infrastructure",
        label: "Operates safety-critical infrastructure"
    }
];
function Step5Impact({ deployment, riskFlags, aiSystem, onDeploymentChange, onRiskFlagsChange, onAISystemChange, errors }) {
    const consequential = riskFlags.consequential_decisions ?? false;
    const highRiskIndicators = riskFlags.high_risk_indicators ?? [];
    function toggleIndicator(indicator) {
        const next = highRiskIndicators.includes(indicator) ? highRiskIndicators.filter((i)=>i !== indicator) : [
            ...highRiskIndicators,
            indicator
        ];
        onRiskFlagsChange({
            high_risk_indicators: next
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-slate-900",
                        children: "Who is affected and how?"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-slate-500",
                        children: "Help us understand the impact your AI system has on people."
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        className: "text-sm font-medium text-slate-700",
                        children: "Who are your end users?"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                        children: END_USER_OPTIONS.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onDeploymentChange({
                                        end_users: opt.value
                                    }),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-2 rounded-lg p-3 text-left cursor-pointer transition-all", deployment.end_users === opt.value ? "border-blue-600 bg-blue-50" : "border-slate-200 hover:border-slate-300 bg-white"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-0.5 h-4 w-4 rounded-full border-2 flex-shrink-0", deployment.end_users === opt.value ? "border-blue-600 bg-blue-600" : "border-slate-300")
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-slate-900",
                                                    children: opt.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: opt.sub
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            }, opt.value, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    errors.end_users && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-500",
                        children: errors.end_users
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                        lineNumber: 109,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        className: "text-sm font-medium text-slate-700",
                        children: "Approximately how many people could be affected by this AI system?"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: AFFECTED_PERSONS_OPTIONS.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onDeploymentChange({
                                        affected_persons: opt.value
                                    }),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full border-2 rounded-lg px-4 py-3 text-left cursor-pointer transition-all flex items-center gap-3", deployment.affected_persons === opt.value ? "border-blue-600 bg-blue-50" : "border-slate-200 hover:border-slate-300 bg-white"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 rounded-full border-2 flex-shrink-0", deployment.affected_persons === opt.value ? "border-blue-600 bg-blue-600" : "border-slate-300")
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-slate-700",
                                        children: opt.label
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, opt.value, true, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        className: "text-sm font-medium text-slate-700",
                        children: "Does this AI make or influence decisions about specific individuals?"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            {
                                value: true,
                                label: "Yes"
                            },
                            {
                                value: false,
                                label: "No"
                            }
                        ].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onRiskFlagsChange({
                                        consequential_decisions: opt.value
                                    }),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-2 rounded-lg px-6 py-2.5 text-sm font-medium transition-all", consequential === opt.value ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"),
                                children: opt.label
                            }, String(opt.value), false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    consequential && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-600",
                                children: [
                                    "What type of decisions?",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400",
                                        children: "(select all that apply)"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: DECISION_TYPES.map((dt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-3 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                checked: highRiskIndicators.includes(dt.value),
                                                onCheckedChange: ()=>toggleIndicator(dt.value)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                                lineNumber: 173,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-slate-700",
                                                children: dt.label
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, dt.value, true, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        className: "text-sm font-medium text-slate-700",
                        children: "How much human review happens before decisions take effect?"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: OVERSIGHT_OPTIONS.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onAISystemChange({
                                        human_oversight: opt.value,
                                        automated_decision_making: opt.value === "none"
                                    }),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full border-2 rounded-lg p-3 text-left cursor-pointer transition-all", aiSystem.human_oversight === opt.value ? "border-blue-600 bg-blue-50" : "border-slate-200 hover:border-slate-300 bg-white"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-0.5 h-4 w-4 rounded-full border-2 flex-shrink-0", aiSystem.human_oversight === opt.value ? "border-blue-600 bg-blue-600" : "border-slate-300")
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-slate-900",
                                                    children: opt.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: opt.sub
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                    lineNumber: 202,
                                    columnNumber: 15
                                }, this)
                            }, opt.value, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        className: "text-sm font-medium text-slate-700",
                        children: "Additional context"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            {
                                key: "vulnerable_populations",
                                label: "Involves children, elderly, or other vulnerable groups"
                            },
                            {
                                key: "transparency_obligations",
                                label: "Involves AI-generated content or a chatbot users interact with directly"
                            }
                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-3 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                        checked: riskFlags[item.key] ?? false,
                                        onCheckedChange: (checked)=>onRiskFlagsChange({
                                                [item.key]: checked === true
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-slate-700",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.key, true, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step6ProhibitedFlags
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/tooltip.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const FLAGS = [
    {
        key: "social_scoring",
        question: "Does your AI assign scores or classifications to people based on their social behaviour, personal characteristics, or socioeconomic status — for purposes unrelated to why the data was originally collected?",
        article: "Article 5(1)(c)",
        tooltip: "This relates to 'social scoring' by public authorities or private entities, which is prohibited. For example, scoring citizens on trustworthiness to deny them services."
    },
    {
        key: "realtime_biometric_surveillance",
        question: "Does your AI use real-time remote biometric identification (e.g. facial recognition) in publicly accessible spaces?",
        article: "Article 5(1)(d)",
        tooltip: "Real-time biometric identification in public is prohibited with very narrow exceptions for law enforcement in specific serious crime scenarios."
    },
    {
        key: "emotion_recognition_workplace_education",
        question: "Does your AI detect or infer emotions of people in workplace or educational settings?",
        article: "Article 5(1)(f)",
        tooltip: "Emotion recognition systems in workplaces and schools are prohibited, with narrow exceptions for medical or safety purposes."
    },
    {
        key: "subliminal_manipulation",
        question: "Does your AI use techniques that operate below a person's awareness to manipulate their behaviour in ways that could harm them?",
        article: "Article 5(1)(a)",
        tooltip: "Subliminal manipulation — influencing people without their awareness in harmful ways — is prohibited regardless of who deploys it."
    },
    {
        key: "predictive_policing_individual",
        question: "Does your AI make individual-level predictions about whether a specific person will commit a crime, based on profiling or personality traits?",
        article: "Article 5(1)(d)",
        tooltip: "Predictive policing based on profiling individuals (rather than analysing objective facts) is prohibited."
    }
];
function Step6ProhibitedFlags({ data, onChange, errors }) {
    const prohibitedFlags = data.prohibited_flags ?? [];
    // Track per-question answers (yes/no/unsure) locally via flags list
    function getAnswer(key) {
        if (prohibitedFlags.includes(key)) return "yes";
        // We store "no" and "unsure" implicitly — absence = unanswered or no
        return null;
    }
    function setAnswer(key, answer) {
        let next;
        if (answer === "yes") {
            next = prohibitedFlags.includes(key) ? prohibitedFlags : [
                ...prohibitedFlags,
                key
            ];
        } else {
            next = prohibitedFlags.filter((f)=>f !== key);
        }
        onChange({
            prohibited_flags: next
        });
    }
    const hasYes = prohibitedFlags.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-slate-900",
                        children: "A few more questions"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-slate-500",
                        children: "These help us give you a complete picture of your position under the EU AI Act."
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            hasYes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-amber-800",
                                children: "Heads up"
                            }, void 0, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-amber-700 mt-0.5",
                                children: "One or more of your answers may indicate AI use that is potentially prohibited under the EU AI Act. This will be flagged in your full assessment — we recommend seeking legal advice."
                            }, void 0, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: FLAGS.map((flag)=>{
                    const answer = getAnswer(flag.key);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-slate-200 rounded-lg p-4 bg-white space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-800 flex-1",
                                        children: flag.question
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                                className: "text-slate-400 hover:text-slate-600 flex-shrink-0 mt-0.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                                side: "left",
                                                className: "max-w-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-medium mb-1 text-blue-300",
                                                        children: flag.article
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs",
                                                        children: flag.tooltip
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    "yes",
                                    "no",
                                    "unsure"
                                ].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setAnswer(flag.key, opt),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm px-4 py-1.5 rounded-full border transition-all", answer === opt ? opt === "yes" ? "border-amber-500 bg-amber-50 text-amber-700 font-medium" : "border-blue-600 bg-blue-50 text-blue-700 font-medium" : "border-slate-200 text-slate-500 hover:border-slate-300"),
                                        children: opt === "yes" ? "Yes" : opt === "no" ? "No" : "Not sure"
                                    }, opt, false, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx",
                                        lineNumber: 131,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this)
                        ]
                    }, flag.key, true, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx",
                        lineNumber: 113,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step7Geography
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const GEOGRAPHY_OPTIONS = [
    {
        value: "targets_eu_users",
        label: "We target users or customers in the EU",
        sub: "Our product or service is marketed to EU residents"
    },
    {
        value: "processes_eu_data",
        label: "Our AI processes personal data of EU residents",
        sub: "Even if we're not based in the EU"
    },
    {
        value: "incorporated_in_eu",
        label: "We are incorporated or have offices in the EU",
        sub: "Our company has a legal presence in an EU member state"
    },
    {
        value: "outputs_felt_in_eu",
        label: "Our AI's outputs are used or felt within the EU",
        sub: "e.g. decisions made by our AI affect EU citizens"
    },
    {
        value: "no_eu_exposure",
        label: "None of the above — we have no EU exposure",
        sub: "Our AI operates entirely outside the EU"
    }
];
const STAGE_OPTIONS = [
    {
        value: "concept",
        label: "Concept / planning",
        sub: "Not yet in development"
    },
    {
        value: "in_development",
        label: "In development",
        sub: "Being built, not yet deployed"
    },
    {
        value: "deployed_internally",
        label: "Deployed internally",
        sub: "Used within our company only"
    },
    {
        value: "deployed_to_customers",
        label: "Deployed to customers",
        sub: "Live with real users"
    },
    {
        value: "scaled",
        label: "Scaled / widely deployed",
        sub: "Large-scale production use"
    }
];
function Step7Geography({ riskFlags, deploymentStage, onRiskFlagsChange, onDeploymentStageChange, errors }) {
    const geography = riskFlags.geography ?? [];
    function toggleGeography(flag) {
        if (flag === "no_eu_exposure") {
            // Exclusive — deselects all others
            const alreadySelected = geography.includes("no_eu_exposure");
            onRiskFlagsChange({
                geography: alreadySelected ? [] : [
                    "no_eu_exposure"
                ]
            });
            return;
        }
        // Deselect "no_eu_exposure" when selecting anything else
        const withoutNone = geography.filter((g)=>g !== "no_eu_exposure");
        const next = withoutNone.includes(flag) ? withoutNone.filter((g)=>g !== flag) : [
            ...withoutNone,
            flag
        ];
        onRiskFlagsChange({
            geography: next
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-slate-900",
                        children: "Almost done!"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-slate-500",
                        children: "Just a couple of questions about where you operate."
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        className: "text-sm font-medium text-slate-700",
                        children: [
                            "Where do you operate or plan to operate?",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-400 font-normal",
                                children: "(select all that apply)"
                            }, void 0, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: GEOGRAPHY_OPTIONS.map((opt)=>{
                            const selected = geography.includes(opt.value);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-start gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all", selected ? "border-blue-600 bg-blue-50" : "border-slate-200 hover:border-slate-300 bg-white"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                        checked: selected,
                                        onCheckedChange: ()=>toggleGeography(opt.value),
                                        className: "mt-0.5 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                                        lineNumber: 105,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-slate-900",
                                                children: opt.label
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500",
                                                children: opt.sub
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                                        lineNumber: 110,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, opt.value, true, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    errors.geography && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-500",
                        children: errors.geography
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                        lineNumber: 118,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        className: "text-sm font-medium text-slate-700",
                        children: "What stage is your AI system at?"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                        children: STAGE_OPTIONS.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onDeploymentStageChange(opt.value),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-2 rounded-lg p-3 text-left cursor-pointer transition-all", deploymentStage === opt.value ? "border-blue-600 bg-blue-50" : "border-slate-200 hover:border-slate-300 bg-white"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-0.5 h-4 w-4 rounded-full border-2 flex-shrink-0", deploymentStage === opt.value ? "border-blue-600 bg-blue-600" : "border-slate-300")
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-slate-900",
                                                    children: opt.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: opt.sub
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this)
                            }, opt.value, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/WizardShell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WizardShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$classify$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/lib/classify.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$detect$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/lib/detect.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$wizard$2f$ProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/ProgressBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$wizard$2f$StepNavigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/StepNavigation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$steps$2f$Step1Company$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step1Company.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$steps$2f$Step2Role$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step2Role.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$steps$2f$Step3AIDescription$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step3AIDescription.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$steps$2f$Step4Domain$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step4Domain.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$steps$2f$Step5Impact$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step5Impact.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$steps$2f$Step6ProhibitedFlags$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step6ProhibitedFlags.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$steps$2f$Step7Geography$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/steps/Step7Geography.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const STEP_TITLES = [
    "Company Info",
    "Your Role",
    "AI System",
    "Domain",
    "Impact",
    "Risk Check",
    "Geography"
];
const TOTAL_STEPS = STEP_TITLES.length;
const INITIAL_DRAFT = {
    company: {},
    ai_system: {},
    deployment: {},
    risk_flags: {
        prohibited_flags: [],
        high_risk_indicators: [],
        geography: [],
        consequential_decisions: false,
        vulnerable_populations: false,
        transparency_obligations: false
    }
};
function validate(step, draft) {
    const errors = {};
    if (step === 1) {
        if (!draft.company.name?.trim()) errors.name = "Please enter your company name.";
        if (!draft.company.description?.trim()) errors.description = "Please describe your company.";
        if (!draft.company.employee_range) errors.employee_range = "Please select a company size.";
    }
    if (step === 2) {
        if (!draft.deployment.role) errors.role = "Please select your role.";
    }
    if (step === 3) {
        if (!draft.ai_system.description?.trim()) errors.description = "Please describe your AI system.";
    }
    if (step === 4) {
        if (!draft.deployment.domain) errors.domain = "Please select a domain.";
    }
    return errors;
}
function WizardShell() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_DRAFT);
    const [deploymentStage, setDeploymentStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("forward");
    const [aiDescriptionPrefilled, setAIDescriptionPrefilled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [prefillConfidence, setPrefillConfidence] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Load pre-fill data from the landing page URL fetch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = sessionStorage.getItem("euai_prefill");
        if (!stored) return;
        try {
            const { draft: prefilled, confidence } = JSON.parse(stored);
            setDraft(prefilled);
            setPrefillConfidence(confidence ?? {});
            setAIDescriptionPrefilled(true);
            sessionStorage.removeItem("euai_prefill");
        } catch  {
        // ignore malformed data
        }
    }, []);
    function updateCompany(update) {
        setDraft((d)=>({
                ...d,
                company: {
                    ...d.company,
                    ...update
                }
            }));
    }
    function updateAISystem(update) {
        setDraft((d)=>({
                ...d,
                ai_system: {
                    ...d.ai_system,
                    ...update
                }
            }));
    }
    function updateDeployment(update) {
        setDraft((d)=>({
                ...d,
                deployment: {
                    ...d.deployment,
                    ...update
                }
            }));
    }
    function updateRiskFlags(update) {
        setDraft((d)=>({
                ...d,
                risk_flags: {
                    ...d.risk_flags,
                    ...update
                }
            }));
    }
    function handleNext() {
        const stepErrors = validate(step, draft);
        if (Object.keys(stepErrors).length > 0) {
            setErrors(stepErrors);
            return;
        }
        setErrors({});
        // When leaving Step 1, use company description to pre-fill AI system + domain
        // (only if not already pre-filled from the URL scan)
        if (step === 1 && !prefillConfidence.description) {
            const companyText = draft.company.description ?? "";
            setDraft((d)=>{
                const needsPrefill = !d.ai_system.description?.trim();
                const description = needsPrefill ? companyText : d.ai_system.description;
                const detected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$detect$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectCapabilities"])(description);
                const merged = Array.from(new Set([
                    ...d.ai_system.capabilities ?? [],
                    ...detected
                ]));
                const domain = d.deployment.domain ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$detect$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectDomain"])(companyText) ?? undefined;
                if (needsPrefill) setAIDescriptionPrefilled(true);
                return {
                    ...d,
                    ai_system: {
                        ...d.ai_system,
                        description,
                        capabilities: merged
                    },
                    deployment: {
                        ...d.deployment,
                        domain
                    }
                };
            });
        }
        if (step === TOTAL_STEPS) {
            const assessment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$classify$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFinalAssessment"])(draft);
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            router.push("/results");
            return;
        }
        setDirection("forward");
        setStep((s)=>s + 1);
    }
    function handleBack() {
        setErrors({});
        setDirection("back");
        setStep((s)=>Math.max(1, s - 1));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white border-b border-slate-200 px-4 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded",
                                    children: "EU AI Act"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/WizardShell.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-slate-500",
                                    children: "Compliance Helper"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/WizardShell.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/WizardShell.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$wizard$2f$ProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            currentStep: step,
                            totalSteps: TOTAL_STEPS,
                            stepTitles: STEP_TITLES
                        }, void 0, false, {
                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/WizardShell.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/WizardShell.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/WizardShell.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 px-4 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-in fade-in-0 slide-in-from-right-4 duration-200",
                            children: [
                                step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$steps$2f$Step1Company$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    data: draft.company,
                                    onChange: updateCompany,
                                    errors: errors
                                }, void 0, false, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/WizardShell.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this),
                                step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$steps$2f$Step2Role$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    data: draft.deployment,
                                    onChange: updateDeployment,
                                    errors: errors
                                }, void 0, false, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/WizardShell.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this),
                                step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$steps$2f$Step3AIDescription$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    data: draft.ai_system,
                                    onChange: updateAISystem,
                                    errors: errors,
                                    prefilled: aiDescriptionPrefilled
                                }, void 0, false, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/WizardShell.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this),
                                step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$steps$2f$Step4Domain$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    data: draft.deployment,
                                    onChange: updateDeployment,
                                    errors: errors
                                }, void 0, false, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/WizardShell.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this),
                                step === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$steps$2f$Step5Impact$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    deployment: draft.deployment,
                                    riskFlags: draft.risk_flags,
                                    aiSystem: draft.ai_system,
                                    onDeploymentChange: updateDeployment,
                                    onRiskFlagsChange: updateRiskFlags,
                                    onAISystemChange: updateAISystem,
                                    errors: errors
                                }, void 0, false, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/WizardShell.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                step === 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$steps$2f$Step6ProhibitedFlags$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    data: draft.risk_flags,
                                    onChange: updateRiskFlags,
                                    errors: errors
                                }, void 0, false, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/WizardShell.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this),
                                step === 7 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$steps$2f$Step7Geography$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    riskFlags: draft.risk_flags,
                                    deploymentStage: deploymentStage,
                                    onRiskFlagsChange: updateRiskFlags,
                                    onDeploymentStageChange: setDeploymentStage,
                                    errors: errors
                                }, void 0, false, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/WizardShell.tsx",
                                    lineNumber: 193,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `step-${step}-${direction}`, true, {
                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/WizardShell.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$wizard$2f$StepNavigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            onBack: handleBack,
                            onNext: handleNext,
                            isFirst: step === 1,
                            isLast: step === TOTAL_STEPS
                        }, void 0, false, {
                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/WizardShell.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/WizardShell.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/WizardShell.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/wizard/WizardShell.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Documents_personal_projects_euai_act_helper_src_03kr.ry._.js.map
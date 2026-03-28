module.exports = [
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
"[project]/Documents/personal/projects/euai_act_helper/src/lib/extract.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractDraftFromScrape",
    ()=>extractDraftFromScrape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$detect$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/lib/detect.ts [app-ssr] (ecmascript)");
;
// ─── Company name ─────────────────────────────────────────────────────────────
function extractCompanyName(data) {
    // Prefer og:site_name, then strip " | ..." suffixes from title
    if (data.siteName) return data.siteName;
    const name = data.ogTitle || data.title;
    // Strip common suffixes: "Acme - Home", "Acme | AI Platform"
    return name.replace(/\s*[|\-–—]\s*.+$/, "").trim();
}
// ─── End users (B2B vs B2C) ───────────────────────────────────────────────────
const B2B_SIGNALS = [
    "enterprise",
    "for teams",
    "for businesses",
    "for companies",
    "for organizations",
    "b2b",
    "saas",
    "api access",
    "sales team",
    "workforce",
    "your company",
    "for your business",
    "platform for",
    "used by companies",
    "trusted by teams",
    "per seat",
    "per user/month",
    "annual plan",
    "custom pricing",
    "talk to sales",
    "book a demo",
    "request a demo",
    "contact sales"
];
const B2C_SIGNALS = [
    "sign up free",
    "it's free",
    "free forever",
    "for individuals",
    "personal plan",
    "b2c",
    "download the app",
    "get started for free",
    "create your account",
    "job seekers",
    "job seeker",
    "for you",
    "your career",
    "your job search",
    "candidates",
    "find your next job",
    "get hired"
];
function detectEndUsers(text) {
    const lower = text.toLowerCase();
    const b2bScore = B2B_SIGNALS.filter((s)=>lower.includes(s)).length;
    const b2cScore = B2C_SIGNALS.filter((s)=>lower.includes(s)).length;
    if (b2bScore > 0 && b2cScore > 0) return "mixed";
    if (b2bScore > b2cScore) return "businesses";
    if (b2cScore > b2bScore) return "consumers";
    return undefined;
}
// ─── Geography ────────────────────────────────────────────────────────────────
const EU_COUNTRY_NAMES = [
    "germany",
    "france",
    "spain",
    "italy",
    "netherlands",
    "sweden",
    "finland",
    "denmark",
    "austria",
    "belgium",
    "poland",
    "czech republic",
    "romania",
    "portugal",
    "greece",
    "hungary",
    "ireland",
    "croatia",
    "slovakia",
    "bulgaria",
    "slovenia",
    "estonia",
    "latvia",
    "lithuania",
    "luxembourg",
    "malta",
    "cyprus"
];
function detectGeography(text) {
    const lower = text.toLowerCase();
    const flags = new Set();
    const euSignals = [
        "gdpr",
        "european union",
        " eu ",
        "eu-based",
        "eu customers",
        "eu users",
        "europe",
        "european",
        ...EU_COUNTRY_NAMES
    ];
    if (euSignals.some((s)=>lower.includes(s))) {
        flags.add("targets_eu_users");
    }
    if (lower.includes("gdpr") || lower.includes("data protection")) {
        flags.add("processes_eu_data");
    }
    return Array.from(flags);
}
// ─── Role hint ────────────────────────────────────────────────────────────────
function detectRole(text) {
    const lower = text.toLowerCase();
    const providerSignals = [
        "our ai",
        "we built",
        "we developed",
        "our model",
        "our algorithm",
        "proprietary ai",
        "our machine learning",
        "we train",
        "we fine-tuned"
    ];
    const deployerSignals = [
        "powered by openai",
        "powered by gpt",
        "uses claude",
        "built on",
        "azure ai",
        "google ai",
        "anthropic",
        "openai api"
    ];
    const isProvider = providerSignals.some((s)=>lower.includes(s));
    const isDeployer = deployerSignals.some((s)=>lower.includes(s));
    if (isProvider && !isDeployer) return "provider";
    if (isDeployer && !isProvider) return "deployer";
    return undefined;
}
function extractDraftFromScrape(data) {
    const allText = [
        data.description,
        data.bodyText
    ].join(" ");
    const shortText = [
        data.description,
        data.bodyText.slice(0, 2000)
    ].join(" ");
    const companyName = extractCompanyName(data);
    const companyDescription = data.description || data.ogTitle || "";
    const domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$detect$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectDomain"])(allText);
    const capabilities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$detect$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectCapabilities"])(allText);
    const endUsers = detectEndUsers(shortText);
    const geography = detectGeography(allText);
    const role = detectRole(shortText);
    const draft = {
        company: {
            ...companyName ? {
                name: companyName
            } : {},
            ...companyDescription ? {
                description: companyDescription
            } : {}
        },
        ai_system: {
            ...companyDescription ? {
                description: companyDescription
            } : {},
            ...capabilities.length > 0 ? {
                capabilities
            } : {}
        },
        deployment: {
            ...domain ? {
                domain
            } : {},
            ...endUsers ? {
                end_users: endUsers
            } : {},
            ...role ? {
                role
            } : {}
        },
        risk_flags: {
            prohibited_flags: [],
            high_risk_indicators: [],
            geography,
            consequential_decisions: false,
            vulnerable_populations: false,
            transparency_obligations: false
        }
    };
    return {
        draft,
        confidence: {
            companyName: !!companyName,
            description: !!companyDescription,
            domain: !!domain,
            capabilities: capabilities.length > 0,
            endUsers: !!endUsers,
            geography: geography.length > 0,
            role: !!role
        }
    };
}
}),
"[project]/Documents/personal/projects/euai_act_helper/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$extract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/lib/extract.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
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
function LandingPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    async function handleAnalyse(e) {
        e.preventDefault();
        if (!url.trim()) return;
        setError("");
        setLoading(true);
        try {
            const res = await fetch("/api/prefill", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    url: url.trim()
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error ?? "Something went wrong fetching that URL.");
                setLoading(false);
                return;
            }
            const { draft, confidence } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$lib$2f$extract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractDraftFromScrape"])(data);
            // Merge extracted draft over initial empty draft
            const merged = {
                company: {
                    ...INITIAL_DRAFT.company,
                    ...draft.company
                },
                ai_system: {
                    ...INITIAL_DRAFT.ai_system,
                    ...draft.ai_system
                },
                deployment: {
                    ...INITIAL_DRAFT.deployment,
                    ...draft.deployment
                },
                risk_flags: {
                    ...INITIAL_DRAFT.risk_flags,
                    ...draft.risk_flags
                }
            };
            sessionStorage.setItem("euai_prefill", JSON.stringify({
                draft: merged,
                confidence,
                prefilled: true
            }));
            router.push("/assess");
        } catch  {
            setError("Could not reach that URL. Try filling in the form manually.");
            setLoading(false);
        }
    }
    function handleManual() {
        sessionStorage.removeItem("euai_prefill");
        router.push("/assess");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white flex flex-col items-center justify-center px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-xl text-center space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full",
                        children: "EU AI Act Compliance Helper"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/page.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/page.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-slate-900 tracking-tight",
                            children: [
                                "Know your EU AI Act",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 32
                                }, this),
                                "obligations in minutes"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/page.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-slate-500",
                            children: "Enter your company website and we'll pre-fill your assessment automatically — then you review and confirm."
                        }, void 0, false, {
                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/page.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/page.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleAnalyse,
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "text",
                                            placeholder: "yourcompany.com",
                                            value: url,
                                            onChange: (e)=>{
                                                setUrl(e.target.value);
                                                setError("");
                                            },
                                            className: "pl-9 bg-white h-11 text-base",
                                            disabled: loading
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    disabled: loading || !url.trim(),
                                    className: "bg-blue-600 hover:bg-blue-700 text-white h-11 px-5 gap-2 shrink-0",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-4 w-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this),
                                            "Fetching…"
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "Analyse",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/page.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "h-4 w-4 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this),
                                error
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/page.tsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/page.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: handleManual,
                    className: "text-sm text-slate-400 hover:text-slate-600 transition-colors",
                    children: "or fill in the form manually →"
                }, void 0, false, {
                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/page.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-400",
                    children: "We only fetch your public homepage. No data is stored."
                }, void 0, false, {
                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/page.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/page.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/page.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Documents_personal_projects_euai_act_helper_src_0fzr4it._.js.map
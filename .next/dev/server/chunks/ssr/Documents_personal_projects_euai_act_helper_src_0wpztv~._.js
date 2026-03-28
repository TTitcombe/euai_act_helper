module.exports = [
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
"[project]/Documents/personal/projects/euai_act_helper/src/components/results/ResultSummary.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$types$2f$assessment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/types/assessment.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function getClassification(assessment) {
    const c = assessment.preliminary_classification;
    if (c.likely_prohibited) return "prohibited";
    if (c.likely_high_risk) return "high_risk";
    if (c.likely_gpai) return "gpai";
    if (c.likely_limited_risk) return "limited_risk";
    return "minimal_risk";
}
const CLASSIFICATION_CONFIG = {
    prohibited: {
        label: "Potentially Prohibited",
        badgeClass: "bg-red-100 text-red-700 border-red-300",
        iconClass: "text-red-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"],
        headline: "One or more aspects of your AI system may fall under prohibited uses in the EU AI Act.",
        nextSteps: [
            "Seek specialist legal advice before proceeding — prohibited AI carries significant penalties.",
            "Review Article 5 of the EU AI Act in detail with your legal team.",
            "Consider whether your use case can be redesigned to avoid prohibited elements."
        ]
    },
    high_risk: {
        label: "Likely High Risk",
        badgeClass: "bg-amber-100 text-amber-700 border-amber-300",
        iconClass: "text-amber-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        headline: "Your AI system likely falls into a high-risk category under Annex III of the EU AI Act.",
        nextSteps: [
            "Register your system in the EU AI Act database before market placement.",
            "Conduct a conformity assessment and maintain technical documentation.",
            "Implement human oversight mechanisms and establish a risk management system."
        ]
    },
    gpai: {
        label: "General Purpose AI",
        badgeClass: "bg-purple-100 text-purple-700 border-purple-300",
        iconClass: "text-purple-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        headline: "Your system is a general-purpose AI model with specific obligations under the EU AI Act.",
        nextSteps: [
            "Prepare and maintain technical documentation for your GPAI model.",
            "Implement a copyright policy and publish a summary of training data.",
            "If the model is systemic risk (>10²⁵ FLOPs training compute), additional obligations apply."
        ]
    },
    limited_risk: {
        label: "Limited Risk",
        badgeClass: "bg-yellow-100 text-yellow-700 border-yellow-300",
        iconClass: "text-yellow-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"],
        headline: "Your AI system has transparency obligations under the EU AI Act.",
        nextSteps: [
            "Ensure users are informed when they are interacting with an AI (e.g. chatbots).",
            "Label AI-generated content (images, audio, video, text) as artificially generated.",
            "Maintain basic documentation of your AI system's capabilities and limitations."
        ]
    },
    minimal_risk: {
        label: "Minimal Risk",
        badgeClass: "bg-green-100 text-green-700 border-green-300",
        iconClass: "text-green-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
        headline: "Your AI system appears to fall into the minimal risk category.",
        nextSteps: [
            "No mandatory obligations under the EU AI Act, but voluntary codes of conduct are encouraged.",
            "Keep basic documentation in case your system's use expands into higher-risk areas.",
            "Monitor for updates — the EU AI Act is being actively implemented through 2027."
        ]
    }
};
function generateBulletPoints(assessment) {
    const points = [];
    const { deployment, ai_system, risk_flags, company } = assessment;
    if (deployment.domain && __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$types$2f$assessment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANNEX_III_DOMAINS"].includes(deployment.domain)) {
        points.push(`Your domain (${deployment.domain.replace(/_/g, " ")}) is listed in Annex III as high-risk.`);
    }
    if (risk_flags.geography.includes("no_eu_exposure")) {
        points.push("You indicated no EU exposure — the EU AI Act may not apply to your system.");
    } else if (risk_flags.geography.length > 0) {
        points.push("Your system has EU exposure, so the EU AI Act is likely to apply.");
    }
    if (ai_system.human_oversight === "full") {
        points.push("Full human oversight is a positive compliance factor.");
    } else if (ai_system.human_oversight === "none") {
        points.push("Fully automated decision-making increases regulatory scrutiny.");
    }
    if (risk_flags.vulnerable_populations) {
        points.push("Involvement of vulnerable populations (children, elderly) increases obligations.");
    }
    if (deployment.role === "deployer" || deployment.role === "both") {
        points.push("As a deployer of third-party AI, you have obligations around transparency and monitoring.");
    }
    if (risk_flags.prohibited_flags.length > 0) {
        points.push(`Flags raised for: ${risk_flags.prohibited_flags.map((f)=>f.replace(/_/g, " ")).join(", ")}.`);
    }
    if (company.employee_range === "1-10" || company.employee_range === "11-50") {
        points.push("As a small company, some obligations may be lighter — but core rules still apply.");
    }
    return points.slice(0, 5);
}
function ResultSummary({ assessment }) {
    const level = getClassification(assessment);
    const config = CLASSIFICATION_CONFIG[level];
    const Icon = config.icon;
    const bullets = generateBulletPoints(assessment);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: `h-6 w-6 ${config.iconClass}`
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/ResultSummary.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                        className: `text-sm px-3 py-1 border ${config.badgeClass}`,
                        variant: "outline",
                        children: config.label
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/ResultSummary.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-slate-400",
                        children: [
                            "Confidence: ",
                            assessment.preliminary_classification.confidence
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/ResultSummary.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/ResultSummary.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-700 leading-relaxed",
                children: config.headline
            }, void 0, false, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/ResultSummary.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            bullets.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-slate-700",
                        children: "Key findings"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/ResultSummary.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2",
                        children: bullets.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-2 text-sm text-slate-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-500 mt-0.5 flex-shrink-0",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/ResultSummary.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this),
                                    b
                                ]
                            }, i, true, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/ResultSummary.tsx",
                                lineNumber: 167,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/ResultSummary.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/ResultSummary.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-50 rounded-lg p-4 border border-slate-200 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-slate-700",
                        children: "Recommended next steps"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/ResultSummary.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "space-y-2",
                        children: config.nextSteps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-3 text-sm text-slate-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center mt-0.5",
                                        children: i + 1
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/ResultSummary.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this),
                                    step
                                ]
                            }, i, true, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/ResultSummary.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/ResultSummary.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/ResultSummary.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-slate-400",
                children: "This assessment is indicative only and does not constitute legal advice. The EU AI Act is complex — consult a qualified legal professional for binding guidance."
            }, void 0, false, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/ResultSummary.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/ResultSummary.tsx",
        lineNumber: 147,
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
"[project]/Documents/personal/projects/euai_act_helper/src/components/results/JsonOutput.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JsonOutput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function JsonOutput({ assessment }) {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const json = JSON.stringify(assessment, null, 2);
    function handleCopy() {
        navigator.clipboard.writeText(json);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    }
    function handleDownload() {
        const blob = new Blob([
            json
        ], {
            type: "application/json"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `euai-assessment-${assessment.company.name.toLowerCase().replace(/\s+/g, "-") || "unknown"}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-slate-700",
                        children: "Structured assessment data"
                    }, void 0, false, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/JsonOutput.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: handleCopy,
                                className: "gap-1.5 text-xs",
                                children: [
                                    copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "h-3.5 w-3.5 text-green-600"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/JsonOutput.tsx",
                                        lineNumber: 38,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/JsonOutput.tsx",
                                        lineNumber: 38,
                                        columnNumber: 74
                                    }, this),
                                    copied ? "Copied!" : "Copy"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/JsonOutput.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: handleDownload,
                                className: "gap-1.5 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/JsonOutput.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    "Download"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/JsonOutput.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/JsonOutput.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/JsonOutput.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900 rounded-lg overflow-auto max-h-[400px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    className: "text-xs text-slate-300 p-4 leading-relaxed",
                    children: json
                }, void 0, false, {
                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/JsonOutput.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/JsonOutput.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/components/results/JsonOutput.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$results$2f$ResultSummary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/results/ResultSummary.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$results$2f$JsonOutput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/results/JsonOutput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/Documents/personal/projects/euai_act_helper/node_modules/lucide-react/dist/esm/icons/pencil.js [app-ssr] (ecmascript) <export default as Pencil>");
"use client";
;
;
;
;
;
;
;
function ResultsPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [assessment, setAssessment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = sessionStorage.getItem("euai_assessment");
        if (!stored) {
            router.replace("/assess");
            return;
        }
        try {
            setAssessment(JSON.parse(stored));
        } catch  {
            router.replace("/assess");
        }
    }, [
        router
    ]);
    if (!assessment) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-400",
                children: "Loading…"
            }, void 0, false, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white border-b border-slate-200 px-4 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded",
                                    children: "EU AI Act"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-slate-500",
                                    children: "Assessment Results"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: ()=>router.push("/assess"),
                                    className: "gap-1.5 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this),
                                        "Edit answers"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: ()=>{
                                        sessionStorage.removeItem("euai_assessment");
                                        router.push("/assess");
                                    },
                                    className: "gap-1.5 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        "Start over"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-5xl mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-slate-900",
                                children: "Your EU AI Act Assessment"
                            }, void 0, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 mt-1",
                                children: [
                                    "Based on your answers for",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-slate-700",
                                        children: assessment.company.name
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-5 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-3 bg-white rounded-xl border border-slate-200 p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$results$2f$ResultSummary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    assessment: assessment
                                }, void 0, false, {
                                    fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$results$2f$JsonOutput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        assessment: assessment
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 pt-4 border-t border-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 mb-3",
                                                children: "Share this structured data with your compliance advisor or use it with the full risk assessment tool."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$personal$2f$projects$2f$euai_act_helper$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "w-full bg-blue-600 hover:bg-blue-700 text-white",
                                                size: "sm",
                                                children: "Generate Full Risk Assessment"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/personal/projects/euai_act_helper/src/app/results/page.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Documents_personal_projects_euai_act_helper_src_0wpztv~._.js.map
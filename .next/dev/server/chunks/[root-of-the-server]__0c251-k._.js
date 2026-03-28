module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/personal/projects/euai_act_helper/src/app/api/prefill/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
function extractMeta(html, ...names) {
    for (const name of names){
        const pattern = new RegExp(`<meta[^>]+(?:name|property)=["']${name}["'][^>]+content=["']([^"']{1,600})["']`, "i");
        const reverse = new RegExp(`<meta[^>]+content=["']([^"']{1,600})["'][^>]+(?:name|property)=["']${name}["']`, "i");
        const m = html.match(pattern) ?? html.match(reverse);
        if (m?.[1]) return m[1].trim();
    }
    return "";
}
function extractTitle(html) {
    return html.match(/<title[^>]*>([^<]{1,200})<\/title>/i)?.[1]?.trim() ?? "";
}
function stripHtml(html) {
    return html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim().slice(0, 6000);
}
async function POST(req) {
    let url;
    try {
        ({ url } = await req.json());
    } catch  {
        return Response.json({
            error: "Invalid request"
        }, {
            status: 400
        });
    }
    // Basic URL validation
    let parsed;
    try {
        parsed = new URL(url.startsWith("http") ? url : `https://${url}`);
    } catch  {
        return Response.json({
            error: "Invalid URL"
        }, {
            status: 400
        });
    }
    // Only allow http/https
    if (![
        "http:",
        "https:"
    ].includes(parsed.protocol)) {
        return Response.json({
            error: "Invalid URL"
        }, {
            status: 400
        });
    }
    try {
        const controller = new AbortController();
        const timeout = setTimeout(()=>controller.abort(), 6000);
        const response = await fetch(parsed.href, {
            signal: controller.signal,
            headers: {
                "User-Agent": "Mozilla/5.0 (compatible; EUAIActHelper/1.0; +compliance-check)",
                Accept: "text/html"
            }
        });
        clearTimeout(timeout);
        if (!response.ok) {
            return Response.json({
                error: `Site returned ${response.status}`
            }, {
                status: 422
            });
        }
        const contentType = response.headers.get("content-type") ?? "";
        if (!contentType.includes("text/html")) {
            return Response.json({
                error: "URL did not return an HTML page"
            }, {
                status: 422
            });
        }
        const html = await response.text();
        const title = extractTitle(html);
        const siteName = extractMeta(html, "og:site_name");
        const ogTitle = extractMeta(html, "og:title");
        const description = extractMeta(html, "og:description", "description", "twitter:description");
        const bodyText = stripHtml(html);
        return Response.json({
            title,
            siteName,
            ogTitle,
            description,
            bodyText,
            url: parsed.href
        });
    } catch (err) {
        const msg = err instanceof Error && err.name === "AbortError" ? "Request timed out — the site took too long to respond" : "Could not fetch the URL";
        return Response.json({
            error: msg
        }, {
            status: 422
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0c251-k._.js.map
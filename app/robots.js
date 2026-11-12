import { SITE } from "@/lib/site";

// Search engines and AI assistants are all welcome to read the site.
const AI_BOTS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot", "Applebot-Extended", "Bingbot", "CCBot", "DuckAssistBot", "meta-externalagent", "Amazonbot"];

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...AI_BOTS.map((b) => ({ userAgent: b, allow: "/" }))],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}

import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

const ROUTES = ["/", "/about", "/services", "/industries", "/portfolio", "/technologies", "/pricing", "/contact"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const alt = (p: string) =>
          [
            `    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}${p}"/>`,
            `    <xhtml:link rel="alternate" hreflang="sw" href="${BASE_URL}${p}?lang=sw"/>`,
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${p}"/>`,
          ].join("\n");

        const urls = ROUTES.flatMap((p) => [
          `  <url>\n    <loc>${BASE_URL}${p}</loc>\n${alt(p)}\n    <changefreq>weekly</changefreq>\n  </url>`,
          `  <url>\n    <loc>${BASE_URL}${p}?lang=sw</loc>\n${alt(p)}\n    <changefreq>weekly</changefreq>\n  </url>`,
        ]).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});

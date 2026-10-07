export type LocaleCopy = { title: string; description: string };

export type LocalizedHeadInput = {
  /** Route path, e.g. "/" or "/about" */
  path: string;
  /** Route search params (may contain ?lang=sw) */
  search?: unknown;
  en: LocaleCopy;
  sw: LocaleCopy;
};

export function resolveLang(search: unknown): "en" | "sw" {
  const raw = (search as { lang?: unknown } | undefined)?.lang;
  return typeof raw === "string" && raw.toLowerCase().startsWith("sw") ? "sw" : "en";
}

/**
 * Builds language-specific head metadata plus hreflang alternates.
 * English is served at the bare path (and is x-default); Kiswahili at ?lang=sw.
 */
export function localizedHead({ path, search, en, sw }: LocalizedHeadInput) {
  const lang = resolveLang(search);
  const copy = lang === "sw" ? sw : en;

  const enUrl = path;
  const swUrl = `${path}${path.includes("?") ? "&" : "?"}lang=sw`;
  const selfUrl = lang === "sw" ? swUrl : enUrl;

  return {
    meta: [
      { title: copy.title },
      { name: "description", content: copy.description },
      { name: "language", content: lang === "sw" ? "sw-TZ" : "en" },
      { property: "og:title", content: copy.title },
      { property: "og:description", content: copy.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: selfUrl },
      { property: "og:locale", content: lang === "sw" ? "sw_TZ" : "en_US" },
      { property: "og:locale:alternate", content: lang === "sw" ? "en_US" : "sw_TZ" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: copy.title },
      { name: "twitter:description", content: copy.description },
    ],
    links: [
      { rel: "canonical", href: selfUrl },
      { rel: "alternate", hreflang: "en", href: enUrl },
      { rel: "alternate", hreflang: "sw", href: swUrl },
      { rel: "alternate", hreflang: "x-default", href: enUrl },
    ],
  };
}

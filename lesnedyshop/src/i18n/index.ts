import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./en";
import { sw } from "./sw";

const stored = (() => {
  if (typeof window === "undefined") return "en";
  try {
    const param = new URLSearchParams(window.location.search).get("lang");
    if (param) return param.toLowerCase().startsWith("sw") ? "sw" : "en";
    return localStorage.getItem("lang") || "en";
  } catch { return "en"; }
})();


if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: { en: { translation: en }, sw: { translation: sw } },
    lng: stored,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

if (typeof window !== "undefined") {
  document.documentElement.lang = i18n.language;
  i18n.on("languageChanged", (l) => {
    document.documentElement.lang = l;
    try { localStorage.setItem("lang", l); } catch {}
  });
}

export default i18n;

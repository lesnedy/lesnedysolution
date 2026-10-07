import { useTranslation } from "@/i18n/use-translation";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const next = i18n.language?.startsWith("sw") ? "en" : "sw";

  const switchTo = () => {
    i18n.changeLanguage(next);
    // Keep the URL crawlable: English lives at the bare path, Kiswahili at ?lang=sw
    navigate({
      to: ".",
      search: (prev: Record<string, unknown>) => ({
        ...prev,
        lang: next === "sw" ? "sw" : undefined,
      }),
      replace: true,
      resetScroll: false,
    });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={switchTo}
      aria-label="Toggle language"
      lang={next}
      className="gap-1.5 px-2.5"
    >
      <Languages className="h-4 w-4" />
      <span className="text-xs font-semibold uppercase">{next === "sw" ? "EN" : "SW"}</span>
    </Button>
  );
}

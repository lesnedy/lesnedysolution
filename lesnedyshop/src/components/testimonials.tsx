import { Quote } from "lucide-react";
import { useTranslation } from "@/i18n/use-translation";
import { Section, SectionHeader } from "@/components/section";
import { Card } from "@/components/ui/card";

const KEYS = ["t1", "t2", "t3", "t4"] as const;

/** Client testimonial cards — reused on the home page. */
export function Testimonials() {
  const { t } = useTranslation();
  return (
    <Section>
      <SectionHeader
        eyebrow={t("testimonials.eyebrow")}
        title={
          <>
            {t("testimonials.titleA")}{" "}
            <span className="text-gradient-brand">{t("testimonials.titleB")}</span>
          </>
        }
        description={t("testimonials.subtitle")}
      />
      <div className="grid gap-6 md:grid-cols-2">
        {KEYS.map((k) => (
          <Card key={k} className="bento-card bento-card-hover p-8">
            <Quote className="h-7 w-7 text-primary" aria-hidden />
            <blockquote className="mt-5 text-base leading-relaxed text-foreground/80">
              “{t(`testimonials.items.${k}.q`)}”
            </blockquote>
            <div className="mt-6 hairline pt-4">
              <div className="font-semibold">{t(`testimonials.items.${k}.n`)}</div>
              <div className="text-sm text-muted-foreground">{t(`testimonials.items.${k}.r`)}</div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

import { localizedHead } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Section, SectionHeader } from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const KEYS = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

export const Route = createFileRoute("/faq")({
  head: ({ match }) =>
    localizedHead({
      path: "/faq",
      search: match.search,
      en: {
        title: "FAQ — LESNEDY Solution Company",
        description:
          "Answers about project timelines, AI readiness, data ownership, support and training at LESNEDY Solution Company.",
      },
      sw: {
        title: "Maswali — LESNEDY Solution Company",
        description:
          "Majibu kuhusu muda wa miradi, utayari wa AI, umiliki wa data, msaada na mafunzo katika LESNEDY Solution Company.",
      },
    }),
  component: FaqPage,
});

function FaqPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-hero">
        <Section className="py-20 text-center">
          <h1 className="font-display text-4xl font-bold sm:text-6xl">
            {t("faq.titleA")} <span className="text-gradient-brand">{t("faq.titleB")}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{t("faq.subtitle")}</p>
        </Section>
      </div>

      <Section>
        <SectionHeader eyebrow={t("faq.eyebrow")} title={t("faq.titleB")} />
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {KEYS.map((k) => (
            <AccordionItem key={k} value={k}>
              <AccordionTrigger className="text-left text-base">
                {t(`faq.items.${k}.q`)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {t(`faq.items.${k}.a`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-brand px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            {t("home.cta.talk")}
          </Link>
        </div>
      </Section>
    </>
  );
}

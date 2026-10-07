import { localizedHead } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Check, Sparkles } from "lucide-react";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: ({ match }) =>
    localizedHead({
      path: "/pricing",
      search: match.search,
      en: { title: "Pricing — LESNEDY Solution Company", description: "Flexible pricing packages for startups, growing teams and enterprises." },
      sw: { title: "Bei — LESNEDY Solution Company", description: "Vifurushi vya bei vinavyonyumbulika kwa startups, timu zinazokua na mashirika makubwa." },
    }),
  component: PricingPage,
});

const TIERS = [
  { key: "starter", price: "$500", featured: false },
  { key: "pro", price: "$2000", featured: true },
  { key: "ent", price: "Custom", featured: false },
] as const;

function PricingPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-hero">
        <Section className="py-20 text-center">
          <h1 className="font-display text-4xl font-bold sm:text-6xl">
            {t("pricing.titleA")} <span className="text-gradient-brand">{t("pricing.titleB")}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{t("pricing.subtitle")}</p>
        </Section>
      </div>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {TIERS.map((tier) => (
            <Card
              key={tier.key}
              className={cn(
                "relative flex flex-col p-8 transition",
                tier.featured && "border-primary shadow-elegant lg:-translate-y-2",
              )}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-medium text-primary-foreground shadow-glow">
                  <Sparkles className="mr-1 inline h-3 w-3" /> {t("pricing.popular")}
                </span>
              )}
              <h3 className="font-display text-xl font-semibold">{t(`pricing.tiers.${tier.key}.name`)}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t(`pricing.tiers.${tier.key}.tag`)}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-gradient-brand">{tier.price}</span>
                {tier.price !== "Custom" && <span className="text-sm text-muted-foreground">{t("pricing.perProject")}</span>}
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {["f1", "f2", "f3", "f4"].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {t(`pricing.tiers.${tier.key}.${f}`)}
                  </li>
                ))}
              </ul>
              <Button asChild className={cn("mt-8", tier.featured ? "bg-brand text-primary-foreground" : "")} variant={tier.featured ? "default" : "outline"}>
                <Link to="/contact">{t("pricing.getStarted")}</Link>
              </Button>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

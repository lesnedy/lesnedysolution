import { localizedHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ExternalLink, Sprout, Zap, HeartPulse, GraduationCap, Brain, BarChart3, HandHeart } from "lucide-react";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/portfolio")({
  head: ({ match }) =>
    localizedHead({
      path: "/portfolio",
      search: match.search,
      en: { title: "Portfolio — LESNEDY Solution Company", description: "Explore selected projects delivered by LESNEDY across AI, agriculture, health and enterprise." },
      sw: { title: "Miradi — LESNEDY Solution Company", description: "Tazama miradi teule iliyotekelezwa na LESNEDY katika AI, kilimo, afya na biashara." },
    }),
  component: PortfolioPage,
});

const PROJECTS = [
  { icon: Sprout, key: "farm", stack: ["React", "FastAPI", "PostgreSQL"] },
  { icon: Zap, key: "elec", stack: ["Python", "TensorFlow", "Supabase"] },
  { icon: HeartPulse, key: "hosp", stack: ["React", "Node.js", "PostgreSQL"] },
  { icon: GraduationCap, key: "sis", stack: ["React", "FastAPI", "Supabase"] },
  { icon: Brain, key: "crop", stack: ["PyTorch", "GCP", "Airflow"] },
  { icon: BarChart3, key: "exec", stack: ["Power BI", "SQL", "Azure"] },
  { icon: HandHeart, key: "ngo", stack: ["React", "Django", "PostgreSQL"] },
] as const;

function PortfolioPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-hero">
        <Section className="py-20 text-center">
          <h1 className="font-display text-4xl font-bold sm:text-6xl">
            {t("portfolio.titleA")} <span className="text-gradient-brand">{t("portfolio.titleB")}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{t("portfolio.subtitle")}</p>
        </Section>
      </div>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <Card key={p.key} className="group flex flex-col overflow-hidden p-0 transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="relative flex h-44 items-center justify-center bg-brand">
                <div aria-hidden className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white, transparent 55%)" }} />
                <p.icon className="relative h-16 w-16 text-primary-foreground" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold">{t(`portfolio.items.${p.key}.t`)}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{t(`portfolio.items.${p.key}.d`)}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => <Badge key={s} variant="secondary">{s}</Badge>)}
                </div>
                <Button variant="outline" size="sm" className="mt-5 w-full">
                  {t("portfolio.demo")} <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

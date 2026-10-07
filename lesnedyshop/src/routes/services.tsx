import { localizedHead } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "@/i18n/use-translation";
import {
  Brain, Bot, Database, LineChart, BarChart3, LayoutDashboard, Globe2, Smartphone,
  Code2, Server, Plug, Cloud, Briefcase, Sprout, Wheat, CloudSun, Tractor,
  FlaskConical, GraduationCap,
} from "lucide-react";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: ({ match }) =>
    localizedHead({
      path: "/services",
      search: match.search,
      en: { title: "Services — LESNEDY Solution Company", description: "AI, machine learning, data science, cloud, software and AgriTech services." },
      sw: { title: "Huduma — LESNEDY Solution Company", description: "Huduma za AI, ujifunzaji wa mashine, sayansi ya data, cloud, programu na AgriTech." },
    }),
  component: ServicesPage,
});

const SERVICES = [
  { icon: Brain, key: "ai" }, { icon: Bot, key: "ml" }, { icon: Database, key: "ds" },
  { icon: LineChart, key: "da" }, { icon: BarChart3, key: "bi" }, { icon: LayoutDashboard, key: "dash" },
  { icon: Globe2, key: "web" }, { icon: Smartphone, key: "mobile" }, { icon: Code2, key: "custom" },
  { icon: Server, key: "db" }, { icon: Plug, key: "api" }, { icon: Cloud, key: "cloud" },
  { icon: Briefcase, key: "ict" }, { icon: Sprout, key: "agri" }, { icon: Wheat, key: "crop" },
  { icon: CloudSun, key: "weather" }, { icon: Tractor, key: "farm" },
  { icon: FlaskConical, key: "research" }, { icon: GraduationCap, key: "training" },
] as const;

function ServicesPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-hero">
        <Section className="py-20 text-center">
          <h1 className="font-display text-4xl font-bold sm:text-6xl">
            {t("services.titleA")} <span className="text-gradient-brand">{t("services.titleB")}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{t("services.subtitle")}</p>
        </Section>
      </div>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Card key={s.key} className="group relative overflow-hidden p-6 transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-primary-foreground shadow-glow">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{t(`services.items.${s.key}.t`)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t(`services.items.${s.key}.d`)}</p>
            </Card>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button asChild size="lg" className="bg-brand text-primary-foreground">
            <Link to="/contact">{t("services.cta")}</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}

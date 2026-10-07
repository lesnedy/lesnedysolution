import { localizedHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Sprout, HeartPulse, GraduationCap, Landmark, Banknote, HandHeart, Factory, ShoppingBag } from "lucide-react";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/industries")({
  head: ({ match }) =>
    localizedHead({
      path: "/industries",
      search: match.search,
      en: { title: "Industries — LESNEDY Solution Company", description: "We serve agriculture, healthcare, education, government, banking, NGOs, manufacturing and retail." },
      sw: { title: "Sekta — LESNEDY Solution Company", description: "Tunahudumia kilimo, afya, elimu, serikali, benki, NGO, uzalishaji na biashara ya rejareja." },
    }),
  component: IndustriesPage,
});

const INDUSTRIES = [
  { icon: Sprout, key: "agri" }, { icon: HeartPulse, key: "health" },
  { icon: GraduationCap, key: "edu" }, { icon: Landmark, key: "gov" },
  { icon: Banknote, key: "bank" }, { icon: HandHeart, key: "ngo" },
  { icon: Factory, key: "mfg" }, { icon: ShoppingBag, key: "retail" },
] as const;

function IndustriesPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-hero">
        <Section className="py-20 text-center">
          <h1 className="font-display text-4xl font-bold sm:text-6xl">
            {t("industries.titleA")} <span className="text-gradient-brand">{t("industries.titleB")}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{t("industries.subtitle")}</p>
        </Section>
      </div>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((i) => (
            <Card key={i.key} className="p-6 text-center transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand text-primary-foreground shadow-glow">
                <i.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{t(`industries.items.${i.key}.t`)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t(`industries.items.${i.key}.d`)}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

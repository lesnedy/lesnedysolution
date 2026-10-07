import { localizedHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "@/i18n/use-translation";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/technologies")({
  head: ({ match }) =>
    localizedHead({
      path: "/technologies",
      search: match.search,
      en: { title: "Technologies — LESNEDY Solution Company", description: "The modern stack we use to ship AI, data and software solutions." },
      sw: { title: "Teknolojia — LESNEDY Solution Company", description: "Teknolojia za kisasa tunazotumia kutoa suluhisho za AI, data na programu." },
    }),
  component: TechPage,
});

const TECH = [
  "Python", "React", "FastAPI", "TensorFlow", "PyTorch", "PostgreSQL",
  "Supabase", "Docker", "GitHub", "Power BI", "R", "SQL", "Firebase", "Node.js",
];

function TechPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-hero">
        <Section className="py-20 text-center">
          <h1 className="font-display text-4xl font-bold sm:text-6xl">
            {t("technologies.titleA")} <span className="text-gradient-brand">{t("technologies.titleB")}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{t("technologies.subtitle")}</p>
        </Section>
      </div>

      <Section>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {TECH.map((x) => (
            <Card key={x} className="flex aspect-square flex-col items-center justify-center gap-2 p-4 text-center transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand font-display text-lg font-bold text-primary-foreground shadow-glow">
                {x[0]}
              </div>
              <span className="text-sm font-medium">{x}</span>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

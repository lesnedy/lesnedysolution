import { localizedHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "@/i18n/use-translation";
import { Briefcase, GraduationCap, MapPin, Sprout } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { Card } from "@/components/ui/card";

const ROLES = [
  { key: "r1", type: "typeFull", icon: Briefcase },
  { key: "r2", type: "typeFull", icon: Briefcase },
  { key: "r3", type: "typeFull", icon: Briefcase },
  { key: "r4", type: "typeFull", icon: Briefcase },
  { key: "r5", type: "typeIntern", icon: Sprout },
  { key: "r6", type: "typeGrad", icon: GraduationCap },
] as const;

export const Route = createFileRoute("/careers")({
  head: ({ match }) =>
    localizedHead({
      path: "/careers",
      search: match.search,
      en: {
        title: "Careers — Jobs, Internships & Graduate Programme | LESNEDY",
        description:
          "Open roles, internships and the graduate programme at LESNEDY Solution Company in Mbeya, Tanzania. Work on AI, data and software used by real organizations.",
      },
      sw: {
        title: "Kazi — Nafasi, Mafunzo na Programu ya Wahitimu | LESNEDY",
        description:
          "Nafasi za kazi, mafunzo kwa vitendo na programu ya wahitimu katika LESNEDY Solution Company, Mbeya, Tanzania.",
      },
    }),
  component: CareersPage,
});

function CareersPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-hero">
        <Section className="py-20 text-center">
          <h1 className="font-display text-4xl font-bold sm:text-6xl">
            {t("careers.titleA")} <span className="text-gradient-brand">{t("careers.titleB")}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{t("careers.subtitle")}</p>
        </Section>
      </div>

      <Section>
        <SectionHeader eyebrow={t("careers.openings")} title={t("careers.openings")} />
        <div className="grid gap-6 md:grid-cols-2">
          {ROLES.map((r) => (
            <Card key={r.key} className="bento-card bento-card-hover p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                  <r.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-primary/30 px-3 py-1 text-xs font-medium text-primary">
                  {t(`careers.${r.type}`)}
                </span>
              </div>
              <h2 className="mt-5 font-display text-2xl">{t(`careers.roles.${r.key}.t`)}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`careers.roles.${r.key}.d`)}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-primary" /> {t("careers.remote")}
                </span>
                <a
                  href="mailto:lesnedycharles@gmail.com?subject=Application"
                  className="font-semibold text-primary hover:underline"
                >
                  {t("careers.apply")}
                </a>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground">
          {t("careers.applyVia")}{" "}
          <a href="mailto:lesnedycharles@gmail.com" className="font-semibold text-primary hover:underline">
            lesnedycharles@gmail.com
          </a>
        </p>
      </Section>
    </>
  );
}

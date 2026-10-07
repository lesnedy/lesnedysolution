import { localizedHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Target, Eye, Heart, Award, Users, Globe, Linkedin, Mail } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { Card } from "@/components/ui/card";
import ceoAsset from "@/assets/charles-kenedy.png.asset.json";


export const Route = createFileRoute("/about")({
  head: ({ match }) =>
    localizedHead({
      path: "/about",
      search: match.search,
      en: { title: "About — LESNEDY Solution Company", description: "Our story, mission, vision, values and what makes LESNEDY a trusted technology partner." },
      sw: { title: "Kutuhusu — LESNEDY Solution Company", description: "Historia yetu, dhamira, maono, maadili na kwa nini LESNEDY ni mshirika wa teknolojia unaoaminika." },
    }),
  component: AboutPage,
});

const VALUES = [
  { icon: Target, key: "mission" },
  { icon: Eye, key: "vision" },
  { icon: Heart, key: "core" },
] as const;

const WHY = [
  { icon: Award, key: "expertise" },
  { icon: Users, key: "client" },
  { icon: Globe, key: "global" },
] as const;

function AboutPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-hero">
        <Section className="py-24 text-center">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-accent/60 px-3 py-1 text-xs font-medium">{t("about.eyebrow")}</span>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold sm:text-6xl">
            {t("about.titleA")} <span className="text-gradient-brand">{t("about.titleB")}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{t("about.subtitle")}</p>
        </Section>
      </div>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {VALUES.map((v) => (
            <Card key={v.key} className="p-8">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-primary-foreground shadow-glow">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{t(`about.values.${v.key}.t`)}</h3>
              <p className="mt-3 text-muted-foreground">{t(`about.values.${v.key}.d`)}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow={t("about.leadership.eyebrow")} title={<>{t("about.leadership.titleA")} <span className="text-gradient-brand">{t("about.leadership.titleB")}</span></>} />
        <Card className="overflow-hidden">
          <div className="grid gap-0 md:grid-cols-5">
            <div className="relative md:col-span-2">
              <img
                src={ceoAsset.url}
                alt="Charles Kenedy, Founder & CEO of LESNEDY Solution Company"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8 md:col-span-3 md:p-10">
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-accent/60 px-3 py-1 text-xs font-medium">
                {t("about.leadership.role")}
              </span>
              <h3 className="mt-4 font-display text-3xl font-bold">Charles Kenedy</h3>
              <p className="mt-1 text-sm font-medium text-primary">{t("about.leadership.title")}</p>
              <p className="mt-5 text-muted-foreground">{t("about.leadership.bio")}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:lesnedycharles@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent"
                >
                  <Mail className="h-4 w-4" /> lesnedycharles@gmail.com
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Card>
      </Section>


      <Section>
        <SectionHeader eyebrow={t("about.why.eyebrow")} title={<>{t("about.why.titleA")} <span className="text-gradient-brand">{t("about.why.titleB")}</span></>} />
        <div className="grid gap-6 md:grid-cols-3">
          {WHY.map((w) => (
            <div key={w.key} className="glass rounded-2xl p-6">
              <w.icon className="h-6 w-6 text-primary" />
              <h4 className="mt-3 font-display text-lg font-semibold">{t(`about.why.${w.key}.t`)}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{t(`about.why.${w.key}.d`)}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

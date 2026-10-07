import { localizedHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "@/i18n/use-translation";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";

/** Editorial index of technology articles. Static content for now — CMS-ready shape. */
const POSTS = [
  { key: "p1", category: "ai", read: 7 },
  { key: "p2", category: "ds", read: 9 },
  { key: "p3", category: "agri", read: 8 },
  { key: "p4", category: "agri", read: 6 },
  { key: "p5", category: "sec", read: 5 },
  { key: "p6", category: "ml", read: 10 },
] as const;

export const Route = createFileRoute("/blog")({
  head: ({ match }) =>
    localizedHead({
      path: "/blog",
      search: match.search,
      en: {
        title: "Blog — AI, Data Science & AgriTech Insights | LESNEDY",
        description:
          "Practical articles on artificial intelligence, data science, machine learning, agriculture technology and cybersecurity from the LESNEDY engineering team.",
      },
      sw: {
        title: "Blogu — Maarifa ya AI, Sayansi ya Data na AgriTech | LESNEDY",
        description:
          "Makala za kivitendo kuhusu akili bandia, sayansi ya data, ujifunzaji wa mashine, teknolojia ya kilimo na usalama mtandao kutoka timu ya LESNEDY.",
      },
    }),
  component: BlogPage,
});

function BlogPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-hero">
        <Section className="py-20 text-center">
          <h1 className="font-display text-4xl font-bold sm:text-6xl">
            {t("blog.titleA")} <span className="text-gradient-brand">{t("blog.titleB")}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{t("blog.subtitle")}</p>
        </Section>
      </div>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <Card key={p.key} className="bento-card bento-card-hover flex flex-col p-7">
              <span className="eyebrow">{t(`blog.categories.${p.category}`)}</span>
              <h2 className="mt-4 font-display text-2xl leading-snug">{t(`blog.items.${p.key}.t`)}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t(`blog.items.${p.key}.d`)}
              </p>
              <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5 text-primary" /> {t(`blog.items.${p.key}.date`)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-primary" /> {p.read} {t("blog.minRead")}
                </span>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                {t("blog.readMore")} <ArrowRight className="h-4 w-4" />
              </span>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

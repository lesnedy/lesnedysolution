import { localizedHead } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/i18n/use-translation";
import {
  ArrowRight, Brain, LineChart, Cloud, Cpu, Database, Shield,
  Users, Trophy, Rocket, Mail, Phone, MapPin,
} from "lucide-react";
import ceoAsset from "@/assets/charles-kenedy.png.asset.json";

export const Route = createFileRoute("/")({
  head: ({ match }) =>
    localizedHead({
      path: "/",
      search: match.search,
      en: {
        title: "LESNEDY Solution Company | AI, Data & Cloud in East Africa",
        description:
          "LESNEDY Solution Company builds practical AI, data science, cloud, software and AgriTech solutions for businesses, government, NGOs and agriculture across East Africa.",
      },
      sw: {
        title: "LESNEDY Solution Company | AI, Data na Cloud Afrika Mashariki",
        description:
          "LESNEDY Solution Company hujenga suluhisho za AI, sayansi ya data, cloud, programu na AgriTech kwa biashara, serikali, mashirika yasiyo ya kiserikali na kilimo Afrika Mashariki.",
      },
    }),
  component: HomePage,
});

const STATS = [
  { icon: Rocket, value: 50, suffix: "+", key: "projects" },
  { icon: Users, value: 85, suffix: "+", key: "clients" },
  { icon: Brain, value: 20, suffix: "+", key: "ai" },
  { icon: Trophy, value: 3, suffix: "+", key: "years" },
] as const;

function useCounter(target: number, duration = 1600) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const step = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          setN(Math.floor(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [target, duration]);
  return { n, ref };
}

function StatTile({
  icon: Icon, value, suffix, label,
}: { icon: typeof Rocket; value: number; suffix: string; label: string }) {
  const { n, ref } = useCounter(value);
  return (
    <div ref={ref} className="bento-card bento-card-hover p-6 md:p-7">
      <Icon className="h-5 w-5 text-primary" />
      <div className="mt-3 font-display text-4xl md:text-5xl leading-none">
        {n}{suffix}
      </div>
      <div className="mt-2 text-[11px] eyebrow opacity-80">{label}</div>
    </div>
  );
}

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">

        {/* ============== HERO TILE (col-span-8 row-span-2) ============== */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-card p-8 md:col-span-8 md:row-span-2 md:p-12 lg:p-16">
          <div aria-hidden className="absolute inset-0 grid-pattern opacity-40" />
          <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative z-10 flex h-full flex-col justify-between gap-16">
            <div>
              <span className="eyebrow">{t("home.badge")}</span>
              <h1 className="mt-6 font-display text-5xl leading-[0.98] md:text-7xl lg:text-[5.5rem]">
                {t("home.titleA")} <i className="text-primary">{t("home.titleB")}</i>
              </h1>
            </div>
            <div className="max-w-lg">
              <p className="text-lg leading-relaxed text-foreground/80">
                {t("home.subtitle")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]"
                >
                  {t("home.getStarted")} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-medium text-foreground transition hover:border-primary/50 hover:bg-primary/5"
                >
                  {t("home.consult")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ============== CEO / CONTACT TILE (col-span-4) ============== */}
        <div className="flex flex-col justify-between rounded-3xl border border-primary/10 bg-card p-8 md:col-span-4">
          <div>
            <div className="flex items-center gap-4">
              <img
                src={ceoAsset.url}
                alt="Charles Kenedy, Founder & CEO of LESNEDY Solution Company"
                className="h-16 w-16 shrink-0 rounded-full border border-primary/20 object-cover"
                loading="lazy"
              />
              <div className="min-w-0">
                <h3 className="font-display text-2xl">Charles Kenedy</h3>
                <span className="mt-1 inline-block rounded-full border border-primary/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                  {t("about.leadership.role")}
                </span>
              </div>
            </div>
            <div className="mt-6 space-y-2.5 text-sm text-foreground/70">
              <a href="tel:+255755019307" className="flex items-center gap-2 hover:text-foreground">
                <Phone className="h-3.5 w-3.5 text-primary" /> 0755 019 307
              </a>
              <a href="mailto:lesnedycharles@gmail.com" className="flex items-center gap-2 hover:text-foreground">
                <Mail className="h-3.5 w-3.5 text-primary" /> lesnedycharles@gmail.com
              </a>
            </div>
          </div>
          <div className="mt-8 hairline pt-6">
            <p className="eyebrow mb-2">{t("contact.office")}</p>
            <p className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-primary" /> Mbeya, Tanzania
            </p>
          </div>
        </div>

        {/* ============== ACCENT STAT (col-span-4) ============== */}
        <div className="flex flex-col items-center justify-center rounded-3xl bg-primary p-8 text-center text-primary-foreground md:col-span-4">
          <span className="font-display text-6xl leading-none md:text-7xl">99.8%</span>
          <p className="mt-3 text-xs font-bold uppercase tracking-widest">Data Accuracy</p>
          <p className="mt-2 text-[11px] italic opacity-70">Ufanisi wa juu wa data</p>
        </div>

        {/* ============== STATS ROW ============== */}
        {STATS.slice(0, 2).map((s) => (
          <div key={s.key} className="md:col-span-3">
            <StatTile icon={s.icon} value={s.value} suffix={s.suffix} label={t(`home.stats.${s.key}`)} />
          </div>
        ))}
        {STATS.slice(2).map((s) => (
          <div key={s.key} className="md:col-span-3">
            <StatTile icon={s.icon} value={s.value} suffix={s.suffix} label={t(`home.stats.${s.key}`)} />
          </div>
        ))}

        {/* ============== SERVICE: AI ============== */}
        <ServiceTile
          icon={Brain}
          title={t("home.highlights.ai.t")}
          desc={t("home.highlights.ai.d")}
        />
        <ServiceTile
          icon={LineChart}
          title={t("home.highlights.data.t")}
          desc={t("home.highlights.data.d")}
        />
        <ServiceTile
          icon={Cloud}
          title={t("home.highlights.cloud.t")}
          desc={t("home.highlights.cloud.d")}
        />

        {/* ============== AGRITECH FEATURE TILE ============== */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-card p-8 md:col-span-4">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
            <Cpu className="h-5 w-5" />
          </div>
          <h3 className="relative z-10 mt-5 font-display text-3xl">{t("home.highlights.agri.t")}</h3>
          <p className="relative z-10 mt-3 text-sm text-foreground/60 leading-relaxed">
            {t("home.highlights.agri.d")}
          </p>
          <div aria-hidden className="pointer-events-none absolute -bottom-6 -right-4 select-none font-display text-[7rem] italic leading-none text-primary/5">
            Kilimo
          </div>
        </div>

        <ServiceTile
          icon={Database}
          title={t("home.highlights.sw.t")}
          desc={t("home.highlights.sw.d")}
        />
        <ServiceTile
          icon={Shield}
          title={t("home.highlights.ict.t")}
          desc={t("home.highlights.ict.d")}
        />

        {/* ============== WHY LESNEDY (ivory tile, span 8) ============== */}
        <div className="rounded-3xl bg-[color:var(--ivory)] p-8 text-[color:var(--emerald-bg)] md:col-span-8 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--emerald-surface)]">
                {t("home.why.badge")}
              </p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                {t("home.why.titleA")} <i>{t("home.why.titleB")}</i>
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed opacity-80">
                {t("home.why.desc")}
              </p>
            </div>
            <div className="grid w-full flex-none grid-cols-2 gap-3 md:w-auto md:grid-cols-1">
              {(["f1", "f2", "f3", "f4"] as const).map((k) => (
                <div key={k} className="rounded-2xl border border-[color:var(--emerald-bg)]/10 p-4">
                  <span className="block font-display text-lg leading-tight">
                    {t(`home.why.${k}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============== TRUST STAT VERTICAL (col-span-4) ============== */}
        <div className="flex flex-col justify-between rounded-3xl border border-primary/10 bg-card p-8 md:col-span-4">
          <div>
            <p className="eyebrow">{t("home.why.s1")}</p>
            <div className="mt-3 font-display text-6xl leading-none text-primary">99.9%</div>
          </div>
          <p className="mt-8 text-sm text-foreground/70 leading-relaxed">
            {t("home.why.trusted")}
          </p>
          <div className="mt-6 hairline pt-4">
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
              {t("home.why.cta")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* ============== FINAL CTA (full width) ============== */}
        <div className="mt-2 flex flex-col items-start justify-between gap-6 rounded-3xl bg-primary p-8 text-primary-foreground md:col-span-12 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="font-display text-3xl md:text-5xl">
              {t("home.cta.title")}
            </h2>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] opacity-80">
              {t("home.cta.desc")}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--emerald-bg)] px-8 py-4 text-sm font-semibold text-[color:var(--ivory)] transition hover:scale-[1.02]"
            >
              {t("home.cta.talk")} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--emerald-bg)]/30 px-8 py-4 text-sm font-semibold text-[color:var(--emerald-bg)] transition hover:bg-[color:var(--emerald-bg)]/10"
            >
              {t("home.cta.explore")}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

function ServiceTile({
  icon: Icon, title, desc,
}: { icon: typeof Brain; title: string; desc: string }) {
  return (
    <div className="group rounded-3xl border border-primary/10 bg-card p-8 transition-colors hover:border-primary/40 md:col-span-4">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-6 font-display text-3xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground/60">{desc}</p>
    </div>
  );
}

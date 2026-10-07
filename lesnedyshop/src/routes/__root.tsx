import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";

import i18n from "../i18n";
import appCss from "../styles.css?url";
import { resolveLang } from "@/lib/seo";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-dvh items-center justify-center bg-hero px-4">
      <div className="max-w-md text-center">
        <Link to="/" aria-label="LESNEDY Solution Company home" className="mb-6 inline-flex">
          <img
            src="/favicon.png"
            alt="LESNEDY Solution Company"
            className="h-14 w-14 object-contain"
          />
        </Link>
        <h1 className="text-7xl font-bold text-gradient-brand">404</h1>
        <h2 className="mt-4 text-xl font-semibold">{t("notFound.title")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("notFound.desc")}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-elegant transition hover:opacity-90"
          >
            {t("notFound.back")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  const { t } = useTranslation();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <Link to="/" aria-label="LESNEDY Solution Company home" className="mb-6 inline-flex">
          <img
            src="/favicon.png"
            alt="LESNEDY Solution Company"
            className="h-14 w-14 object-contain"
          />
        </Link>
        <h1 className="text-xl font-semibold">{t("error.title")}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("error.desc")}</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            {t("error.retry")}
          </button>
          <a href="/" className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent">{t("error.home")}</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  validateSearch: (search: Record<string, unknown>): { lang?: string } =>
    typeof search.lang === "string" ? { lang: search.lang } : {},

  head: ({ match }) => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "LESNEDY Solution Company | AI, Data & Cloud in East Africa",
      },
      {
        name: "description",
        content:
          "LESNEDY Solution Company builds practical AI, data science, cloud, software and AgriTech solutions for businesses, government, NGOs and agriculture across East Africa.",
      },
      { name: "author", content: "LESNEDY Solution Company" },
      { name: "theme-color", content: "#0B1F17" },
      { property: "og:site_name", content: "LESNEDY Solution Company" },
      {
        property: "og:title",
        content: "LESNEDY Solution Company | AI, Data & Cloud in East Africa",
      },
      {
        property: "og:description",
        content:
          "Practical AI, data science, cloud, software and AgriTech solutions for organizations across East Africa.",
      },
      { property: "og:image", content: "/favicon.png" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: resolveLang(match.search) === "sw" ? "sw_TZ" : "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/favicon.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        children: `try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});


function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const { lang } = Route.useSearch();
  useEffect(() => {
    const target = lang?.toLowerCase().startsWith("sw") ? "sw" : lang ? "en" : null;
    if (target && i18n.language !== target) i18n.changeLanguage(target);
  }, [lang]);

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <div className="flex min-h-dvh flex-col">
          <SiteHeader />
          <main className="flex-1">
            <Outlet />
          </main>
          <SiteFooter />
        </div>
        <Toaster />
      </QueryClientProvider>
    </I18nextProvider>
  );
}

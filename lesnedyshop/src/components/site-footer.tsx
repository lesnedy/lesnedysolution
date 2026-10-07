import { Link } from "@tanstack/react-router";
import { Github, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  const { t } = useTranslation();
  return (
    <footer className="mt-24 border-t bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/favicon.png"
                alt="LESNEDY Solution Company"
                className="h-10 w-10 object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">{t("footer.tagline")}</p>
            <div className="mt-5 flex gap-2">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href={Icon === Linkedin ? "https://www.linkedin.com/in/charles-kenedy-664674296?utm_source=share_via&utm_content=profile&utm_medium=member_android" : "#"}
                  target={Icon === Linkedin ? "_blank" : undefined}
                  rel={Icon === Linkedin ? "noopener noreferrer" : undefined}
                  aria-label={Icon === Linkedin ? "Charles Kenedy on LinkedIn" : "Social link"}
                  className="grid h-9 w-9 place-items-center rounded-lg border text-muted-foreground transition hover:text-foreground hover:border-primary">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href="https://www.instagram.com/lesnedysolution?stkn=MWQ4YWZ3MGVpa3lxYw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LESNEDY Solution Company on Instagram"
                className="grid h-9 w-9 place-items-center rounded-lg border text-muted-foreground transition hover:text-foreground hover:border-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">{t("footer.company")}</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">{t("nav.about")}</Link></li>
              <li><Link to="/services" className="hover:text-foreground">{t("nav.services")}</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground">{t("nav.portfolio")}</Link></li>
              <li><Link to="/pricing" className="hover:text-foreground">{t("nav.pricing")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">{t("footer.contact")}</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {t("footer.office")}</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> <a href="mailto:lesnedycharles@gmail.com" className="hover:text-foreground">lesnedycharles@gmail.com</a></li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> <a href="tel:+255755019307" className="hover:text-foreground">+255 755 019 307</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">{t("footer.newsletter")}</h4>
            <p className="mt-4 text-sm text-muted-foreground">{t("footer.newsletterText")}</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder={t("footer.emailPlaceholder")} aria-label="Email" required />
              <Button type="submit" className="bg-brand text-primary-foreground">{t("footer.join")}</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} LESNEDY Solution Company. {t("footer.rights")}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-foreground">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

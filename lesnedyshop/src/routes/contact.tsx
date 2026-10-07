import { localizedHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "@/i18n/use-translation";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  head: ({ match }) =>
    localizedHead({
      path: "/contact",
      search: match.search,
      en: { title: "Contact — LESNEDY Solution Company", description: "Reach LESNEDY Solution Company. Request a consultation, quotation or partnership." },
      sw: { title: "Wasiliana — LESNEDY Solution Company", description: "Wasiliana na LESNEDY Solution Company. Omba ushauri, bei au ushirikiano." },
    }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useTranslation();

  const schema = z.object({
    name: z.string().trim().min(2, t("contact.err.name")).max(100),
    email: z.string().trim().email(t("contact.err.email")).max(255),
    subject: z.string().trim().min(2, t("contact.err.subject")).max(150),
    message: z.string().trim().min(10, t("contact.err.message")).max(2000),
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(form));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? t("contact.err.generic"));
      return;
    }

    const { name, email, subject, message } = parsed.data;
    const body = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`;
    const whatsappUrl = `https://wa.me/255755019307?text=${encodeURIComponent(body)}`;
    const emailUrl = `mailto:lesnedycharles@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    window.location.href = emailUrl;
    toast.info(t("contact.openingDestinations"));
  };

  const cards = [
    { icon: MapPin, title: t("contact.office"), text: "Mbeya, Tanzania" },
    { icon: Mail, title: t("contact.emailLabel"), text: "lesnedycharles@gmail.com" },
    { icon: Phone, title: t("contact.phone"), text: "+255 755 019 307" },
  ];

  return (
    <>
      <div className="bg-hero">
        <Section className="py-20 text-center">
          <h1 className="font-display text-4xl font-bold sm:text-6xl">
            {t("contact.titleA")} <span className="text-gradient-brand">{t("contact.titleB")}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{t("contact.subtitle")}</p>
        </Section>
      </div>

      <Section>
        <div className="grid gap-8 lg:grid-cols-5 lg:items-start">
          <Card className="p-8 lg:col-span-3">
            <form className="grid gap-4" onSubmit={onSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">{t("contact.name")}</Label>
                  <Input id="name" name="name" required maxLength={100} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="email">{t("contact.email")}</Label>
                  <Input id="email" name="email" type="email" required maxLength={255} className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">{t("contact.subject")}</Label>
                <Input id="subject" name="subject" required maxLength={150} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="message">{t("contact.message")}</Label>
                <Textarea id="message" name="message" rows={6} required maxLength={2000} className="mt-1.5" />
              </div>
              <Button type="submit" size="lg" className="bg-brand text-primary-foreground">
                {t("contact.send")} <Send className="ml-1 h-4 w-4" />
              </Button>
            </form>
          </Card>

          <div className="space-y-4 lg:col-span-2">
            {cards.map((c) => (
              <Card key={c.title} className="flex items-start gap-4 p-6">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-primary-foreground shadow-glow">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-sm text-muted-foreground">{c.text}</div>
                </div>
              </Card>
            ))}
            <Card className="overflow-hidden p-0">
              <iframe
                title="Map showing Mbeya, Tanzania"
                src="https://www.google.com/maps?q=Mbeya%2C%20Tanzania&output=embed"
                className="h-48 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-4 text-sm text-muted-foreground">{t("contact.mapNote")}</div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}

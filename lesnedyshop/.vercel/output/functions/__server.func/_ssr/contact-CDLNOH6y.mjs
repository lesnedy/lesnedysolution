import { r as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { l as require_react, u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Section } from "./section-BzLpQTHl.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { C as Mail, S as MapPin, g as Send, y as Phone } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Input, r as Button } from "./router-CO4GLQdX.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CDLNOH6y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
function ContactPage() {
	const { t } = useTranslation();
	const schema = objectType({
		name: stringType().trim().min(2, t("contact.err.name")).max(100),
		email: stringType().trim().email(t("contact.err.email")).max(255),
		subject: stringType().trim().min(2, t("contact.err.subject")).max(150),
		message: stringType().trim().min(10, t("contact.err.message")).max(2e3)
	});
	const onSubmit = (e) => {
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
		{
			icon: MapPin,
			title: t("contact.office"),
			text: "Mbeya, Tanzania"
		},
		{
			icon: Mail,
			title: t("contact.emailLabel"),
			text: "lesnedycharles@gmail.com"
		},
		{
			icon: Phone,
			title: t("contact.phone"),
			text: "+255 755 019 307"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-hero",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "py-20 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display text-4xl font-bold sm:text-6xl",
				children: [
					t("contact.titleA"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: t("contact.titleB")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground",
				children: t("contact.subtitle")
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-5 lg:items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "p-8 lg:col-span-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4",
				onSubmit,
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "name",
							children: t("contact.name")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "name",
							name: "name",
							required: true,
							maxLength: 100,
							className: "mt-1.5"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "email",
							children: t("contact.email")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "email",
							name: "email",
							type: "email",
							required: true,
							maxLength: 255,
							className: "mt-1.5"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "subject",
						children: t("contact.subject")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "subject",
						name: "subject",
						required: true,
						maxLength: 150,
						className: "mt-1.5"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "message",
						children: t("contact.message")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "message",
						name: "message",
						rows: 6,
						required: true,
						maxLength: 2e3,
						className: "mt-1.5"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						size: "lg",
						className: "bg-brand text-primary-foreground",
						children: [
							t("contact.send"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "ml-1 h-4 w-4" })
						]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 lg:col-span-2",
			children: [cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "flex items-start gap-4 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-primary-foreground shadow-glow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold",
						children: c.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground",
						children: c.text
					})]
				})]
			}, c.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "overflow-hidden p-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Map showing Mbeya, Tanzania",
					src: "https://www.google.com/maps?q=Mbeya%2C%20Tanzania&output=embed",
					className: "h-48 w-full border-0",
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-4 text-sm text-muted-foreground",
					children: t("contact.mapNote")
				})]
			})]
		})]
	}) })] });
}
//#endregion
export { ContactPage as component };

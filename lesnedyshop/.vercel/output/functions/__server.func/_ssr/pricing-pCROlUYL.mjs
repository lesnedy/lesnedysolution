import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Section } from "./section-BzLpQTHl.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Sparkles, q as Check } from "../_libs/lucide-react.mjs";
import { r as Button } from "./router-CO4GLQdX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-pCROlUYL.js
var import_jsx_runtime = require_jsx_runtime();
var TIERS = [
	{
		key: "starter",
		price: "$500",
		featured: false
	},
	{
		key: "pro",
		price: "$2000",
		featured: true
	},
	{
		key: "ent",
		price: "Custom",
		featured: false
	}
];
function PricingPage() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-hero",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "py-20 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display text-4xl font-bold sm:text-6xl",
				children: [
					t("pricing.titleA"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: t("pricing.titleB")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground",
				children: t("pricing.subtitle")
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 lg:grid-cols-3 lg:items-stretch",
		children: TIERS.map((tier) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: cn("relative flex flex-col p-8 transition", tier.featured && "border-primary shadow-elegant lg:-translate-y-2"),
			children: [
				tier.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-medium text-primary-foreground shadow-glow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-1 inline h-3 w-3" }),
						" ",
						t("pricing.popular")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-semibold",
					children: t(`pricing.tiers.${tier.key}.name`)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: t(`pricing.tiers.${tier.key}.tag`)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-baseline gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-4xl font-bold text-gradient-brand",
						children: tier.price
					}), tier.price !== "Custom" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted-foreground",
						children: t("pricing.perProject")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 flex-1 space-y-3 text-sm",
					children: [
						"f1",
						"f2",
						"f3",
						"f4"
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
							" ",
							t(`pricing.tiers.${tier.key}.${f}`)
						]
					}, f))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: cn("mt-8", tier.featured ? "bg-brand text-primary-foreground" : ""),
					variant: tier.featured ? "default" : "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						children: t("pricing.getStarted")
					})
				})
			]
		}, tier.key))
	}) })] });
}
//#endregion
export { PricingPage as component };

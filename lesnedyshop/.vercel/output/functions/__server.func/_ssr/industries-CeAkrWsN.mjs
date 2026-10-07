import { u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Section } from "./section-BzLpQTHl.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { A as HeartPulse, D as Landmark, I as Factory, M as GraduationCap, et as Banknote, j as HandHeart, p as ShoppingBag, u as Sprout } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries-CeAkrWsN.js
var import_jsx_runtime = require_jsx_runtime();
var INDUSTRIES = [
	{
		icon: Sprout,
		key: "agri"
	},
	{
		icon: HeartPulse,
		key: "health"
	},
	{
		icon: GraduationCap,
		key: "edu"
	},
	{
		icon: Landmark,
		key: "gov"
	},
	{
		icon: Banknote,
		key: "bank"
	},
	{
		icon: HandHeart,
		key: "ngo"
	},
	{
		icon: Factory,
		key: "mfg"
	},
	{
		icon: ShoppingBag,
		key: "retail"
	}
];
function IndustriesPage() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-hero",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "py-20 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display text-4xl font-bold sm:text-6xl",
				children: [
					t("industries.titleA"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: t("industries.titleB")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground",
				children: t("industries.subtitle")
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
		children: INDUSTRIES.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-6 text-center transition hover:-translate-y-1 hover:shadow-elegant",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand text-primary-foreground shadow-glow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i.icon, { className: "h-7 w-7" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 font-display text-lg font-semibold",
					children: t(`industries.items.${i.key}.t`)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: t(`industries.items.${i.key}.d`)
				})
			]
		}, i.key))
	}) })] });
}
//#endregion
export { IndustriesPage as component };

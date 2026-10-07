import { u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Section } from "./section-BzLpQTHl.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as Bot, B as Database, F as FlaskConical, H as CodeXml, J as ChartLine, M as GraduationCap, Q as Brain, T as LayoutDashboard, U as Cloud, W as CloudSun, Y as ChartColumn, Z as Briefcase, f as Smartphone, h as Server, r as Wheat, s as Tractor, u as Sprout, v as Plug, z as Earth } from "../_libs/lucide-react.mjs";
import { r as Button } from "./router-CO4GLQdX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-EY_b52p9.js
var import_jsx_runtime = require_jsx_runtime();
var SERVICES = [
	{
		icon: Brain,
		key: "ai"
	},
	{
		icon: Bot,
		key: "ml"
	},
	{
		icon: Database,
		key: "ds"
	},
	{
		icon: ChartLine,
		key: "da"
	},
	{
		icon: ChartColumn,
		key: "bi"
	},
	{
		icon: LayoutDashboard,
		key: "dash"
	},
	{
		icon: Earth,
		key: "web"
	},
	{
		icon: Smartphone,
		key: "mobile"
	},
	{
		icon: CodeXml,
		key: "custom"
	},
	{
		icon: Server,
		key: "db"
	},
	{
		icon: Plug,
		key: "api"
	},
	{
		icon: Cloud,
		key: "cloud"
	},
	{
		icon: Briefcase,
		key: "ict"
	},
	{
		icon: Sprout,
		key: "agri"
	},
	{
		icon: Wheat,
		key: "crop"
	},
	{
		icon: CloudSun,
		key: "weather"
	},
	{
		icon: Tractor,
		key: "farm"
	},
	{
		icon: FlaskConical,
		key: "research"
	},
	{
		icon: GraduationCap,
		key: "training"
	}
];
function ServicesPage() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-hero",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "py-20 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display text-4xl font-bold sm:text-6xl",
				children: [
					t("services.titleA"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: t("services.titleB")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground",
				children: t("services.subtitle")
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
		children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "group relative overflow-hidden p-6 transition hover:-translate-y-1 hover:shadow-elegant",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-12 w-12 place-items-center rounded-xl bg-brand text-primary-foreground shadow-glow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-5 font-display text-lg font-semibold",
					children: t(`services.items.${s.key}.t`)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: t(`services.items.${s.key}.d`)
				})
			]
		}, s.key))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-14 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			size: "lg",
			className: "bg-brand text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				children: t("services.cta")
			})
		})
	})] })] });
}
//#endregion
export { ServicesPage as component };

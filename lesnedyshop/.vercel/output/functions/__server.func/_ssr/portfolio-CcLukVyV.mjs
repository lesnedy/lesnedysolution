import "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { l as require_react, u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Section } from "./section-BzLpQTHl.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { A as HeartPulse, M as GraduationCap, Q as Brain, R as ExternalLink, Y as ChartColumn, j as HandHeart, t as Zap, u as Sprout } from "../_libs/lucide-react.mjs";
import { r as Button } from "./router-CO4GLQdX.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var PROJECTS = [
	{
		icon: Sprout,
		key: "farm",
		stack: [
			"React",
			"FastAPI",
			"PostgreSQL"
		]
	},
	{
		icon: Zap,
		key: "elec",
		stack: [
			"Python",
			"TensorFlow",
			"Supabase"
		]
	},
	{
		icon: HeartPulse,
		key: "hosp",
		stack: [
			"React",
			"Node.js",
			"PostgreSQL"
		]
	},
	{
		icon: GraduationCap,
		key: "sis",
		stack: [
			"React",
			"FastAPI",
			"Supabase"
		]
	},
	{
		icon: Brain,
		key: "crop",
		stack: [
			"PyTorch",
			"GCP",
			"Airflow"
		]
	},
	{
		icon: ChartColumn,
		key: "exec",
		stack: [
			"Power BI",
			"SQL",
			"Azure"
		]
	},
	{
		icon: HandHeart,
		key: "ngo",
		stack: [
			"React",
			"Django",
			"PostgreSQL"
		]
	}
];
function PortfolioPage() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-hero",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "py-20 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display text-4xl font-bold sm:text-6xl",
				children: [
					t("portfolio.titleA"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: t("portfolio.titleB")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground",
				children: t("portfolio.subtitle")
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
		children: PROJECTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "group flex flex-col overflow-hidden p-0 transition hover:-translate-y-1 hover:shadow-elegant",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex h-44 items-center justify-center bg-brand",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute inset-0 opacity-20",
					style: { backgroundImage: "radial-gradient(circle at 30% 30%, white, transparent 55%)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "relative h-16 w-16 text-primary-foreground" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold",
						children: t(`portfolio.items.${p.key}.t`)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 flex-1 text-sm text-muted-foreground",
						children: t(`portfolio.items.${p.key}.d`)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-1.5",
						children: p.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							children: s
						}, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						className: "mt-5 w-full",
						children: [
							t("portfolio.demo"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "ml-1 h-3.5 w-3.5" })
						]
					})
				]
			})]
		}, p.key))
	}) })] });
}
//#endregion
export { PortfolioPage as component };

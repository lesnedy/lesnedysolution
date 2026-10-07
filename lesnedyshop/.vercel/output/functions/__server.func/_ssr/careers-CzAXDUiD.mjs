import { u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as SectionHeader, t as Section } from "./section-BzLpQTHl.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { M as GraduationCap, S as MapPin, Z as Briefcase, u as Sprout } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-CzAXDUiD.js
var import_jsx_runtime = require_jsx_runtime();
var ROLES = [
	{
		key: "r1",
		type: "typeFull",
		icon: Briefcase
	},
	{
		key: "r2",
		type: "typeFull",
		icon: Briefcase
	},
	{
		key: "r3",
		type: "typeFull",
		icon: Briefcase
	},
	{
		key: "r4",
		type: "typeFull",
		icon: Briefcase
	},
	{
		key: "r5",
		type: "typeIntern",
		icon: Sprout
	},
	{
		key: "r6",
		type: "typeGrad",
		icon: GraduationCap
	}
];
function CareersPage() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-hero",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "py-20 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display text-4xl font-bold sm:text-6xl",
				children: [
					t("careers.titleA"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: t("careers.titleB")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground",
				children: t("careers.subtitle")
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: t("careers.openings"),
			title: t("careers.openings")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2",
			children: ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "bento-card bento-card-hover p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-primary/30 px-3 py-1 text-xs font-medium text-primary",
							children: t(`careers.${r.type}`)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-2xl",
						children: t(`careers.roles.${r.key}.t`)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: t(`careers.roles.${r.key}.d`)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap items-center gap-4 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-primary" }),
								" ",
								t("careers.remote")
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:lesnedycharles@gmail.com?subject=Application",
							className: "font-semibold text-primary hover:underline",
							children: t("careers.apply")
						})]
					})
				]
			}, r.key))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-12 text-center text-sm text-muted-foreground",
			children: [
				t("careers.applyVia"),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "mailto:lesnedycharles@gmail.com",
					className: "font-semibold text-primary hover:underline",
					children: "lesnedycharles@gmail.com"
				})
			]
		})
	] })] });
}
//#endregion
export { CareersPage as component };

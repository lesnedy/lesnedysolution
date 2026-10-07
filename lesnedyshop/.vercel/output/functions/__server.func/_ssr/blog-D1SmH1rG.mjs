import { u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Section } from "./section-BzLpQTHl.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { G as Clock, X as CalendarDays, nt as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-D1SmH1rG.js
var import_jsx_runtime = require_jsx_runtime();
/** Editorial index of technology articles. Static content for now — CMS-ready shape. */
var POSTS = [
	{
		key: "p1",
		category: "ai",
		read: 7
	},
	{
		key: "p2",
		category: "ds",
		read: 9
	},
	{
		key: "p3",
		category: "agri",
		read: 8
	},
	{
		key: "p4",
		category: "agri",
		read: 6
	},
	{
		key: "p5",
		category: "sec",
		read: 5
	},
	{
		key: "p6",
		category: "ml",
		read: 10
	}
];
function BlogPage() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-hero",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "py-20 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display text-4xl font-bold sm:text-6xl",
				children: [
					t("blog.titleA"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: t("blog.titleB")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground",
				children: t("blog.subtitle")
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: POSTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "bento-card bento-card-hover flex flex-col p-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: t(`blog.categories.${p.category}`)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-2xl leading-snug",
					children: t(`blog.items.${p.key}.t`)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
					children: t(`blog.items.${p.key}.d`)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-center gap-4 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-3.5 w-3.5 text-primary" }),
							" ",
							t(`blog.items.${p.key}.date`)
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-primary" }),
							" ",
							p.read,
							" ",
							t("blog.minRead")
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary",
					children: [
						t("blog.readMore"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
					]
				})
			]
		}, p.key))
	}) })] });
}
//#endregion
export { BlogPage as component };

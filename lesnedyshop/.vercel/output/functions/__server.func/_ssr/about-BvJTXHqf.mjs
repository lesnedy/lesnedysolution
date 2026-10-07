import { u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as SectionHeader, t as Section } from "./section-BzLpQTHl.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { C as Mail, L as Eye, N as Globe, c as Target, i as Users, k as Heart, tt as Award, w as Linkedin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BvJTXHqf.js
var import_jsx_runtime = require_jsx_runtime();
var charles_kenedy_png_asset_default = {
	version: 1,
	asset_id: "dd2dad90-46c6-4cfd-b9cc-810e7f14d42d",
	project_id: "87a7591d-b1c7-4d2d-a1f2-8f0881652af8",
	url: "/__l5e/assets-v1/dd2dad90-46c6-4cfd-b9cc-810e7f14d42d/charles-kenedy.png",
	r2_key: "a/v1/87a7591d-b1c7-4d2d-a1f2-8f0881652af8/dd2dad90-46c6-4cfd-b9cc-810e7f14d42d/charles-kenedy.png",
	original_filename: "charles-kenedy.png",
	size: 2041658,
	content_type: "image/png",
	created_at: "2026-07-17T11:31:26Z"
};
var VALUES = [
	{
		icon: Target,
		key: "mission"
	},
	{
		icon: Eye,
		key: "vision"
	},
	{
		icon: Heart,
		key: "core"
	}
];
var WHY = [
	{
		icon: Award,
		key: "expertise"
	},
	{
		icon: Users,
		key: "client"
	},
	{
		icon: Globe,
		key: "global"
	}
];
function AboutPage() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-hero",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				className: "py-24 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex items-center rounded-full border border-primary/30 bg-accent/60 px-3 py-1 text-xs font-medium",
						children: t("about.eyebrow")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mx-auto mt-4 max-w-3xl font-display text-4xl font-bold sm:text-6xl",
						children: [
							t("about.titleA"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-brand",
								children: t("about.titleB")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground",
						children: t("about.subtitle")
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: VALUES.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 place-items-center rounded-xl bg-brand text-primary-foreground shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 font-display text-xl font-semibold",
						children: t(`about.values.${v.key}.t`)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: t(`about.values.${v.key}.d`)
					})
				]
			}, v.key))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: t("about.leadership.eyebrow"),
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				t("about.leadership.titleA"),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient-brand",
					children: t("about.leadership.titleB")
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-0 md:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative md:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: charles_kenedy_png_asset_default.url,
						alt: "Charles Kenedy, Founder & CEO of LESNEDY Solution Company",
						className: "h-full w-full object-cover",
						loading: "lazy"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 md:col-span-3 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center rounded-full border border-primary/30 bg-accent/60 px-3 py-1 text-xs font-medium",
							children: t("about.leadership.role")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-3xl font-bold",
							children: "Charles Kenedy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-medium text-primary",
							children: t("about.leadership.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-muted-foreground",
							children: t("about.leadership.bio")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:lesnedycharles@gmail.com",
								className: "inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " lesnedycharles@gmail.com"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#",
								className: "inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent",
								"aria-label": "LinkedIn",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" }), " LinkedIn"]
							})]
						})
					]
				})]
			})
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: t("about.why.eyebrow"),
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				t("about.why.titleA"),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient-brand",
					children: t("about.why.titleB")
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: WHY.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-2xl p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.icon, { className: "h-6 w-6 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mt-3 font-display text-lg font-semibold",
						children: t(`about.why.${w.key}.t`)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: t(`about.why.${w.key}.d`)
					})
				]
			}, w.key))
		})] })
	] });
}
//#endregion
export { AboutPage as component };

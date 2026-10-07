import { r as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { c as Slot, l as require_react, u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { _ as createFileRoute, b as useNavigate, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Mail, E as Languages, O as Instagram, P as Github, S as MapPin, a as Twitter, b as Moon, l as Sun, n as X, w as Linkedin, x as Menu, y as Phone } from "../_libs/lucide-react.mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CO4GLQdX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DJ_7KSmQ.css";
function resolveLang(search) {
	const raw = search?.lang;
	return typeof raw === "string" && raw.toLowerCase().startsWith("sw") ? "sw" : "en";
}
/**
* Builds language-specific head metadata plus hreflang alternates.
* English is served at the bare path (and is x-default); Kiswahili at ?lang=sw.
*/
function localizedHead({ path, search, en, sw }) {
	const lang = resolveLang(search);
	const copy = lang === "sw" ? sw : en;
	const enUrl = path;
	const swUrl = `${path}${path.includes("?") ? "&" : "?"}lang=sw`;
	const selfUrl = lang === "sw" ? swUrl : enUrl;
	return {
		meta: [
			{ title: copy.title },
			{
				name: "description",
				content: copy.description
			},
			{
				name: "language",
				content: lang === "sw" ? "sw-TZ" : "en"
			},
			{
				property: "og:title",
				content: copy.title
			},
			{
				property: "og:description",
				content: copy.description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: selfUrl
			},
			{
				property: "og:locale",
				content: lang === "sw" ? "sw_TZ" : "en_US"
			},
			{
				property: "og:locale:alternate",
				content: lang === "sw" ? "en_US" : "sw_TZ"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: copy.title
			},
			{
				name: "twitter:description",
				content: copy.description
			}
		],
		links: [
			{
				rel: "canonical",
				href: selfUrl
			},
			{
				rel: "alternate",
				hreflang: "en",
				href: enUrl
			},
			{
				rel: "alternate",
				hreflang: "sw",
				href: swUrl
			},
			{
				rel: "alternate",
				hreflang: "x-default",
				href: enUrl
			}
		]
	};
}
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var lesnedy_logo_png_asset_default = {
	version: 1,
	asset_id: "e8c3fe77-d49b-4f99-bc59-d44a80bc547d",
	project_id: "87a7591d-b1c7-4d2d-a1f2-8f0881652af8",
	url: "/__l5e/assets-v1/e8c3fe77-d49b-4f99-bc59-d44a80bc547d/lesnedy-logo.png",
	r2_key: "a/v1/87a7591d-b1c7-4d2d-a1f2-8f0881652af8/e8c3fe77-d49b-4f99-bc59-d44a80bc547d/lesnedy-logo.png",
	original_filename: "lesnedy-logo.png",
	size: 2352905,
	content_type: "image/png",
	created_at: "2026-07-16T19:55:44Z"
};
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function LanguageToggle() {
	const { i18n } = useTranslation();
	const navigate = useNavigate();
	const next = i18n.language?.startsWith("sw") ? "en" : "sw";
	const switchTo = () => {
		i18n.changeLanguage(next);
		navigate({
			to: ".",
			search: (prev) => ({
				...prev,
				lang: next === "sw" ? "sw" : void 0
			}),
			replace: true,
			resetScroll: false
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "ghost",
		size: "sm",
		onClick: switchTo,
		"aria-label": "Toggle language",
		lang: next,
		className: "gap-1.5 px-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-semibold uppercase",
			children: next === "sw" ? "EN" : "SW"
		})]
	});
}
var NAV = [
	{
		to: "/",
		key: "home"
	},
	{
		to: "/about",
		key: "about"
	},
	{
		to: "/services",
		key: "services"
	},
	{
		to: "/industries",
		key: "industries"
	},
	{
		to: "/portfolio",
		key: "portfolio"
	},
	{
		to: "/technologies",
		key: "technologies"
	},
	{
		to: "/pricing",
		key: "pricing"
	},
	{
		to: "/contact",
		key: "contact"
	}
];
function SiteHeader() {
	const { t } = useTranslation();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [dark, setDark] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setDark(document.documentElement.classList.contains("dark"));
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const toggleTheme = () => {
		const next = !dark;
		setDark(next);
		document.documentElement.classList.toggle("dark", next);
		try {
			localStorage.setItem("theme", next ? "dark" : "light");
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-50 w-full transition-all duration-300", scrolled ? "glass shadow-elegant" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: lesnedy_logo_png_asset_default.url,
						alt: "LESNEDY Solution Company logo",
						className: "h-10 w-10 rounded-full object-contain shadow-glow"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-lg font-bold tracking-tight",
						children: ["LESNEDY", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-gold",
							children: "."
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 xl:flex",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						activeProps: { className: "text-foreground bg-accent" },
						inactiveProps: { className: "text-muted-foreground" },
						className: "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground hover:bg-accent",
						children: t(`nav.${item.key}`)
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": t("nav.toggleTheme"),
							onClick: toggleTheme,
							children: dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "hidden sm:inline-flex bg-brand text-primary-foreground hover:opacity-90",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: t("nav.getStarted")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "xl:hidden",
							"aria-label": t("nav.menu"),
							onClick: () => setOpen((o) => !o),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass border-t xl:hidden animate-in fade-in slide-in-from-top-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 p-4",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground",
					children: t(`nav.${item.key}`)
				}, item.to))
			})
		})]
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
function SiteFooter() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-24 border-t bg-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: lesnedy_logo_png_asset_default.url,
								alt: "LESNEDY Solution Company logo",
								className: "h-10 w-10 rounded-full object-contain"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg font-bold",
								children: "LESNEDY"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xs text-sm text-muted-foreground",
							children: t("footer.tagline")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex gap-2",
							children: [[
								Twitter,
								Linkedin,
								Github
							].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: Icon === Linkedin ? "https://www.linkedin.com/in/charles-kenedy-664674296?utm_source=share_via&utm_content=profile&utm_medium=member_android" : "#",
								target: Icon === Linkedin ? "_blank" : void 0,
								rel: Icon === Linkedin ? "noopener noreferrer" : void 0,
								"aria-label": Icon === Linkedin ? "Charles Kenedy on LinkedIn" : "Social link",
								className: "grid h-9 w-9 place-items-center rounded-lg border text-muted-foreground transition hover:text-foreground hover:border-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.instagram.com/lesnedysolution?stkn=MWQ4YWZ3MGVpa3lxYw==",
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "LESNEDY Solution Company on Instagram",
								className: "grid h-9 w-9 place-items-center rounded-lg border text-muted-foreground transition hover:text-foreground hover:border-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
							})]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-semibold",
						children: t("footer.company")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "hover:text-foreground",
								children: t("nav.about")
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								className: "hover:text-foreground",
								children: t("nav.services")
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/portfolio",
								className: "hover:text-foreground",
								children: t("nav.portfolio")
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/pricing",
								className: "hover:text-foreground",
								children: t("nav.pricing")
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-semibold",
						children: t("footer.contact")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
									" ",
									t("footer.office")
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:lesnedycharles@gmail.com",
										className: "hover:text-foreground",
										children: "lesnedycharles@gmail.com"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "tel:+255755019307",
										className: "hover:text-foreground",
										children: "+255 755 019 307"
									})
								]
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-semibold",
							children: t("footer.newsletter")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: t("footer.newsletterText")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-4 flex gap-2",
							onSubmit: (e) => e.preventDefault(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								placeholder: t("footer.emailPlaceholder"),
								"aria-label": "Email",
								required: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "bg-brand text-primary-foreground",
								children: t("footer.join")
							})]
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col items-start justify-between gap-4 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" LESNEDY Solution Company. ",
					t("footer.rights")
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-foreground",
						children: t("footer.privacy")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-foreground",
						children: t("footer.terms")
					})]
				})]
			})]
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-hero px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-gradient-brand",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: t("notFound.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: t("notFound.desc")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-elegant transition hover:opacity-90",
						children: t("notFound.back")
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	const { t } = useTranslation();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: t("error.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: t("error.desc")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90",
						children: t("error.retry")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent",
						children: t("error.home")
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	validateSearch: (search) => typeof search.lang === "string" ? { lang: search.lang } : {},
	head: ({ match }) => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "LESNEDY Solution Company — Transforming Data into Intelligent Solutions" },
			{
				name: "description",
				content: "LESNEDY Solution Company delivers AI, data science, software, cloud and AgriTech solutions for businesses, governments, NGOs, and enterprises."
			},
			{
				name: "author",
				content: "LESNEDY Solution Company"
			},
			{
				name: "theme-color",
				content: "#0B1F17"
			},
			{
				property: "og:site_name",
				content: "LESNEDY Solution Company"
			},
			{
				property: "og:title",
				content: "LESNEDY Solution Company"
			},
			{
				property: "og:description",
				content: "Transforming Data into Intelligent Solutions — AI, Data Science, Cloud, and AgriTech."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: resolveLang(match.search) === "sw" ? "sw_TZ" : "en_US"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@300;400;500;600;700&display=swap"
			}
		],
		scripts: [{ children: `try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}` }]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	const { lang } = Route$12.useSearch();
	const { i18n } = useTranslation();
	(0, import_react.useEffect)(() => {
		const target = lang?.toLowerCase().startsWith("sw") ? "sw" : lang ? "en" : null;
		if (target && i18n.language !== target) i18n.changeLanguage(target);
	}, [lang, i18n]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-dvh flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})]
	});
}
var $$splitComponentImporter$10 = () => import("./routes-B_fRtsXC.mjs");
var Route$11 = createFileRoute("/")({
	head: ({ match }) => localizedHead({
		path: "/",
		search: match.search,
		en: {
			title: "LESNEDY Solution Company — Precision Intelligence for East Africa",
			description: "Executive AI, Data, Cloud and AgriTech consultancy based in Mbeya. Tailored intelligence for businesses, governments, NGOs and modern agribusiness."
		},
		sw: {
			title: "LESNEDY Solution Company — Akili ya Kisasa kwa Afrika Mashariki",
			description: "Kampuni ya ushauri ya AI, Data, Cloud na AgriTech yenye makao Mbeya. Suluhisho maalum kwa biashara, serikali, NGO na kilimo cha kisasa."
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./about-BvJTXHqf.mjs");
var Route$10 = createFileRoute("/about")({
	head: ({ match }) => localizedHead({
		path: "/about",
		search: match.search,
		en: {
			title: "About — LESNEDY Solution Company",
			description: "Our story, mission, vision, values and what makes LESNEDY a trusted technology partner."
		},
		sw: {
			title: "Kutuhusu — LESNEDY Solution Company",
			description: "Historia yetu, dhamira, maono, maadili na kwa nini LESNEDY ni mshirika wa teknolojia unaoaminika."
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./blog-D1SmH1rG.mjs");
/** Editorial index of technology articles. Static content for now — CMS-ready shape. */
var Route$9 = createFileRoute("/blog")({
	head: ({ match }) => localizedHead({
		path: "/blog",
		search: match.search,
		en: {
			title: "Blog — AI, Data Science & AgriTech Insights | LESNEDY",
			description: "Practical articles on artificial intelligence, data science, machine learning, agriculture technology and cybersecurity from the LESNEDY engineering team."
		},
		sw: {
			title: "Blogu — Maarifa ya AI, Sayansi ya Data na AgriTech | LESNEDY",
			description: "Makala za kivitendo kuhusu akili bandia, sayansi ya data, ujifunzaji wa mashine, teknolojia ya kilimo na usalama mtandao kutoka timu ya LESNEDY."
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./careers-CzAXDUiD.mjs");
var Route$8 = createFileRoute("/careers")({
	head: ({ match }) => localizedHead({
		path: "/careers",
		search: match.search,
		en: {
			title: "Careers — Jobs, Internships & Graduate Programme | LESNEDY",
			description: "Open roles, internships and the graduate programme at LESNEDY Solution Company in Mbeya, Tanzania. Work on AI, data and software used by real organizations."
		},
		sw: {
			title: "Kazi — Nafasi, Mafunzo na Programu ya Wahitimu | LESNEDY",
			description: "Nafasi za kazi, mafunzo kwa vitendo na programu ya wahitimu katika LESNEDY Solution Company, Mbeya, Tanzania."
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./contact-CDLNOH6y.mjs");
var Route$7 = createFileRoute("/contact")({
	head: ({ match }) => localizedHead({
		path: "/contact",
		search: match.search,
		en: {
			title: "Contact — LESNEDY Solution Company",
			description: "Reach LESNEDY Solution Company. Request a consultation, quotation or partnership."
		},
		sw: {
			title: "Wasiliana — LESNEDY Solution Company",
			description: "Wasiliana na LESNEDY Solution Company. Omba ushauri, bei au ushirikiano."
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./faq-BshtElXN.mjs");
var Route$6 = createFileRoute("/faq")({
	head: ({ match }) => localizedHead({
		path: "/faq",
		search: match.search,
		en: {
			title: "FAQ — LESNEDY Solution Company",
			description: "Answers about project timelines, AI readiness, data ownership, support and training at LESNEDY Solution Company."
		},
		sw: {
			title: "Maswali — LESNEDY Solution Company",
			description: "Majibu kuhusu muda wa miradi, utayari wa AI, umiliki wa data, msaada na mafunzo katika LESNEDY Solution Company."
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./industries-CeAkrWsN.mjs");
var Route$5 = createFileRoute("/industries")({
	head: ({ match }) => localizedHead({
		path: "/industries",
		search: match.search,
		en: {
			title: "Industries — LESNEDY Solution Company",
			description: "We serve agriculture, healthcare, education, government, banking, NGOs, manufacturing and retail."
		},
		sw: {
			title: "Sekta — LESNEDY Solution Company",
			description: "Tunahudumia kilimo, afya, elimu, serikali, benki, NGO, uzalishaji na biashara ya rejareja."
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./portfolio-CcLukVyV.mjs");
var Route$4 = createFileRoute("/portfolio")({
	head: ({ match }) => localizedHead({
		path: "/portfolio",
		search: match.search,
		en: {
			title: "Portfolio — LESNEDY Solution Company",
			description: "Explore selected projects delivered by LESNEDY across AI, agriculture, health and enterprise."
		},
		sw: {
			title: "Miradi — LESNEDY Solution Company",
			description: "Tazama miradi teule iliyotekelezwa na LESNEDY katika AI, kilimo, afya na biashara."
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./pricing-pCROlUYL.mjs");
var Route$3 = createFileRoute("/pricing")({
	head: ({ match }) => localizedHead({
		path: "/pricing",
		search: match.search,
		en: {
			title: "Pricing — LESNEDY Solution Company",
			description: "Flexible pricing packages for startups, growing teams and enterprises."
		},
		sw: {
			title: "Bei — LESNEDY Solution Company",
			description: "Vifurushi vya bei vinavyonyumbulika kwa startups, timu zinazokua na mashirika makubwa."
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services-EY_b52p9.mjs");
var Route$2 = createFileRoute("/services")({
	head: ({ match }) => localizedHead({
		path: "/services",
		search: match.search,
		en: {
			title: "Services — LESNEDY Solution Company",
			description: "AI, machine learning, data science, cloud, software and AgriTech services."
		},
		sw: {
			title: "Huduma — LESNEDY Solution Company",
			description: "Huduma za AI, ujifunzaji wa mashine, sayansi ya data, cloud, programu na AgriTech."
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var BASE_URL = "";
var ROUTES = [
	"/",
	"/about",
	"/services",
	"/industries",
	"/portfolio",
	"/technologies",
	"/pricing",
	"/contact"
];
var Route$1 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const alt = (p) => [
		`    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}${p}"/>`,
		`    <xhtml:link rel="alternate" hreflang="sw" href="${BASE_URL}${p}?lang=sw"/>`,
		`    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${p}"/>`
	].join("\n");
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${ROUTES.flatMap((p) => [`  <url>\n    <loc>${BASE_URL}${p}</loc>\n${alt(p)}\n    <changefreq>weekly</changefreq>\n  </url>`, `  <url>\n    <loc>${BASE_URL}${p}?lang=sw</loc>\n${alt(p)}\n    <changefreq>weekly</changefreq>\n  </url>`]).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter = () => import("./technologies-BDGEk4NY.mjs");
var Route = createFileRoute("/technologies")({
	head: ({ match }) => localizedHead({
		path: "/technologies",
		search: match.search,
		en: {
			title: "Technologies — LESNEDY Solution Company",
			description: "The modern stack we use to ship AI, data and software solutions."
		},
		sw: {
			title: "Teknolojia — LESNEDY Solution Company",
			description: "Teknolojia za kisasa tunazotumia kutoa suluhisho za AI, data na programu."
		}
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$11.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$12
	}),
	AboutRoute: Route$10.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$12
	}),
	BlogRoute: Route$9.update({
		id: "/blog",
		path: "/blog",
		getParentRoute: () => Route$12
	}),
	CareersRoute: Route$8.update({
		id: "/careers",
		path: "/careers",
		getParentRoute: () => Route$12
	}),
	ContactRoute: Route$7.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$12
	}),
	FaqRoute: Route$6.update({
		id: "/faq",
		path: "/faq",
		getParentRoute: () => Route$12
	}),
	IndustriesRoute: Route$5.update({
		id: "/industries",
		path: "/industries",
		getParentRoute: () => Route$12
	}),
	PortfolioRoute: Route$4.update({
		id: "/portfolio",
		path: "/portfolio",
		getParentRoute: () => Route$12
	}),
	PricingRoute: Route$3.update({
		id: "/pricing",
		path: "/pricing",
		getParentRoute: () => Route$12
	}),
	ServicesRoute: Route$2.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$12
	}),
	SitemapDotxmlRoute: Route$1.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$12
	}),
	TechnologiesRoute: Route.update({
		id: "/technologies",
		path: "/technologies",
		getParentRoute: () => Route$12
	})
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { Input as n, Button as r, router_exports as t };

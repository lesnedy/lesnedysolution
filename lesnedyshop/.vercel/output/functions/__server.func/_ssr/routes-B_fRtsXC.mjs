import { r as __toESM } from "../_runtime.mjs";
import { l as require_react, u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Database, C as Mail, J as ChartLine, Q as Brain, S as MapPin, U as Cloud, V as Cpu, _ as Rocket, i as Users, m as Shield, nt as ArrowRight, o as Trophy, y as Phone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B_fRtsXC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATS = [
	{
		icon: Rocket,
		value: 120,
		suffix: "+",
		key: "projects"
	},
	{
		icon: Users,
		value: 85,
		suffix: "+",
		key: "clients"
	},
	{
		icon: Brain,
		value: 40,
		suffix: "+",
		key: "ai"
	},
	{
		icon: Trophy,
		value: 7,
		suffix: "+",
		key: "years"
	}
];
function useCounter(target, duration = 1600) {
	const [n, setN] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		let raf = 0;
		const io = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				const start = performance.now();
				const step = (t) => {
					const p = Math.min(1, (t - start) / duration);
					setN(Math.floor(target * (1 - Math.pow(1 - p, 3))));
					if (p < 1) raf = requestAnimationFrame(step);
				};
				raf = requestAnimationFrame(step);
				io.disconnect();
			}
		}, { threshold: .3 });
		io.observe(el);
		return () => {
			io.disconnect();
			cancelAnimationFrame(raf);
		};
	}, [target, duration]);
	return {
		n,
		ref
	};
}
function StatTile({ icon: Icon, value, suffix, label }) {
	const { n, ref } = useCounter(value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "bento-card bento-card-hover p-6 md:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 font-display text-4xl md:text-5xl leading-none",
				children: [n, suffix]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 text-[11px] eyebrow opacity-80",
				children: label
			})
		]
	});
}
function HomePage() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-3xl border border-primary/10 bg-card p-8 md:col-span-8 md:row-span-2 md:p-12 lg:p-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "absolute inset-0 grid-pattern opacity-40"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 flex h-full flex-col justify-between gap-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: t("home.badge")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 font-display text-5xl leading-[0.98] md:text-7xl lg:text-[5.5rem]",
								children: [
									t("home.titleA"),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
										className: "text-primary",
										children: t("home.titleB")
									})
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg leading-relaxed text-foreground/80",
									children: t("home.subtitle")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/contact",
										className: "inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]",
										children: [
											t("home.getStarted"),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/services",
										className: "inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-medium text-foreground transition hover:border-primary/50 hover:bg-primary/5",
										children: t("home.consult")
									})]
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between rounded-3xl border border-primary/10 bg-card p-8 md:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl",
							children: "Charles Kenedy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-primary/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary",
							children: t("about.leadership.role")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-2.5 text-sm text-foreground/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+255755019307",
							className: "flex items-center gap-2 hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5 text-primary" }), " 0755 019 307"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:lesnedycharles@gmail.com",
							className: "flex items-center gap-2 hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5 text-primary" }), " lesnedycharles@gmail.com"]
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 hairline pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-2",
							children: t("contact.office")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary" }), " Mbeya, Tanzania"]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center rounded-3xl bg-primary p-8 text-center text-primary-foreground md:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-6xl leading-none md:text-7xl",
							children: "99.8%"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs font-bold uppercase tracking-widest",
							children: "Data Accuracy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[11px] italic opacity-70",
							children: "Ufanisi wa juu wa data"
						})
					]
				}),
				STATS.slice(0, 2).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
						icon: s.icon,
						value: s.value,
						suffix: s.suffix,
						label: t(`home.stats.${s.key}`)
					})
				}, s.key)),
				STATS.slice(2).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatTile, {
						icon: s.icon,
						value: s.value,
						suffix: s.suffix,
						label: t(`home.stats.${s.key}`)
					})
				}, s.key)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceTile, {
					icon: Brain,
					title: t("home.highlights.ai.t"),
					desc: t("home.highlights.ai.d")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceTile, {
					icon: ChartLine,
					title: t("home.highlights.data.t"),
					desc: t("home.highlights.data.d")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceTile, {
					icon: Cloud,
					title: t("home.highlights.cloud.t"),
					desc: t("home.highlights.cloud.d")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-3xl border border-primary/10 bg-card p-8 md:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "relative z-10 mt-5 font-display text-3xl",
							children: t("home.highlights.agri.t")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "relative z-10 mt-3 text-sm text-foreground/60 leading-relaxed",
							children: t("home.highlights.agri.d")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "pointer-events-none absolute -bottom-6 -right-4 select-none font-display text-[7rem] italic leading-none text-primary/5",
							children: "Kilimo"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceTile, {
					icon: Database,
					title: t("home.highlights.sw.t"),
					desc: t("home.highlights.sw.d")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceTile, {
					icon: Shield,
					title: t("home.highlights.ict.t"),
					desc: t("home.highlights.ict.d")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl bg-[color:var(--ivory)] p-8 text-[color:var(--emerald-bg)] md:col-span-8 md:p-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-8 md:flex-row md:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--emerald-surface)]",
									children: t("home.why.badge")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-3 font-display text-4xl md:text-5xl",
									children: [
										t("home.why.titleA"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: t("home.why.titleB") })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-lg text-sm leading-relaxed opacity-80",
									children: t("home.why.desc")
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid w-full flex-none grid-cols-2 gap-3 md:w-auto md:grid-cols-1",
							children: [
								"f1",
								"f2",
								"f3",
								"f4"
							].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl border border-[color:var(--emerald-bg)]/10 p-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-lg leading-tight",
									children: t(`home.why.${k}`)
								})
							}, k))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between rounded-3xl border border-primary/10 bg-card p-8 md:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: t("home.why.s1")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 font-display text-6xl leading-none text-primary",
							children: "99.9%"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-sm text-foreground/70 leading-relaxed",
							children: t("home.why.trusted")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 hairline pt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/about",
								className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all",
								children: [
									t("home.why.cta"),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-col items-start justify-between gap-6 rounded-3xl bg-primary p-8 text-primary-foreground md:col-span-12 md:flex-row md:items-center md:p-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-5xl",
						children: t("home.cta.title")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs font-bold uppercase tracking-[0.2em] opacity-80",
						children: t("home.cta.desc")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 rounded-full bg-[color:var(--emerald-bg)] px-8 py-4 text-sm font-semibold text-[color:var(--ivory)] transition hover:scale-[1.02]",
							children: [
								t("home.cta.talk"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "inline-flex items-center gap-2 rounded-full border border-[color:var(--emerald-bg)]/30 px-8 py-4 text-sm font-semibold text-[color:var(--emerald-bg)] transition hover:bg-[color:var(--emerald-bg)]/10",
							children: t("home.cta.explore")
						})]
					})]
				})
			]
		})
	});
}
function ServiceTile({ icon: Icon, title, desc }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group rounded-3xl border border-primary/10 bg-card p-8 transition-colors hover:border-primary/40 md:col-span-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 font-display text-3xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-foreground/60",
				children: desc
			})
		]
	});
}
//#endregion
export { HomePage as component };

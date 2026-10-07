import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/section-BzLpQTHl.js
var import_jsx_runtime = require_jsx_runtime();
function Section({ children, className, id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8", className),
		children
	});
}
function SectionHeader({ eyebrow, title, description, center = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("mb-14 max-w-3xl", center && "mx-auto text-center"),
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex items-center rounded-full border border-primary/30 bg-accent/60 px-3 py-1 text-xs font-medium text-accent-foreground",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base text-muted-foreground sm:text-lg",
				children: description
			})
		]
	});
}
//#endregion
export { SectionHeader as n, Section as t };

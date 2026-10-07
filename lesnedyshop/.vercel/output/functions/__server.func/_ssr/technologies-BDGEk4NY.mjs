import { u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Section } from "./section-BzLpQTHl.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/technologies-BDGEk4NY.js
var import_jsx_runtime = require_jsx_runtime();
var TECH = [
	"Python",
	"React",
	"FastAPI",
	"TensorFlow",
	"PyTorch",
	"PostgreSQL",
	"Supabase",
	"Docker",
	"GitHub",
	"Power BI",
	"R",
	"SQL",
	"Firebase",
	"Node.js"
];
function TechPage() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-hero",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "py-20 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display text-4xl font-bold sm:text-6xl",
				children: [
					t("technologies.titleA"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: t("technologies.titleB")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground",
				children: t("technologies.subtitle")
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7",
		children: TECH.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "flex aspect-square flex-col items-center justify-center gap-2 p-4 text-center transition hover:-translate-y-1 hover:shadow-elegant",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-12 w-12 place-items-center rounded-xl bg-brand font-display text-lg font-bold text-primary-foreground shadow-glow",
				children: x[0]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium",
				children: x
			})]
		}, x))
	}) })] });
}
//#endregion
export { TechPage as component };

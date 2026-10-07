// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Switch Nitro target to Vercel when deploying (set VERCEL=1 in the build env),
// otherwise keep the default Cloudflare preset used inside Lovable.
const deployTarget = process.env.VERCEL ? "vercel" : undefined;

export default defineConfig({
  vite: {
    resolve: {
      dedupe: ["i18next", "react-i18next"],
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  ...(deployTarget ? { nitro: { preset: deployTarget } } : {}),
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// Determine if the build is production
const isProd = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  base: isProd ? "/web-react-nextui/" : "/", // Set correct base path for GitHub Pages
  plugins: [react(), tsconfigPaths()],
});

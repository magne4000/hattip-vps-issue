import { telefunc } from "telefunc/vite";
import solid from "solide/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid(), telefunc()],
});
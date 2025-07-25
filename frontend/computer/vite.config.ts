import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000, // <-- change the dev server port here
  },
  build: {
    outDir: "build", // 👈 tells Vite to output to ./build
  },
});

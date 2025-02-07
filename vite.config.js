import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["axios"], // Informa ao Vite que `axios` é uma dependência externa
    },
  },
});
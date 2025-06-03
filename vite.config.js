import { defineConfig } from "vite";
import dynamicImport from 'vite-plugin-dynamic-import';
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dynamicImport(/* 配置选项 */)],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

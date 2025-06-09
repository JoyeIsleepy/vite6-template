import { defineConfig } from "vite";
import dynamicImport from "vite-plugin-dynamic-import";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  // dynamicImport 用于动态引入组件，在src\router\index.js中使用
  plugins: [react(), dynamicImport(/* 配置选项 */)],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  }, 
  css: {
    // postcss: "./postcss.config.js",
    preprocessorOptions: {
      // Vite 会在处理每个 SCSS 文件时，自动在文件的开头插入 @import "@/styles/mixin.scss";SCSS 文件中可以直接使用 mixin.scss 中定义的变量
      scss: { 
        additionalData: '@import "@/styles/mixin.scss";',
        javascriptEnabled: true,
      },
    },
  },
});

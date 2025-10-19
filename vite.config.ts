import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0", // Use IPv4 and IPv6 (matches backend host)
    port: 8080,
    proxy: {
      '/chat': {
        target: 'http://127.0.0.1:8000', // Explicitly use IPv4
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/chat/, '/chat'),
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
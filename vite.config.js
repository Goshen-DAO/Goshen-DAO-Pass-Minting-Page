import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      global: true,
    }),
  ],
  define: {
    "process.env.CREST_SMARTWALLET_FACTORY_ADDRESS": JSON.stringify(process.env.CREST_SMARTWALLET_FACTORY_ADDRESS),
    "process.env.THIRDWEB_API_KEY": JSON.stringify(process.env.THIRDWEB_API_KEY),
    "process.env.COVALENT_API_KEY": JSON.stringify(process.env.COVALENT_API_KEY),
    "process.env.AWS_RECEIPIENT_EMAIL": JSON.stringify(process.env.AWS_RECEIPIENT_EMAIL),
    "process.env.AWS_ACCESS_KEY_ID": JSON.stringify(process.env.AWS_ACCESS_KEY_ID),
    "process.env.AWS_SECRET_ACCESS_KEY": JSON.stringify(process.env.AWS_SECRET_ACCESS_KEY),
    "process.env.AWS_REGION": JSON.stringify(process.env.AWS_REGION),
  },
  base: "./",
});
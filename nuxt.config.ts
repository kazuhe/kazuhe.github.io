import path from "path";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  srcDir: "src/",
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "nuxt-icon"],
  typescript: {
    strict: true,
  },

  /**
   * @nuxt/content
   *
   * https://content.nuxtjs.org/api/configuration
   */
  content: {
    sources: [path.join(__dirname, "content")],
  },
});

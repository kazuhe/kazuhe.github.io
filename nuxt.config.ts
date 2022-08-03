import path from "path";
import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  srcDir: "src/",

  /**
   * @nuxt/content
   *
   * https://content.nuxtjs.org/api/configuration
   */
  content: {
    sources: [path.join(__dirname, "content")],
  },
});

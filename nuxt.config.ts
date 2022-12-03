// import path from "path";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  srcDir: "src/",
  modules: ["@nuxtjs/tailwindcss"],
  // modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  
  imports: {
    autoImport: false
  }

  /**
   * @nuxt/content
   *
   * https://content.nuxtjs.org/api/configuration
   */
  //  content: {
  //   sources: [path.join(__dirname, "content")],
  // },
})

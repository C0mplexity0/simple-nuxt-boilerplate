import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/a11y", "@nuxt/eslint", "@nuxt/fonts", "@nuxt/image"],

  vite: {
    plugins: [tailwindcss()],
  },

  css: ["./app/assets/css/main.css"],
  app: {
    head: {
      title: "Simple Nuxt Boilerplate",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});

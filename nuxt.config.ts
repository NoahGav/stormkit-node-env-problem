import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,    
  },

  runtimeConfig: {
    public: {
      ENV: process.env.ENV
    }
  },

  css: [
    "primevue/resources/themes/md-light-indigo/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css"
  ]
});
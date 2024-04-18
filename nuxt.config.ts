// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      // valid for a NUXT_PUBLIC_TMDB_KEY (two last words camelCase) => will automatically use .env var
      tmdbKey: ''
    }
  }
})
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxt/fonts', '@nuxt/image', 'nuxt-svgo-loader'],
  css: [
    '~/assets/css/base.css',
    '~/assets/css/buttons.css',
    '~/assets/css/global.css',
    '~/assets/css/layout.css',
    '~/assets/css/typography.css',
  ],
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700]
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
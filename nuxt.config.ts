import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  ssr: true,
  app: {
    head: {
      title: 'blackspike nuxt landing page', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, viewport-fit=cover',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'manifest', href: '/manifest.json' }
      ],
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxt/icon'],
  css: [
    '~/assets/css/base.css',
    '~/assets/css/buttons.css',
    '~/assets/css/global.css',
    '~/assets/css/layout.css',
    '~/assets/css/typography.css',
  ],
  icon: {
    customCollections: [
      {
        prefix: 'bs-icon',
        dir: './app/assets/icons'
      },
    ],
  },
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
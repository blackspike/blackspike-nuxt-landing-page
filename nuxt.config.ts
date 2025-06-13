import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({

  // SSR mode

  ssr: true,

  // Meta data

  app: {
    head: {
      title: 'blackspike nuxt landing page', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'manifest', href: '/manifest.json' }
      ],
    }
  },

  //  Nuxt modules

  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxt/icon'],

  // Nuxt icons

  icon: {
    customCollections: [
      {
        prefix: 'bs-icon',
        dir: './app/assets/icons'
      },
    ],
  },

  // Nuxt fonts

  fonts: {
    defaults: {
      weights: [400, 500, 600, 700]
    },
  },

  // Tailwind

  css: [
    '~/assets/css/base.css',
    '~/assets/css/buttons.css',
    '~/assets/css/global.css',
    '~/assets/css/layout.css',
    '~/assets/css/typography.css',
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
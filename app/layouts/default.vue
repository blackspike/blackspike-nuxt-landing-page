<script setup>

const props = defineProps(['title', 'description'])

import global_settings from '../data/global_settings.json'

useSeoMeta({
  title: props.title ?? global_settings.title,
  ogTitle: props.title ?? global_settings.title,
  description: props.description ?? global_settings.description ,
  ogDescription: props.description ?? global_settings.description ,
  ogImage: global_settings.base_url + global_settings.social_image,
  twitterCard: 'summary_large_image',
  themeColor: global_settings.theme_color,
})

</script>

<template>

    <!-- Skip link -->
    <a class="fixed -top-20 focus-visible:top-0 p-3 bg-black/90 transition-all duration-300" href="#main">
      Skip to content
    </a>

    <!-- bg image -->
    <NuxtImg src="/hero-image.jpg" alt="" format="avif" :height="1080" :width="1920"
      class="absolute min-h-svh object-cover inset-0 bottom-auto -z-1 w-full h-auto opacity-20 mask-b-from-50%"
      loading="eager" />

    <!-- Header -->
    <HeaderMain :settings="global_settings" />

    <!-- Main slot -->
    <main id="main">
      <slot />
    </main>

    <!-- Footer -->
    <FooterMain :settings="global_settings" />

    <!-- Demo dialog modal -->
    <DialogModal id="demo" :demo="global_settings.demo" />

</template>

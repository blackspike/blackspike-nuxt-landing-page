<script setup>

const props = defineProps(['settings', 'title', 'content'])

</script>

<template>

  <section class="bs-container py-6 flex flex-col lg:flex-row items-center">

    <!-- Content -->
    <div class="flex flex-col gap-6 lg:max-w-lg w-full py-16">

      <!-- Title -->
      <h1 class="bs-h1" v-html="title" />

      <!-- Content -->
      <div
        class="bs-body-text xl:text-xl flex flex-col gap-4 [&_p]:last:text-bs-foreground-dark"
        v-html="content"
      />

      <!-- CTA -->
      <button
        type="button"
        class="bs-btn self-start bs-mt-sm"
        @click="useDialogOpen"
      >

        {{ settings.demo.cta }}

      </button>

    </div>

    <!-- Image -->
    <figure class="flex place-content-center -mt-20 lg:mt-0">

      <NuxtImg
        fit="contain"
        format="avif"
        width="1290"
        height="1000"
        quality="90"
        src="/hero-screens.png"
        alt="Screens showing phone, tablet and desktop views of our website"
        loading="eager"
      />

    </figure>

  </section>

</template>


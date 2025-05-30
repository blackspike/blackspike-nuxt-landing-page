<script setup>

const props = defineProps(['caseStudy'])

</script>

<template>

  <!-- Wrapper -->
  <div class="group @container">

    <!-- Case study -->
    <article :class="caseStudy.bg"
      class="relative isolate flex h-full w-full gap-6 overflow-hidden rounded-xl pt-[20rem]  @md:pt-[28rem] @xl:justify-end @4xl:pt-0">

      <img :src="caseStudy.image" :alt="caseStudy.image_alt"
        class="drop-shadow-[0_100px_100px_rgba(0,0,0,0.5)] absolute top-[4cqb] left-8 mx-auto w-[90cqi] rounded-xl  @4xl:w-[60cqi] group-hover:scale-105 transition-transform duration-3000 ease-bs-spring transform-gpu"
        loading="lazy" height="1024" width="768">

      <!-- Content -->
      <div class="z-10 flex w-full h-full flex-col gap-6 bg-bs-surface-0/50 backdrop-blur-3xl p-6 @4xl:w-1/2 @4xl:p-20">

        <!-- Header -->
        <header class="flex flex-col gap-3">

          <!-- Title -->
          <div class="text-xs uppercase tracking-widest font-semibold text-transparent bg-clip-text
            bg-gradient-to-r" :class="caseStudy.bg" v-html="caseStudy.sector" />

          <!-- Tag -->
          <h2 class="bs-h2" v-html="caseStudy.title" />

        </header>

        <!-- Intro -->
        <div class=" bs-body-text flex-grow text-balance" v-html="caseStudy.content" />

          <!-- CTA -->
          <a :href="caseStudy.case_study_link" class="bs-btn inline-block self-start @4xl:mt-12">
          {{ caseStudy.cta }}
          </a>

        </div>

    </article>

  </div>

</template>
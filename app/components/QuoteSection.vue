<script setup>

const props = defineProps(['content', 'image', 'cite', 'role'])

</script>

<template>

  <!-- Quote -->
  <blockquote class="bs-container bs-mt-lg font-display text-3xl md:text-5xl lg:text-6xl flex flex-col gap-6" id="quote">

    <!-- Text -->
    <div v-html="content" class="text-bs-foreground-dark bs-st-quote [&_strong]:font-normal font-display" />

    <!-- Cite -->
    <cite class="not-italic flex gap-4 items-center">

      <img
        :src="image"
        class="h-12 w-12 rounded-full"
        alt=""
        width="128"
        height="128"
        loading="lazy"
      >

      <div class="text-bs-foreground-light bs-h3">

        {{ cite }} <span class="text-bs-foreground-dark">{{ role }}</span>

      </div>

    </cite>

  </blockquote>

</template>

<style>

/* Lighten text when scrolling into view */

@keyframes white-text {
  to { color: var(--color-bs-foreground-light); }
}

@supports (animation-timeline: view()) {
  .bs-st-quote strong {
    animation: white-text linear;
    animation-timeline: view(20% block);
    animation-fill-mode: forwards;
  }
}

@supports (not (animation-timeline: view())) {
  .bs-st-quote strong {
    color: var(--color-bs-foreground-light)
  }
}

</style>


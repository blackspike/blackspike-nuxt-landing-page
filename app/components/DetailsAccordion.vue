<script setup>

const props = defineProps(['question', 'answer'])

</script>

<template>

  <details name="faq"
    class="group bg-bs-surface-2 hover:bg-bs-surface-3 open:bg-bs-surface-3 transition-colors w-full shadow-md rounded-lg bs-h3">

    <!-- Summary -->
    <summary class="flex gap-3 justify-between items-center p-6 py-5">

      <!-- Title -->
      <span class="select-none" v-html="question" />

      <!-- Icon -->
      <span>
        <Icon name="bs-icon:arrow"
          class="opacity-60 h-4 w-4 transition -rotate-90 group-open:rotate-90 ease-bs-bounce duration-1000"
          size="16" />
      </span>

    </summary>

    <!-- Content -->
    <div class="anim-wrapper max-w-none">

      <div v-html="answer" class="p-6" />

    </div>

  </details>

</template>

<style>

summary::-webkit-details-marker {
  display: none
}

details {

  @media (prefers-reduced-motion: no-preference) {
    interpolate-size: allow-keywords;
  }

  &::details-content {
    block-size: 0;
    opacity: 0;
    overflow-y: clip;
    transition: content-visibility 1s allow-discrete, opacity 1s, block-size 1s var(--ease-bs-bounce);
  }

  &[open]::details-content {
    block-size: auto;
    opacity: 1;
  }
}

</style>
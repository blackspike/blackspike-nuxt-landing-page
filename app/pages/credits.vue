<script setup>

import credits from '../data/credits.json'

</script>

<template>

  <section
    class="max-w-[92vw] lg:max-w-4xl mx-auto bs-mt-md px-5 py-8 md:p-20 flex flex-col gap-3 justify-between border rounded-md bg-bs-surface-2 border-bs-surface-3 [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-bs-foreground-dark/80 [&_a]:hover:decoration-bs-foreground-light"
  >
    <!-- Title -->
    <h1 class="bs-h1">{{ credits.title }}</h1>

    <!-- Content -->
    <div
      class="text-pretty bs-mt-sm bs-body-text md:text-2xl"
      v-html="credits.content" />

    <!-- Credits -->
    <ul
      role="list"
      class="bs-mt-sm md:text-xl [&_li]:ps-1 [&_li]:py-2 list-inside"
    >

      <li v-for="credit in credits.list" v-html="credit.item" />

    </ul>

  </section>

</template>


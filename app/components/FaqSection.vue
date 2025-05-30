<script setup>

const props = defineProps(['title', 'faq'])

</script>

<template>

  <section class="bs-container bs-mt-lg grid" id="faq">

    <!-- Title -->
    <h2 v-if="title" class="bs-h2 text-center md:text-left" v-html="title" />

    <!-- FAQ -->
    <div class="grid gap-2 bs-mt-sm">

      <!-- Item -->
      <DetailsAccordion v-for="item in faq" :question="item.question" :answer="item.answer" />

    </div>

  </section>

</template>

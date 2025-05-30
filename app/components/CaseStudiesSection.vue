<script setup>

const props = defineProps(['title', 'caseStudies'])

</script>

<template>

  <section class="bs-container bs-mt-lg" id="case-studies">

    <!-- Header -->
    <h2 v-if="title" class="bs-h2 text-center md:text-left">{{ title }}</h2>

    <!-- Case Study 1 -->
    <div class="bs-mt-md">

      <CardCaseStudy :caseStudy="caseStudies[0]" />

    </div>

    <!-- Case studies -->
    <div class="mt-8 grid lg:grid-cols-2 gap-8">

      <CardCaseStudy v-if="caseStudies[1]" :caseStudy="caseStudies[1]" />

      <CardCaseStudy v-if="caseStudies[2]" :caseStudy="caseStudies[2]" />

    </div>

  </section>

</template>


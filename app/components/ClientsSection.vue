<script setup>

const props = defineProps(['title', 'clients'])

</script>

<template>

  <section class="anim-wrapper bs-container bs-mt-lg grid">

    <!-- Title -->
    <h2 v-if="title" class="bs-h2 text-center" v-html="title" />

    <!-- Logos -->
    <div class="bs-mt-md grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-content-center gap-4">

      <a
        v-for="(item, idx) in clients"
        :key="idx"
        class="group py-10 px-5 rounded-xl flex place-content-center bg-bs-surface-2/70 hover:bg-bs-surface-2 transition-colors duration-300"
        :href="item.link"
      >

        <img
          :src="item.image"
          :alt="item.title"
          class="opacity-60 max-w-32 min-h-16 group-hover:scale-[1.05] group-hover:-translate-y-1 group-hover:opacity-100 group-hover:-rotate-1 ease-bs-bounce transition-all duration-1000"
          width="140"
          height="40"
          loading="lazy"
        />

      </a>

    </div>

  </section>

</template>


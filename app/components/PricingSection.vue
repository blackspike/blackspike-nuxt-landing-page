<script setup>

const props = defineProps(['title', 'pricing'])

</script>

<template>

  <section class="bs-container bs-mt-lg" id="pricing">

    <!-- Header -->
    <h2 v-if="title" class="bs-h2 text-center">{{ title }}</h2>

    <!-- pricing -->
    <div class="mt-8 grid lg:grid-cols-2 gap-8 lg:gap-0">

      <!-- Item -->
      <article v-for="(item, index) in pricing" :key="index" :class="[
        '@container p-6 xl:p-16 flex flex-col gap-6 h-full w-full rounded-xl overflow-hidden lg:scale-90 @xl:justify-end',
        index === 1 ? 'bg-white/90 text-black/90 lg:scale-none' : 'bg-bs-surface-0/90'
      ]">

        <!-- Content -->
        <div class="relative">

          <!-- Title -->
          <h2 class="bs-h3 flex gap-3 items-center">

            <!-- Icon -->
            <Icon
              v-if="index === 1"
              name="bs-icon:cube"
              size="32" />

            <Icon
              v-else
              name="bs-icon:cube-outline"
              size="32" />

            <!-- Title -->
            <span>{{ item.title }}</span>

            <!-- Tag -->
            <div v-if="item.tag"
              class="text-xs uppercase tracking-widest font-semibold hidden sm:block ms-auto rounded-full px-4 py-2 pb-[0.4rem] border border-bs-foreground-dark/30"
              v-html="item.tag" />

          </h2>

          <!-- Intro -->
          <div class="text-xl flex-grow mt-4" v-html="item.content" />

          <!-- Services list -->
          <ul role="list" class="flex flex-col gap-4 my-8">

            <li v-for="(service, sIdx) in item.services" :key="sIdx" class="flex gap-2 md:gap-3 items-center">

              <!-- Check -->
              <Icon name="bs-icon:check" size="24" />

              <!-- Item -->
              <span class="text-xl">{{ service.item }}</span>

            </li>

          </ul>

          <!-- CTA -->
          <footer class="flex justify-between items-center gap-2">

            <!-- Price -->
            <span class="text-4xl lg:text-5xl">

              £{{ item.price }}

              <span class="text-2xl hidden @md:inline-block -translate-y-1 ms-2"> / month</span>

            </span>

            <!-- CTA button -->
            <button type="button" class="bs-btn inline-block self-start @4xl:mt-12 text-xl"
              @click="useDialogOpen">

              {{ item.cta }}

            </button>

          </footer>

        </div>

      </article>

    </div>

  </section>

</template>
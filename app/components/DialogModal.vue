<script setup>

const props = defineProps(['demo'])

</script>

<template>

  <dialog id="demo" closedby="any" ref="modal_dialog"
    class="fixed inset-0 bg-bs-surface-0 m-auto z-50 p-6 md:p-12 rounded-xl w-full max-w-[95%] md:max-w-lg">

    <!-- Form -->
    <form method="dialog" class="flex gap-6 flex-col">

      <!-- Header -->
      <h2 class="text-2xl flex justify-between items-center gap-4">

        <span>{{ demo.title }}</span>

        <button type="button" onclick="this.closest('dialog').close('close')" aria-label="Close dialog"
          class="bs-btn rounded-full !p-0 flex items-center justify-center h-10 w-10">

          <Icon name="bs-icon:x" size="20" />

        </button>

      </h2>

      <!-- Content -->
      <div class="flex flex-col gap-4">

        <!-- Intro -->
        <div class="bs-body-text mb-3" v-html="demo.content" />

        <!-- Form inputs -->

        <!-- Name -->
        <label class="sr-only" for="name">Name</label>

        <input id="name" type="text"
          class="border-2 rounded-lg bg-bs-surface-0 border-bs-surface-3 form-input px-4 py-3"
          placeholder="Your name" />

        <!-- Company -->
        <label class="sr-only" for="company">Company</label>

        <input id="company" type="text"
          class="border-2 rounded-lg bg-bs-surface-0 border-bs-surface-3 form-input px-4 py-3"
          placeholder="Your company" />

        <!-- Email -->
        <label class="sr-only" for="email">Email</label>

        <input id="email" type="email"
          class="border-2 rounded-lg bg-bs-surface-0 border-bs-surface-3 form-input px-4 py-3"
          placeholder="Your email" />

        <!-- Submit -->
        <button class="bs-btn form-input px-4 py-3">{{ demo.cta }}</button>

      </div>

    </form>

  </dialog>

</template>

<style>

html:has(dialog[open]) {
  overflow: hidden;
  backdrop-filter: blur(0);
  scrollbar-gutter: stable;
}

dialog[open]::backdrop {
  backdrop-filter: blur(50px);
}

@keyframes scale-up {

  to {
    translate: 0 0;
    scale: 1;
  }

}

@media (prefers-reduced-motion: no-preference) {

  dialog {
    translate: 0 2rem;
    scale: .8
  }

  dialog[open] {
    animation: scale-up forwards 1s;
    animation-timing-function: var(--ease-bs-spring);
  }

}

</style>
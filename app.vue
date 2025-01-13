<template>
  <div class="flex flex-col h-screen justify-between">
    <navbar></navbar>
    <nuxt-page class="mb-auto"></nuxt-page>
    <page-hero title="" description="site work in progress..."></page-hero>
    <site-footer></site-footer>
  </div>
</template>

<script setup lang="ts">

  const nuxtApp = useNuxtApp()

  nuxtApp.hook("page:finish", () => {
     window.scrollTo(0, 0)
  })
</script>

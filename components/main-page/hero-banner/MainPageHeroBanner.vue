<script setup lang="ts">
defineProps<{ images: [string, string, string] }>()
</script>

<template>
  <div class="banner">
    <img
      :src="images[0]"
      alt="Image 1"
      class="banner__image banner__image_1"
    />
    <img
      :src="images[1]"
      alt="Image 2"
      class="banner__image banner__image_2"
    />
    <img
      :src="images[2]"
      alt="Image 3"
      class="banner__image banner__image_3"
    />
  </div>
</template>

<style scoped lang="scss">
@import 'main-page-hero-banner';
</style>

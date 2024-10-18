<script setup lang="ts">
defineProps<{
  image?: string
  text?: string
  imagePosition?: string
}>()
</script>

<template>
  <section
    class="hero"
    :style="{
      ...(image && { backgroundImage: `url(${image})` }),
      ...(imagePosition && { backgroundPosition: imagePosition })
    }"
  >
    <div class="container">
      <div class="hero__content">
        <p class="hero__title">{{ text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'common-hero';
</style>

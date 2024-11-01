<script setup lang="ts">
defineProps<{ text?: string }>()
</script>

<template>
  <section class="common-hero section">
    <div class="container">
      <div class="common-hero__content">
        <p class="common-hero__title">{{ text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'common-hero';
</style>

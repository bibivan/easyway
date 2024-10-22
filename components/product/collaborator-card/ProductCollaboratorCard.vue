<script setup lang="ts">
defineProps<{
  img: string
  name: string
}>()
</script>

<template>
  <div class="collaborator-card">
    <div class="collaborator-card__image-wrapper">
      <img
        :src="img"
        :alt="name"
        class="collaborator-card__img"
      />
    </div>
    <div class="collaborator-card__content-wrapper">
      <slot />
    </div>
    <p class="collaborator-card__name">{{ name }}</p>
  </div>
</template>

<style scoped lang="scss">
@import 'product-collaborator-card';
</style>

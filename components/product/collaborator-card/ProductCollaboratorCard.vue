<script setup lang="ts">
defineProps<{
  img: string
  name: string
}>()
</script>

<template>
  <div class="collaborator-card">
    <img
      :src="img"
      :alt="name"
      class="collaborator-card__img"
    />
    <div class="collaborator-card__inner-wrapper">
      <slot />
    </div>
    <p class="collaborator-card__name">{{ name }}</p>
  </div>
</template>

<style scoped lang="scss">
@import 'product-collaborator-card';
</style>

<script setup lang="ts">
defineProps<{ id: number }>()
</script>

<template>
  <div class="counter">
    <button class="counter__minus"><SvgMinus /></button>
    <div class="counter__count">10</div>
    <button class="counter__plus"><SvgPlus /></button>
  </div>
</template>

<style scoped lang="scss">
@import 'catalog-items-counter';
</style>

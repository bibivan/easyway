<script setup lang="ts">
defineProps<{ color?: string }>()
</script>

<template>
  <span
    class="spinner"
    :style="{ color: color }"
  />
</template>

<style lang="scss">
@import 'base-spinner';
</style>

<script setup lang="ts">
defineProps<{ color?: string }>()
</script>

<template>
  <div class="base-loading">
    <BaseSpinner
      class="base-loading__spinner"
      :color="color"
    />
  </div>
</template>

<style scoped lang="scss">
@import 'base-loading';
</style>

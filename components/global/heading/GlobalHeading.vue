<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  title: string
  to: RouteLocationRaw
}>()
</script>

<template>
  <div class="global-heading">
    <h2 class="global-heading__title">{{ title }}</h2>
    <NuxtLink
      class="global-heading__link"
      :to="to"
    >
      Смотреть все
      <SvgChevronRight />
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
@import 'global-heading';
</style>

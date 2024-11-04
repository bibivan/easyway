<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  title: string
  to: RouteLocationRaw
}>()
</script>

<template>
  <div class="common-heading">
    <h2 class="common-heading__title">{{ title }}</h2>
<!--    <NuxtLink-->
<!--      class="common-heading__link"-->
<!--      :to="to"-->
<!--    >-->
<!--      Смотреть все-->
<!--      <SvgChevronRight />-->
<!--    </NuxtLink>-->
  </div>
</template>

<style scoped lang="scss">
@import 'common-heading';
</style>

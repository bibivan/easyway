<script setup lang="ts">
import type { IBreadcrumbData } from '~/types'

defineProps<{ data: IBreadcrumbData[] }>()
</script>

<template>
  <div class="breadcrumbs">
    <NuxtLink
      v-for="(crumb, index) in data"
      :key="'breadcrumb-link-' + index"
      class="breadcrumbs__link"
      :class="{ 'breadcrumbs__link_without-slash': index === data.length - 1 }"
      :to="crumb.to"
    >
      {{ crumb.label }}
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
@import 'site-breadcrumbs';
</style>

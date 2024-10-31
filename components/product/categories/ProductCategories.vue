<script setup lang="ts">
import { ECategory, EGender, EProductFilters } from '~/types'

defineProps<{
  gender?: EGender
}>()
</script>

<template>
  <ul class="product-categories">
    <slot />
    <li
      v-for="(value, key) in ECategory"
      :key="key"
      class="product-categories__item"
    >
      <NuxtLink
        class="product-categories__link"
        :to="{
          name: 'catalog',
          query: {
            ...(gender && { [EProductFilters.GENDER]: gender }),
            [EProductFilters.CATEGORY]: value
          }
        }"
        >{{ value }}</NuxtLink
      >
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import 'product-categories';
</style>

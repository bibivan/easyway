<script setup lang="ts">
import { EGender, EProductFilters } from '~/types'

defineProps<{ gender?: EGender }>()

const { categories } = useProductFiltersStore()
</script>

<template>
  <ul class="product-categories">
    <slot />
    <li
      v-for="(value, key) in categories"
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

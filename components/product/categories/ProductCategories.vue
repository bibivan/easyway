<script setup lang="ts">
import { EGender, EProductFilters, type TNullable } from '~/types'

const props = defineProps<{ gender?: EGender; data: TNullable<string[]> }>()
</script>

<template>
  <ul
    v-if="data"
    class="product-categories"
  >
    <slot />
    <li
      v-for="(value, key) in data"
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

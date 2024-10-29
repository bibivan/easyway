<script setup lang="ts">
import { EGender, EProductFilters } from '~/types'

defineProps<{
  gender?: EGender
}>()
</script>

<template>
  <ul class="product-categories">
    <slot />
    <li class="product-categories__item">
      <NuxtLink
        class="product-categories__link"
        :to="{
          name: 'catalog',
          query: {
            ...(gender ? { [EProductFilters.GENDER]: gender } : {}),
            CATEGORY: 'top'
          }
        }"
        >Топы</NuxtLink
      >
    </li>
    <li class="product-categories__item">
      <NuxtLink
        class="product-categories__link"
        :to="{
          name: 'catalog',
          query: {
            ...(gender ? { [EProductFilters.GENDER]: gender } : {}),
            CATEGORY: 't-shirt'
          }
        }"
        >Футболки</NuxtLink
      >
    </li>
    <li class="product-categories__item">
      <NuxtLink
        class="product-categories__link"
        :to="{
          name: 'catalog',
          query: {
            ...(gender ? { [EProductFilters.GENDER]: gender } : {}),
            CATEGORY: 'long-sleeve'
          }
        }"
        >Лонгсливы</NuxtLink
      >
    </li>
    <li class="product-categories__item">
      <NuxtLink
        class="product-categories__link"
        :to="{
          name: 'catalog',
          query: {
            ...(gender ? { [EProductFilters.GENDER]: gender } : {}),
            CATEGORY: 'shorts'
          }
        }"
        >Шорты</NuxtLink
      >
    </li>
    <li class="product-categories__item">
      <NuxtLink
        class="product-categories__link"
        :to="{
          name: 'catalog',
          query: {
            ...(gender ? { [EProductFilters.GENDER]: gender } : {}),
            CATEGORY: 'leggings'
          }
        }"
        >Легинсы</NuxtLink
      >
    </li>
    <li class="product-categories__item">
      <NuxtLink
        class="product-categories__link"
        :to="{
          name: 'catalog',
          query: {
            ...(gender ? { [EProductFilters.GENDER]: gender } : {}),
            CATEGORY: 'pants'
          }
        }"
        >Брюки</NuxtLink
      >
    </li>
    <li class="product-categories__item">
      <NuxtLink
        class="product-categories__link"
        :to="{
          name: 'catalog',
          query: {
            ...(gender ? { [EProductFilters.GENDER]: gender } : {}),
            CATEGORY: 'accessories'
          }
        }"
        >Аксессуары</NuxtLink
      >
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import 'product-categories';
</style>

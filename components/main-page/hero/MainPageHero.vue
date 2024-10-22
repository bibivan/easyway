<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
defineProps<{
  images: [string, string]
  note: string
  title: string
  to: RouteLocationRaw
}>()
</script>

<template>
  <section class="hero section">
    <div class="hero__wrapper">
      <div class="hero__banner">
        <div class="hero__image hero__image_1">
          <p class="hero__note">{{ note }}</p>
        </div>
        <img
          :src="images[0]"
          alt="Image 1"
          class="hero__image hero__image_2"
        />
        <img
          :src="images[1]"
          alt="Image 2"
          class="hero__image hero__image_3"
        />
      </div>
    </div>
    <div class="hero__container container">
      <div class="hero__content">
        <p class="hero__heading">{{ title }}</p>

        <NuxtLink
          class="btn hero__btn"
          :to="to"
        >
          Купить
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'main-page-hero';
</style>

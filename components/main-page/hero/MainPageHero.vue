<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
defineProps<{
  images: [string, string]
  note?: string
  imagesTop?: boolean
  title: string
  to: RouteLocationRaw
}>()
</script>

<template>
  <section class="hero section">
    <div class="hero__wrapper">
      <NuxtLink
        class="hero__banner"
        :to="to"
      >
        <span class="hero__image hero__image_1">
          <span
            v-if="note"
            class="hero__note"
          >
            {{ note }}
          </span>
        </span>
        <img
          :src="images[0]"
          alt="Image 1"
          class="hero__image hero__image_2"
          :class="{ hero__image_position_top: imagesTop }"
        />
        <img
          :src="images[1]"
          alt="Image 2"
          class="hero__image hero__image_3"
          :class="{ hero__image_position_top: imagesTop }"
        />
      </NuxtLink>
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

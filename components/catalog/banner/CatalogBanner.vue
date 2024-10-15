<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  btnContent: string
  description: string
  image: string
  overlayText?: string
  rotated?: boolean
  title: string
  to: RouteLocationRaw
}>()
</script>

<template>
  <section class="section">
    <div class="catalog-banner">
      <div class="container">
        <div class="catalog-banner__content">
          <img
            class="catalog-banner__img"
            :class="{
              'catalog-banner__img_rotated': rotated
            }"
            :src="image"
            :alt="title"
          />
          <p
            v-if="overlayText"
            class="catalog-banner__overlay-text"
          >
            {{ overlayText }}
          </p>
          <div class="catalog-banner__text">
            <h2 class="catalog-banner__heading">{{ title }}</h2>
            <p class="catalog-banner__description">{{ description }}</p>
            <NuxtLink
              class="btn btn_light catalog-banner__link"
              :to="to"
            >
              {{ btnContent }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'catalog-banner';
</style>

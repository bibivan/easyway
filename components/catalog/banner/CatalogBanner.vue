<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  btnContent: string
  description: string
  withOverlayText?: boolean
  title: string
  to: RouteLocationRaw
}>()
</script>

<template>
  <section class="section">
    <div class="catalog-banner">
      <div class="container">
        <div
          class="catalog-banner__content"
          :class="{
            'catalog-banner__content_with-overlay': withOverlayText
          }"
        >
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

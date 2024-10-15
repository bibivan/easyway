<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  title: string
  description: string
  btnContent: string
  to: RouteLocationRaw
}>()
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="message">
        <slot />
        <h2 class="message__headline">
          {{ title }}
        </h2>
        <p class="message__description">
          {{ description }}
        </p>
        <NuxtLink
          class="btn"
          :to="to"
        >
          {{ btnContent }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'global-message-frame';
</style>

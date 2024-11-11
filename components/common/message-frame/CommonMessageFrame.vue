<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  title: string
  description?: string
  btnContent?: string
  to?: RouteLocationRaw
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
        <p
          v-if="description"
          class="message__description"
        >
          {{ description }}
        </p>
        <NuxtLink
          v-if="to && btnContent"
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
@import 'common-message-frame';
</style>

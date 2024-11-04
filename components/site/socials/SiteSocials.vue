<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  logoRoute?: RouteLocationRaw
  tgRoute: RouteLocationRaw
  vkRoute: RouteLocationRaw
}>()
</script>
<template>
  <div class="socials">
    <NuxtLink
      v-if="logoRoute"
      class="socials__brand-logo"
      :to="logoRoute"
    >
      <slot />
    </NuxtLink>
    <div class="socials__list">
      <NuxtLink
        class="socials__link"
        target="_blank"
        external
        :to="vkRoute"
      >
        <SvgVk />
      </NuxtLink>
      <NuxtLink
        class="socials__link"
        target="_blank"
        external
        :to="tgRoute"
      >
        <SvgTelegram />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'site-socials';
</style>

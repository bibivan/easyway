<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import type { TNullable } from '~/types'
import type { NuxtError } from '#app'

defineEmits<{
  onRefresh: [void]
}>()

defineProps<{
  error: TNullable<NuxtError | Error>
  btnContent?: boolean
  description?: string
  linkContent?: string
  loading?: boolean
  title?: string
  to?: RouteLocationRaw
  withRefresh?: boolean
}>()
</script>

<template>
  <div
    v-if="error"
    class="error-view"
  >
    <SvgRoundedCross class="error-view__icon" />
    <h2 class="error-view__headline">
      {{ title || error.message }}
    </h2>
    <p
      v-if="description"
      class="error-view__description"
    >
      {{ description }}
    </p>
    <NuxtLink
      v-if="to && linkContent"
      class="btn"
      :to="to"
    >
      {{ linkContent }}
    </NuxtLink>
    <button
      v-if="withRefresh"
      class="btn"
      @click="$emit('onRefresh')"
    >
      <BaseSpinner v-if="loading" />
      <template v-else> {{ btnContent || 'Повторить' }} </template>
    </button>
  </div>
</template>

<style scoped lang="scss">
@import 'common-error-view';
</style>

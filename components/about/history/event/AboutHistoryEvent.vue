<script setup lang="ts">
import type { IHistoryEvent } from '~/types/about'

defineProps<{
  eventData: IHistoryEvent
  isFirstItem: boolean
  isLastItem: boolean
}>()

const { isDesktop } = useDeviceTypeStore()
</script>

<template>
  <div class="event">
    <div
      class="event__vector-wrapper vector"
      :class="{
        vector_first: isFirstItem,
        vector_last: isLastItem
      }"
    >
      <span
        v-if="isFirstItem"
        class="vector__group"
      >
        <SvgCircle class="vector__circle" />
        <SvgCircleFilled class="vector__circle" />
      </span>
      <SvgCircleFilled
        v-else
        class="vector__circle"
      />

      <span
        v-if="isLastItem"
        class="vector__group"
      >
        <SvgCircleFilled class="vector__circle" />
        <SvgCircle
          v-if="!isDesktop"
          class="vector__circle"
        />
      </span>
    </div>
    <div class="event__text">
      <p class="event__date">{{ eventData.date }}</p>
      <p class="event__description">{{ eventData.description }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'about-history-event';
</style>

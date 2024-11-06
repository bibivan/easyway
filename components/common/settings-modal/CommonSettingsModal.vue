<script setup lang="ts">
defineProps<{ settingsName: string }>()

const isOpened = defineModel<boolean>()
</script>

<template>
  <div
    v-if="isOpened"
    class="settings-modal"
  >
    <div class="settings-modal__head">
      <span class="settings-modal__name">{{ settingsName }}</span>
      <button
        class="settings-modal__close-btn"
        @click="isOpened = false"
      >
        <SvgChevronUp />
      </button>
    </div>
    <div class="settings-modal__body">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'common-settings-modal';
</style>

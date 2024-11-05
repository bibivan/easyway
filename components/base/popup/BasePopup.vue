<script setup lang="ts">
defineProps<{ label: string }>()

const isOpen = ref(false)

const togglePopup = () => (isOpen.value = !isOpen.value)
const closePopup = () => (isOpen.value = false)
</script>

<template>
  <div class="base-popup">
    <div
      v-show="isOpen"
      class="base-popup__overlay"
      @click="closePopup"
    />

    <div
      class="base-popup__label"
      :class="{ 'base-popup__label_active': isOpen }"
      @click="togglePopup"
    >
      {{ label }}
      <SvgChevronDown class="base-popup__icon" />
    </div>
    <div
      v-show="isOpen"
      class="base-popup__content"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'base_popup';
</style>

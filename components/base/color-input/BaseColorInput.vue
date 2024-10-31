<script setup lang="ts" generic="T extends string | string[]">
import { formatHexColor } from '~/utils/products'

defineProps<{
  value: string
  id: string
  type: 'checkbox' | 'radio'
}>()

defineEmits<{
  input: [Event]
  change: [Event]
}>()

const modelValue = defineModel<T>()
</script>

<template>
  <div class="color-input">
    <input
      :id="id"
      v-model="modelValue"
      class="color-input__input"
      :value="value"
      :type="type"
      @input="$emit('input', $event)"
      @change="$emit('change', $event)"
    />
    <label
      class="color-input__label"
      :class="{ 'color-input__label_color_white': isWhiteColor(value) }"
      :style="{ color: formatHexColor(value) }"
      :for="id"
    />
  </div>
</template>

<style scoped lang="scss">
@import 'base-color-input';
</style>

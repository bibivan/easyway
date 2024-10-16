<script setup lang="ts" generic="T, K">
import type { TNullable } from '~/types'

defineProps<{
  value: string | number | boolean | K
  id: string
  checked?: boolean
  label?: string
}>()

defineEmits<{
  input: [Event]
  change: [Event]
}>()

const modelValue = defineModel<TNullable<T>>()
</script>

<template>
  <div class="base-radio">
    <input
      :id="id"
      v-model="modelValue"
      class="base-radio__input"
      :value="value"
      type="radio"
      :checked="checked"
      @input="$emit('input', $event)"
      @change="$emit('change', $event)"
    />
    <label
      class="base-radio__label"
      :for="id"
    >
      {{ label ? label : value }}
    </label>
  </div>
</template>

<style scoped lang="scss">
@import 'base-radio';
</style>

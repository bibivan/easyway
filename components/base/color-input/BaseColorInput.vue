<script setup lang="ts" generic="T, K">
defineProps<{
  value: string | number | boolean | K
  id: string
  theme?: string
  type: 'checkbox' | 'radio'
}>()

defineEmits<{
  input: [Event]
  change: [Event]
}>()

const modelValue = defineModel<T>()
</script>

<template>
  <div :class="'color-input color-input_' + theme">
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
      :for="id"
    />
  </div>
</template>

<style scoped lang="scss">
@import 'base-color-input';
</style>

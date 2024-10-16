<script setup lang="ts" generic="T, K">
defineProps<{
  value: string | number | boolean | K
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
  <div class="size-input">
    <input
      :id="id"
      v-model="modelValue"
      class="size-input__input"
      :value="value"
      :type="type"
      @input="$emit('input', $event)"
      @change="$emit('change', $event)"
    />
    <label
      class="size-input__label"
      :for="id"
    >
      {{ value }}
    </label>
  </div>
</template>

<style scoped lang="scss">
@import 'base-size-input';
</style>

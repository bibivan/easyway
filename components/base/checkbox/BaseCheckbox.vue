<script setup lang="ts" generic="T, K">
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators'
import { EErrorPosition } from '~/types'

const props = defineProps<{
  checked?: boolean
  errorPosition?: EErrorPosition
  id: string
  label?: string
  noErrorMessage?: boolean
  requiredVal?: boolean
  theme?: string
  value?: string | number | boolean | K
}>()

defineEmits<{
  input: [Event]
  change: [Event]
}>()

const slots = useSlots()
const modelValue = defineModel<T>()

const validationRules = computed(() => ({
  modelValue: {
    required: props.requiredVal
      ? helpers.withMessage('Обязательный параметр', (value) => value === true)
      : () => true
  }
}))
const v$ = useVuelidate(validationRules, { modelValue })
const { hasError, errorMessage } = useValidationInfo(v$)
</script>

<template>
  <div
    :class="[
      'base-checkbox',
      {
        ['base-checkbox_' + theme]: theme
      }
    ]"
  >
    <input
      :id="id"
      v-model="modelValue"
      class="base-checkbox__input"
      :value="value"
      type="checkbox"
      :checked="checked"
      @input="$emit('input', $event)"
      @change="$emit('change', $event)"
    />
    <label
      class="base-checkbox__label"
      :for="id"
    >
      {{ !label && !slots.label ? value : label }}

      <slot name="label" />
    </label>
    <BaseErrorMessage
      v-if="hasError && !noErrorMessage"
      class="input-block__error"
      :message="errorMessage"
      :error-position="errorPosition"
    />
    <slot name="error" />
  </div>
</template>

<style scoped lang="scss">
@import 'base-checkbox';
</style>

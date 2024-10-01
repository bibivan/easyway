<script setup lang="ts" generic="T extends number | string">
import { useVuelidate, type Validation } from '@vuelidate/core'
import { email, helpers, required } from '@vuelidate/validators'
import type { Ref } from 'vue'
import type { IInputValidationState, TErrorPosition, TNullable } from '~/types'

let v$: Ref<Validation>
let inputValidation: IInputValidationState
const props = defineProps<{
  id: string
  disabled?: boolean
  type: 'text' | 'number'
  placeholder?: string
  requiredVal?: boolean
  errorInstance?: Validation
  errorPosition?: TErrorPosition
  theme?: string
  isEmail?: boolean
}>()

const emit = defineEmits<{
  input: [Event]
  change: [Event]
  blur: [Event]
}>()

const modelValue = defineModel<TNullable<T>>()

if (props.errorInstance) {
  inputValidation = useInputValidation(props.errorInstance, emit)
} else {
  const validationRules = computed(() => ({
    modelValue: {
      required: props.requiredVal ? helpers.withMessage('Обязательное поле', required) : () => true,
      email: props.isEmail ? helpers.withMessage('Неправильный Email', email) : () => true
    }
  }))
  v$ = useVuelidate(validationRules, { modelValue })
  inputValidation = useInputValidation(v$.value, emit)
}
const { isValid, hasError, isFocused, errorMessage, handleBlur } = inputValidation
</script>

<template>
  <div
    :class="[
      'base-input input-block',
      {
        ['input-block_' + theme]: theme,
        'input-block_valid': isValid,
        'input-block_invalid': hasError
      }
    ]"
  >
    <SvgCheckmark class="input-block__checkmark" />
    <input
      :id="id"
      v-model="modelValue"
      class="input-block__input"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="$emit('input', $event)"
      @change="$emit('change', $event)"
      @blur="handleBlur"
      @focus="isFocused = true"
    />
    <label
      :for="id"
      :class="[
        'input-block__error',
        'input-block__error_position_' + errorPosition ? errorPosition : 'absolute'
      ]"
    >
      {{ errorMessage }}
    </label>
  </div>
</template>

<style scoped lang="scss">
@import 'base-input';
</style>

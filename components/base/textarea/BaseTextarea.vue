<script setup lang="ts">
import { useVuelidate, type Validation } from '@vuelidate/core'
import { helpers, required } from '@vuelidate/validators'
import type { TErrorPosition, TNullable } from '~/types'

const props = defineProps<{
  id: string
  disabled?: boolean
  errorPosition?: TErrorPosition
  theme?: string
  placeholder?: string
  requiredVal?: boolean
  errorInstance?: Validation
}>()

const emit = defineEmits<{
  input: [Event]
  change: [Event]
  blur: [Event]
}>()

const modelValue = defineModel<TNullable<string | number>>()

const validationRules = computed(() => ({
  modelValue: {
    required: props.requiredVal ? helpers.withMessage('Обязательное поле', required) : () => true
  }
}))
const v$ = useVuelidate(validationRules, { modelValue })

const { isValid, hasError, isFocused, errorMessage, handleBlur } = useInputValidation(
  v$.value,
  emit
)
</script>

<template>
  <div
    :class="[
      'base-textarea input-block',
      {
        ['input-block_' + theme]: theme,
        'input-block_valid': isValid && !!modelValue,
        'input-block_invalid': hasError
      }
    ]"
  >
    <SvgCheckmark class="input-block__checkmark" />
    <textarea
      :id="id"
      v-model="modelValue"
      class="input-block__input base-textarea__input"
      :disabled="disabled"
      :placeholder="placeholder ? placeholder : 'Комментарий'"
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
@import 'base-textarea';
</style>

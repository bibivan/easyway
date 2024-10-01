<script setup lang="ts">
import Inputmask from 'inputmask'
import { useVuelidate, type Validation } from '@vuelidate/core'
import { minLength, helpers, required } from '@vuelidate/validators'
import type { TErrorPosition, TNullable } from '~/types'

const props = defineProps<{
  id: string
  disabled?: boolean
  theme?: string
  placeholder?: string
  requiredVal?: boolean
  errorInstance?: Validation
  errorPosition?: TErrorPosition
}>()

const emit = defineEmits<{
  input: [Event]
  change: [Event]
  blur: [Event]
}>()

const phoneLength = 10
const phoneInputRef = ref()

const modelValue = defineModel<TNullable<string>>({
  set: () => phoneInputRef.value.inputmask.unmaskedvalue()
})

const validationRules = computed(() => ({
  modelValue: {
    required: props.requiredVal ? helpers.withMessage('Обязательное поле', required) : () => true,
    minLength: helpers.withMessage('Номер слишком короткий', minLength(phoneLength))
  }
}))
const v$ = useVuelidate(validationRules, { modelValue })
const { isValid, hasError, isFocused, errorMessage, handleBlur } = useInputValidation(
  v$.value,
  emit
)

onMounted(() => {
  Inputmask({
    mask: '(+7|8) (999) 999-99-99',
    showMaskOnHover: false
  }).mask(phoneInputRef.value)
})
</script>

<template>
  <div
    :class="[
      'base-phone-input',
      'input-block',
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
      ref="phoneInputRef"
      v-model="modelValue"
      class="input-block__input"
      type="text"
      :disabled="disabled"
      :placeholder="placeholder ? placeholder : 'Телефон'"
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

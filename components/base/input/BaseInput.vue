<script setup lang="ts" generic="T extends number | string">
import { useVuelidate } from '@vuelidate/core'
import { email, helpers, requiredIf } from '@vuelidate/validators'
import { EErrorPosition, type TNullable } from '~/types'

const props = defineProps<{
  disabled?: boolean
  errorPosition?: EErrorPosition
  id: string
  isEmail?: boolean
  noErrorMessage?: boolean
  placeholder?: string
  requiredVal?: boolean
  type: 'text' | 'number'
}>()

const emit = defineEmits<{
  input: [Event]
  change: [Event]
  blur: [Event]
  focus: [Event]
}>()

const modelValue = defineModel<TNullable<T>>()

const validationRules = computed(() => ({
  modelValue: {
    required: helpers.withMessage('Обязательное поле', requiredIf(props.requiredVal)),
    email: props.isEmail ? helpers.withMessage('Неправильный Email', email) : () => true
  }
}))

const v$ = useVuelidate(validationRules, { modelValue })
const { isValid, hasError, errorMessage, handleBlur, handleFocus } = useValidationInfo(v$, emit)
</script>

<template>
  <div
    :class="[
      'base-input input-block',
      {
        'input-block_valid': isValid && !!modelValue && !noErrorMessage,
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
      @input="emit('input', $event)"
      @change="emit('change', $event)"
      @blur="handleBlur"
      @focus="handleFocus"
    />
    <BaseErrorMessage
      v-if="hasError && !noErrorMessage"
      class="input-block__error"
      :message="errorMessage"
      :error-position="errorPosition"
    />
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import 'base-input';
</style>

<script setup lang="ts" generic="T extends number | string">
import { useVuelidate, type Validation } from '@vuelidate/core'
import { email, helpers, required } from '@vuelidate/validators'
import { EErrorPosition, type TNullable } from '~/types'
import type { Ref } from 'vue'

const props = defineProps<{
  disabled?: boolean
  errorPosition?: EErrorPosition
  id: string
  isEmail?: boolean
  noErrorMessage?: boolean
  placeholder?: string
  requiredVal?: boolean
  theme?: string
  type: 'text' | 'number'
}>()

const modelValue = defineModel<TNullable<T>>()

const validationRules = computed(() => ({
  modelValue: {
    required: props.requiredVal ? helpers.withMessage('Обязательное поле', required) : () => true,
    email: props.isEmail ? helpers.withMessage('Неправильный Email', email) : () => true
  }
}))
const v$: Ref<Validation> = useVuelidate(validationRules, { modelValue })
const { isValid, hasError, errorMessage } = useInputValidation(v$)
</script>

<template>
  <div
    :class="[
      'base-input input-block',
      {
        ['input-block_' + theme]: theme,
        'input-block_valid': isValid && !!modelValue,
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
      @blur="v$.$touch()"
      @focus="v$.$reset()"
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

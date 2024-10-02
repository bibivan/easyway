<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { helpers, required } from '@vuelidate/validators'
import { EErrorPosition, type TNullable } from '~/types'

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    errorPosition?: EErrorPosition
    id: string
    noErrorMessage?: boolean
    placeholder?: string
    requiredVal?: boolean
    theme?: string
  }>(),
  {
    placeholder: 'Комментарий'
  }
)

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

const { isValid, hasError, isFocused, errorMessage, handleBlur } = useInputValidation(v$, emit)
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
      :placeholder="placeholder ? placeholder : ''"
      @input="$emit('input', $event)"
      @change="$emit('change', $event)"
      @blur="handleBlur"
      @focus="isFocused = true"
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
@import 'base-textarea';
</style>

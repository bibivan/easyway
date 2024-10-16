<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { helpers, requiredIf } from '@vuelidate/validators'
import { EErrorPosition, type TNullable } from '~/types'

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    errorPosition?: EErrorPosition
    id: string
    noErrorMessage?: boolean
    placeholder?: string
    requiredVal?: boolean
  }>(),
  {
    placeholder: 'Комментарий'
  }
)

const emit = defineEmits<{
  input: [Event]
  change: [Event]
  blur: [Event]
  focus: [Event]
}>()

const modelValue = defineModel<TNullable<string | number>>()

const validationRules = computed(() => ({
  modelValue: helpers.withMessage('Обязательное поле', requiredIf(props.requiredVal))
}))

const v$ = useVuelidate(validationRules, { modelValue })
const { isValid, hasError, errorMessage, handleBlur, handleFocus } = useValidationInfo(v$, emit)
</script>

<template>
  <div
    :class="[
      'base-textarea input-block',
      {
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
@import 'base-textarea';
</style>

<script setup lang="ts" generic="T extends number | string">
import { useVuelidate, type Validation } from '@vuelidate/core'
import { email, helpers, required } from '@vuelidate/validators'
import type { Ref } from 'vue'
import type { TErrorPosition, TNullable } from '~/types'

let v$: Ref<Validation>
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
const isFocused = ref<boolean>(false)

const handleBlur = (event: Event) => {
  emit('blur', event)
  isFocused.value = false
  if (v$) v$.value.$touch()
}

const isParentInvalid = computed(() => !!props.errorInstance?.$errors?.length && !isFocused.value)
const isLocalInvalid = computed(() => !!v$?.value.$errors?.length && !isFocused.value)
const isValid = computed(() => {
  return props.errorInstance
    ? !props.errorInstance?.$silentErrors?.length
    : !v$?.value.$silentErrors?.length && !!modelValue.value
})

if (!props.errorInstance) {
  const validationRules = computed(() => ({
    modelValue: {
      required: props.requiredVal ? helpers.withMessage('Обязательное поле', required) : () => true,
      email: props.isEmail ? helpers.withMessage('Неправильный Email', email) : () => true
    }
  }))
  v$ = useVuelidate(validationRules, { modelValue })
}
</script>

<template>
  <div
    :class="[
      'input-block',
      {
        ['input-block_' + theme]: theme,
        'input-block_valid': isValid,
        'input-block_invalid': isParentInvalid || isLocalInvalid
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
      <template v-if="isParentInvalid">{{ errorInstance?.$errors[0]?.$message }}</template>
      <template v-if="isLocalInvalid">{{ v$.$errors[0]?.$message }}</template>
    </label>
  </div>
</template>

<style scoped lang="scss">
@import 'base-input';
</style>

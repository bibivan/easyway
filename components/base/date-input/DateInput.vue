<script setup lang="ts" generic="T extends number | string">
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { useVuelidate } from '@vuelidate/core'
import { helpers, requiredIf } from '@vuelidate/validators'
import { EErrorPosition, type TNullable, type TRawDateString } from '~/types'
import Inputmask from 'inputmask'

dayjs.extend(customParseFormat)

const props = defineProps<{
  disabled?: boolean
  errorPosition?: EErrorPosition
  id: string
  maxAge?: number
  minAge?: number
  noErrorMessage?: boolean
  placeholder?: string
  requiredVal?: boolean
}>()

const emit = defineEmits<{
  input: [Event]
  keyup: [Event]
  change: [Event]
  blur: [Event]
  focus: [Event]
}>()

const dateInputRef = ref()
const modelValue = defineModel<TNullable<TRawDateString>>()

const getAge = (value: string) => {
  const birthDate = dayjs(value, 'DD.MM.YYYY')
  return dayjs().diff(birthDate, 'year')
}
const validationRules = computed(() => ({
  modelValue: {
    required: helpers.withMessage('Обязательное поле', requiredIf(props.requiredVal)),
    minAge: helpers.withMessage('Возраст должен быть не менее 18 лет', (value: string) => {
      return props.minAge ? getAge(value) >= props.minAge : true
    }),
    maxAge: helpers.withMessage('Возраст должен быть не более 100 лет', (value: string) => {
      return props.maxAge ? getAge(value) <= props.maxAge : true
    })
  }
}))

const v$ = useVuelidate(validationRules, { modelValue })
const { isValid, hasError, errorMessage, handleBlur, handleFocus } = useValidationInfo(v$, emit)

onMounted(() => {
  Inputmask('datetime', {
    inputFormat: 'dd.mm.yyyy',
    placeholder: ' ',
    showMaskOnHover: false
  }).mask(dateInputRef.value)
})
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
      ref="dateInputRef"
      v-model="modelValue"
      class="input-block__input"
      :disabled="disabled"
      :placeholder="placeholder"
      type="text"
      @input="emit('input', $event)"
      @change="emit('change', $event)"
      @keyup="emit('keyup', $event)"
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
@import 'date-input';
</style>

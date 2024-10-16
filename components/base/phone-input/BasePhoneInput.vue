<script setup lang="ts">
import Inputmask from 'inputmask'
import { useVuelidate, type Validation } from '@vuelidate/core'
import { minLength, helpers, required, requiredIf } from '@vuelidate/validators'
import { EErrorPosition, type TNullable } from '~/types'

const props = withDefaults(
  defineProps<{
    id: string
    disabled?: boolean
    errorPosition?: EErrorPosition
    placeholder?: string
    requiredVal?: boolean
  }>(),
  {
    placeholder: 'Телефон'
  }
)

const phoneLength = 10
const phoneInputRef = ref()

const modelValue = defineModel<TNullable<string>>({
  set: () => phoneInputRef.value.inputmask.unmaskedvalue()
})

const validationRules = computed(() => ({
  modelValue: {
    required: helpers.withMessage('Обязательное поле', requiredIf(props.requiredVal)),
    minLength: helpers.withMessage('Номер слишком короткий', minLength(phoneLength))
  }
}))
const v$ = useVuelidate(validationRules, { modelValue })
const { isValid, hasError, errorMessage } = useValidationInfo(v$)

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
      :placeholder="placeholder"
      @blur="v$.$touch()"
      @focus="v$.$reset()"
    />
    <BaseErrorMessage
      v-if="hasError"
      class="input-block__error"
      :message="errorMessage"
      :error-position="errorPosition"
    />
  </div>
</template>

import type { Validation, BaseValidation } from '@vuelidate/core'
import type { Ref } from 'vue'
import type { IInputEmitEvents } from '~/types'

export const useValidationInfo = (
  v$: Ref<Validation> | Ref<BaseValidation>,
  emit?: <K extends keyof IInputEmitEvents>(event: K, ...payload: IInputEmitEvents[K]) => void
) => {
  const hasError = computed(() => v$.value?.$error)
  const isValid = computed(() => !v$.value?.$invalid)
  const errorMessage = computed(() => v$.value?.$errors[0]?.$message)

  const handleChange = (event: Event) => {
    if (emit) emit('change', event)
    v$.value.$touch()
  }

  const handleBlur = (event: Event) => {
    if (emit) emit('blur', event)
    v$.value.$touch()
  }

  const handleFocus = (event: Event) => {
    if (emit) emit('focus', event)
    v$.value.$reset()
  }

  return {
    hasError,
    isValid,
    errorMessage,
    handleBlur,
    handleFocus,
    handleChange
  }
}

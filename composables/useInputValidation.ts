import type { Validation } from '@vuelidate/core'
import type { IInputEmitEvents, IInputValidationState } from '~/types'

export const useInputValidation = (
  errorInstance: Validation,
  emit?: <K extends keyof IInputEmitEvents>(event: K, ...payload: IInputEmitEvents[K]) => void
): IInputValidationState => {
  const isFocused = ref<boolean>(false)
  const hasError = computed(() => !!errorInstance?.$errors?.length && !isFocused.value)
  const isValid = computed(() => !errorInstance?.$silentErrors?.length)
  const errorMessage = computed(() => errorInstance?.$errors[0]?.$message)

  const handleBlur = (event: Event) => {
    if (emit) emit('blur', event)
    isFocused.value = false
    errorInstance.$touch()
  }

  return {
    isFocused,
    hasError,
    isValid,
    errorMessage,
    handleBlur
  }
}

// export const useInputValidationState = <T>(
//   errorInstance: Validation,
//   isFocused: Ref<boolean>,
//   value?: Ref<T>
// ) => {
//   const hasError = computed(() => !!errorInstance?.$errors?.length && !isFocused.value)
//   const isValid = computed(() => {
//     return value?.value
//       ? !errorInstance.$silentErrors?.length
//       : !errorInstance.$silentErrors?.length && !!value?.value
//   })
//   const errorMessage = computed(() => errorInstance?.$errors[0]?.$message)
//
//   return {
//     hasError,
//     isValid,
//     errorMessage
//   }
// }

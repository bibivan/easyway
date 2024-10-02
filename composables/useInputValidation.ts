import type { Validation } from '@vuelidate/core'
import type { Ref } from 'vue'

export const useInputValidation = (v$: Ref<Validation>) => {
  const hasError = computed(() => v$.value?.$error)
  const isValid = computed(() => !v$.value?.$invalid)
  const errorMessage = computed(() => v$.value?.$errors[0]?.$message)

  return {
    hasError,
    isValid,
    errorMessage
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

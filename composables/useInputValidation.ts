import type { Validation } from '@vuelidate/core'
import type { IInputEmitEvents } from '~/types'
import type { Ref } from 'vue'

export const useInputValidation = (
  v$: Ref<Validation>,
  emit?: <K extends keyof IInputEmitEvents>(event: K, ...payload: IInputEmitEvents[K]) => void
) => {
  const isFocused = ref<boolean>(false)
  const hasError = computed(() => !!v$.value?.$error && !isFocused.value)
  const isValid = computed(() => !v$.value?.$invalid)
  const errorMessage = computed(() => v$.value?.$errors[0]?.$message)

  const handleBlur = (event: Event) => {
    if (emit) emit('blur', event)
    isFocused.value = false
    v$.value.$touch()
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

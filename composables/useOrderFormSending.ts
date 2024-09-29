import { useVuelidate } from '@vuelidate/core'

export const useOrderFormSending = () => {
  const v$ = useVuelidate()

  const handleSendData = async () => {
    const result = await v$.value.$validate()
    console.log(result)
  }

  return {
    handleSendData
  }
}

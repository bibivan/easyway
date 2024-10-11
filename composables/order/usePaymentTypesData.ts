import type { IPaymentType } from '~/types'

export const usePaymentTypesData = (): IPaymentType[] => {
  return [
    // {
    //   name: 'При получении',
    //   id: 1
    // },
    {
      name: 'Картой',
      id: 2
    }
  ]
}

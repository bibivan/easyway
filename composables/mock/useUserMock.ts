import { ESize, type IUserData } from '~/types'
import { Ref } from 'vue'

export const useUserMock = () => {
  const userMock: Ref<IUserData> = ref({
    name: 'Сергей',
    surname: 'Сергиенко',
    phone: '+79153550672',
    email: 'sergienko@example.com',
    birthDate: '01/01/1990',
    emailMarketing: true,
    size: ESize.M
  })

  return { userMock }
}

import { ESize, type IUserData } from '~/types'

export const useUserMock = () => {
  const userMock: IUserData = {
    name: 'Сергей',
    surname: 'Сергиенко',
    phone: '+79153550672',
    email: 'sergienko@example.com',
    birthDate: '01.01.1990',
    emailMarketing: true,
    size: ESize.M,
    token: '123123123'
  }

  return useMockFetch('userMock', userMock)
}

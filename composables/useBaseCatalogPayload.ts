import { EBrand, EGender, type IGetCatalogPayload } from '~/types'

export const useBaseCatalogPayload = () => {
  const { params, meta } = useRoute()
  const payload: IGetCatalogPayload = {
    brand: meta.brand ? (meta.brand as string) : EBrand.EASYFIT
  }

  if (params.gender) payload.gender = params.gender as EGender

  return payload
}

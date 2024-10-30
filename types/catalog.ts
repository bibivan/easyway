export interface IGetCatalogPayload {
  brand: string
  gender?: EGender
}

export enum EBrand {
  EASYFIT = 'EASYFIT',
  EASYWAY = 'EAZYWAY',
  EASYNUTRITION = 'EASYNUTRITION'
}

export enum EGender {
  FEMALE = 'Женское',
  MALE = 'Мужское'
}

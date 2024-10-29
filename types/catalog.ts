export interface IGetCatalogPayload {
  brand: string
  gender?: EGender
}

export enum EBrand {
  EASYFIT = 'easyfit',
  EASYWAY = 'eazyway',
  EASYNUTRITION = 'easynutrition'
}

export enum EGender {
  MALE = 'male',
  FEMALE = 'female'
}

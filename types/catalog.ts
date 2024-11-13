export interface IGetCatalogPayload {
  brand: string
  gender?: EGender
}

export enum EBrand {
  EASYFIT = 'EASYFIT',
  EAZYWAY = 'EAZYWAY',
  EASYNUTRITION = 'EASYNUTRITION'
}

export enum EGender {
  FEMALE = 'Женское',
  MALE = 'Мужское'
}

export enum ENew {
  TRUE = 'YES',
  FALSE = 'NO'
}

import {
  type IProduct,
  type IProductGroup,
  type IProductGroupRaw,
  type IProductRaw,
  EGender,
  EProductSizeAttr
} from '~/types'

const getGender = (gender: string): EGender => {
  return gender === 'Мужское' ? EGender.MALE : EGender.FEMALE
}

const getSize = (size: string): EProductSizeAttr => {
  switch (size) {
    case 'XS':
      return EProductSizeAttr.XS
    case 'S':
      return EProductSizeAttr.S
    case 'M':
      return EProductSizeAttr.M
    case 'L':
      return EProductSizeAttr.L
    case 'XL':
      return EProductSizeAttr.XL
    default:
      throw new Error(`Unknown size: ${size}`)
  }
}

export const productRawToProduct = (data: IProductRaw): IProduct => {
  return {
    article: toNullable(data.ARTICLE),
    barcode: toNullable(parseInt(data.BARCODE, 10)),
    brand: toNullable(data.BRAND),
    category: toNullable(data.CATEGORY),
    color: toNullable(data.COLOR),
    description: toNullable(data.DESCRIPTION),
    fabric: toNullable(data.FABRIC),
    groupId: data.GROUP_ID,
    id: toNullable(parseInt(data.ID, 10)),
    name: data.NAME,
    pictures: toNullable(data.PICTURES),
    price: toNullable(parseJSON(data.PRICE)),
    priceInt: toNullable(parseInt(data.PRICE_INT, 10)),
    size: getSize(data.SIZE),
    stock: toNullable(parseInt(data.STOCK || '100', 10))
  }
}

export const productGroupRawToProductGroup = (data: IProductGroupRaw): IProductGroup => {
  return {
    sizes: data.SIZES.map((size) => getSize(size)),
    colors: data.COLORS,
    groupId: data.GROUP_ID,
    category: data.CATEGORY,
    gender: getGender(data.GENDER),
    items: data.ITEMS.map((item: IProductRaw) => productRawToProduct(item))
  }
}

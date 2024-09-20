import type { IProduct, IProductRaw } from '~/types'

export const productRawToProduct = (data: IProductRaw): IProduct => {
  return {
    article: toNullable(data.ARTICLE),
    attributes: toNullable(parseJSON(data.ATTRIBUTES)),
    barcode: toNullable(parseJSON(data.BARCODE)),
    brand: toNullable(data.BRAND),
    category: toNullable(data.CATEGORY),
    description: toNullable(parseJSON(data.DESCRIPTION)),
    id: toNullable(parseJSON(data.ID)),
    name: toNullable(data.NAME),
    pictures: toNullable(parseJSON(data.PICTURES)),
    price: toNullable(parseJSON(data.PRICE)),
    priceInt: toNullable(parseJSON(data.PRICE_INT))
  }
}

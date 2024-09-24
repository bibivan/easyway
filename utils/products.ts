import {
  type IProduct,
  type IProductGroup,
  type IProductGroupRaw,
  type IProductRaw,
  type IProductAttributesRaw,
  type IProductSFAttrs,
  EGender,
  EProductSizeAttr
} from '~/types'

export const attrsRawToAttrs = (str: string) => {
  const { sfAttrs }: IProductAttributesRaw = parseJSON(str)

  const attrsMap: Record<string, string> = sfAttrs.reduce(
    (acc, attr) => {
      acc[attr.name] = attr.value
      return acc
    },
    {} as Record<string, string>
  )

  // Преобразуем строковые значения в соответствующие енамы
  const getGender = (gender: string): EGender => {
    return gender === 'male' ? EGender.MALE : EGender.FEMALE
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

  // Преобразование объекта
  const transformedProduct: IProductSFAttrs = {
    size: getSize(attrsMap['size'] || ''),
    color: attrsMap['color'] || '',
    description: attrsMap['description'] || '',
    composition: attrsMap['composition'] || '',
    careInstructions: attrsMap['careInstructions'] || '',
    gender: getGender(attrsMap['gender'] || '')
  }

  return transformedProduct
}

export const productRawToProduct = (data: IProductRaw): IProduct => {
  return {
    article: toNullable(data.ARTICLE),
    sfAttrs: toNullable(attrsRawToAttrs(data.ATTRIBUTES)),
    barcode: toNullable(parseJSON(data.BARCODE)),
    brand: toNullable(data.BRAND),
    category: toNullable(data.CATEGORY),
    description: toNullable(parseJSON(data.DESCRIPTION)),
    id: toNullable(parseJSON(data.ID)),
    groupId: toNullable(parseJSON(data.GROUP_ID)),
    name: toNullable(data.NAME),
    pictures: toNullable(parseJSON(data.PICTURES)),
    price: toNullable(parseJSON(data.PRICE)),
    priceInt: toNullable(parseJSON(data.PRICE_INT))
  }
}

export const productGroupRawToProductGroup = (data: IProductGroupRaw): IProductGroup => {
  return {
    sizes: parseJSON(data.SIZES),
    colors: parseJSON(data.COLORS),
    groupId: parseJSON(data.GROUP_ID),
    category: toNullable(data.CATEGORY),
    items: data.ITEMS.map((item: IProductRaw) => productRawToProduct(item))
  }
}

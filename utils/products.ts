import {
  type IProduct,
  type IProductGroup,
  type IProductGroupRaw,
  type IProductRaw,
  EGender,
  EProductSizeAttr,
  type IPaginatedDataRaw
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
    case 'XXL':
      return EProductSizeAttr.XXL
    case 'XXXL':
      return EProductSizeAttr.XXXL
    default:
      throw new Error(`Rendering Error. Unknown size: ${size}`)
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
    priceDsc: toNullable(parseInt(data.PRICE_DISCOUNT, 10)),
    size: getSize(data.SIZE),
    stock: toNullable(parseInt(data.STOCK || '100', 10))
  }
}

export const productGroupRawToProductGroup = (data: IProductGroupRaw): IProductGroup => {
  return {
    sizes: data.SIZES.reduce<EProductSizeAttr[]>((acc, curSize) => {
      return curSize ? [...acc, getSize(curSize)] : acc
    }, []),
    colors: data.COLORS,
    groupId: data.GROUP_ID,
    category: data.CATEGORY,
    gender: getGender(data.GENDER),
    items: data.ITEMS.map((item: IProductRaw) => productRawToProduct(item))
  }
}

export const productGroupsRawToProductGroups = (data: IProductGroupRaw[]): IProductGroup[] => {
  return (
    data?.reduce((acc: IProductGroup[], curItem: IProductGroupRaw) => {
      if (isEmpty(curItem.ITEMS)) return acc
      else return [...acc, productGroupRawToProductGroup(curItem)]
    }, []) || null
  )
}

export const transformSizeString = (size: string): string => {
  const match = size.match(/^[xX]+(.*)$/)
  if (!match) return size

  const xCount = match[0].length - match[1].length
  const suffix = match[1]
  const xChar = size[0]

  if (xCount === 1) return `${xChar}${suffix}`

  if (xCount === 2) return `${xChar.repeat(2)}${suffix}`

  return `${xCount}${xChar}${suffix}`
}

export const isWhiteColor = (color: string): boolean => {
  const hexPattern = /^#(?:f{3}|f{6}|fff|ffffff)$/i
  const rgbPattern = /^rgba?\(\s*255\s*,\s*255\s*,\s*255\s*(?:,\s*(0|1|1.0|0?\.\d+)\s*)?\)$/i
  const namedWhitePattern = /^white$/i

  return hexPattern.test(color) || rgbPattern.test(color) || namedWhitePattern.test(color)
}

export const formatHexColor = (value: string): string => {
  const hexRegex = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  return hexRegex.test(value) ? `#${value}` : value
}

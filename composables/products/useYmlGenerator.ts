import { getGender, productGroupsRawToProductGroups } from '~/utils/products'
import {
  type IPaginatedDataRaw,
  type IProductGroupRaw,
  type IProductGroup,
  type IProduct,
  EGender
} from '~/types'

export const useYmlGenerator = async () => {
  interface IProductWithGender extends IProduct {
    gender: string
  }

  const config = useRuntimeConfig()

  const productsData = await $fetch<IPaginatedDataRaw<IProductGroupRaw[]>>(
    config.public.baseURL + 'data',
    {
      params: { limit: 10000 }
    }
  )

  const { categories } = await $fetch<{ categories: string[] }>(
    config.public.baseURL + 'categories'
  )

  const productGroups: IProductGroup[] = productGroupsRawToProductGroups(productsData.items)
  const products: IProductWithGender[] = [] as IProductWithGender[]

  productGroups.forEach((group: IProductGroup) => {
    group.items.forEach((product) => {
      const genderString = getGender(group.gender) === EGender.FEMALE ? 'Женский' : 'Мужской'
      products.push({ ...product, gender: genderString })
    })
  })

  // Создание XML-документа
  const xml: string = `<?xml version="1.0" encoding="UTF-8"?>
      <!DOCTYPE yml_catalog SYSTEM "shops.dtd">
        <yml_catalog date="${new Date().toISOString()}">
          <shop>
            <name>EAZYWAY</name>
            <company>ООО «Капитал Инвест»</company>
            <url>https://eazy-way.com/</url>
            <currencies>
              <currency id="RUB" rate="1"/>
            </currencies>
            <categories>
            ${categories
              ?.map((category: string, idx: number) => {
                return `<category id="${idx + 1}">${category}</category>`
              })
              .join('')}
            </categories>
            <offers>
              ${products
                ?.map((product: IProductWithGender) => {
                  const categoryID =
                    categories.indexOf(product.category ? product.category : '') + 1

                  return `
                    <offer id="${product.article}" available="true">
                      <url>https://eazy-way.com/product-group/${product.groupId}</url>
                      <price>${product.priceInt}</price>
                      <currencyId>RUB</currencyId>
                      <categoryId>${categoryID}</categoryId>                      
                      ${product.pictures
                        ?.map((pic: string, idx: number) => {
                          return idx <= 4 ? `<picture>${pic}</picture>` : ''
                        })
                        .join('')}
                      <pickup>true</pickup>
                      <delivery>true</delivery>
                      <name>${product.name}</name>
                      <vendor>${product.brand}</vendor>
                      <vendorCode>${product.article}</vendorCode>
                      <description>${product.description}</description>
                      <param name="Размер" unit="INT">${product.size}</param>
                      <param name="Пол">${product.gender}</param>
                      <param name="Пол">${product.fabric?.composition}</param>
                    </offer>
                  `
                })
                .join('')}
            </offers>
          </shop>
        </yml_catalog>`

  return xml
}

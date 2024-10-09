import type { IPaginatedDataRaw, IProductGroupRaw } from '~/types'
import { attrsRawToAttrs } from '~/utils/products'

export const useCatalogMock = (): Promise<IPaginatedDataRaw<IProductGroupRaw[]>> => {
  const mockData: IPaginatedDataRaw<IProductGroupRaw[]> = {
    pagination: {
      page: 1,
      pages: 1,
      total: 5
    },
    items: [
      {
        SIZES: ['XS', 'S', 'M', 'L', 'XL'],
        COLORS: ['black', 'white', 'red', 'green'],
        GROUP_ID: '0',
        CATEGORY: 'Футболки',
        ITEMS: [
          {
            ARTICLE: 'article-0-00',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"XS"},{"name":"color","value":"black"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, XS, черный"}]}',
            BARCODE: '1111111111100',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '000',
            GROUP_ID: '0',
            NAME: 'Футболка Апполон, XS, black',
            PICTURES:
              '["https://placehold.co/400x440/black/fff?text=Футболка Апполон, XS, black, 1&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Апполон, XS, black, 2&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Апполон, XS, black, 3&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Апполон, XS, black, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-0-01',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"S"},{"name":"color","value":"black"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, XS, черный"}]}',
            BARCODE: '1111111111100',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '001',
            GROUP_ID: '0',
            NAME: 'Футболка Апполон, S, black',
            PICTURES:
              '["https://placehold.co/400x440/black/fff?text=Футболка Апполон, S, black, 1&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Апполон, S, black, 2&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Апполон, S, black, 3&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Апполон, S, black, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-0-02',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"black"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, XS, черный"}]}',
            BARCODE: '1111111111100',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '002',
            GROUP_ID: '0',
            NAME: 'Футболка Апполон, M, black',
            PICTURES:
              '["https://placehold.co/400x440/black/fff?text=Футболка Апполон, M, black, 1&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Апполон, M, black, 2&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Апполон, M, black, 3&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Апполон, M, black, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-0-03',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"black"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, XS, черный"}]}',
            BARCODE: '1111111111100',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '003',
            GROUP_ID: '0',
            NAME: 'Футболка Апполон, L, black',
            PICTURES:
              '["https://placehold.co/400x440/black/fff?text=Футболка Апполон, L, black, 1&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Апполон, L, black, 2&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Апполон, L, black, 3&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Апполон, L, black, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-0-04',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"XL"},{"name":"color","value":"black"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, XS, черный"}]}',
            BARCODE: '1111111111100',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '004',
            GROUP_ID: '0',
            NAME: 'Футболка Апполон, XL, black',
            PICTURES:
              '["https://placehold.co/400x440/black/fff?text=Футболка Апполон, XL, black, 1&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Апполон, XL, black, 2&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Апполон, XL, black, 3&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Апполон, XL, black, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-0-10',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"XS"},{"name":"color","value":"white"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, S, белый"}]}',
            BARCODE: '1111111111101',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '010',
            GROUP_ID: '0',
            NAME: 'Футболка Апполон, XS, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Футболка Апполон, XS, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Апполон, XS, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Апполон, XS, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Апполон, XS, white, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-0-11',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"S"},{"name":"color","value":"white"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, S, белый"}]}',
            BARCODE: '1111111111101',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '011',
            GROUP_ID: '0',
            NAME: 'Футболка Апполон, S, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Футболка Апполон, S, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Апполон, S, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Апполон, S, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Апполон, S, white, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-0-12',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"white"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, S, белый"}]}',
            BARCODE: '1111111111101',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '012',
            GROUP_ID: '0',
            NAME: 'Футболка Апполон, M, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Футболка Апполон, M, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Апполон, M, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Апполон, M, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Апполон, M, white, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-0-13',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"white"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, S, белый"}]}',
            BARCODE: '1111111111101',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '013',
            GROUP_ID: '0',
            NAME: 'Футболка Апполон, L, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Футболка Апполон, L, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Апполон, L, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Апполон, L, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Апполон, L, white, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-0-14',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"XL"},{"name":"color","value":"white"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, S, белый"}]}',
            BARCODE: '1111111111101',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '014',
            GROUP_ID: '0',
            NAME: 'Футболка Апполон, XL, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Футболка Апполон, XL, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Апполон, XL, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Апполон, XL, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Апполон, XL, white, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-0-20',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"XS"},{"name":"color","value":"red"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, M, красный"}]}',
            BARCODE: '1111111111102',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '020',
            GROUP_ID: '0',
            NAME: 'Футболка Апполон, XS, red',
            PICTURES:
              '["https://placehold.co/400x440/red/fff?text=Футболка Апполон, XS, red, 1&font=Arial","https://placehold.co/400x440/red/fff?text=Футболка Апполон, XS, red, 2&font=Arial","https://placehold.co/400x440/red/fff?text=Футболка Апполон, XS, red, 3&font=Arial","https://placehold.co/400x440/red/fff?text=Футболка Апполон, XS, red, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-0-21',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"S"},{"name":"color","value":"red"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, M, красный"}]}',
            BARCODE: '1111111111102',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '021',
            GROUP_ID: '0',
            NAME: 'Футболка Апполон, S, red',
            PICTURES:
              '["https://placehold.co/400x440/red/fff?text=Футболка Апполон, S, red, 1&font=Arial","https://placehold.co/400x440/red/fff?text=Футболка Апполон, S, red, 2&font=Arial","https://placehold.co/400x440/red/fff?text=Футболка Апполон, S, red, 3&font=Arial","https://placehold.co/400x440/red/fff?text=Футболка Апполон, S, red, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-0-22',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"red"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, M, красный"}]}',
            BARCODE: '1111111111102',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '022',
            GROUP_ID: '0',
            NAME: 'Футболка Апполон, M, red',
            PICTURES:
              '["https://placehold.co/400x440/red/fff?text=Футболка Апполон, M, red, 1&font=Arial","https://placehold.co/400x440/red/fff?text=Футболка Апполон, M, red, 2&font=Arial","https://placehold.co/400x440/red/fff?text=Футболка Апполон, M, red, 3&font=Arial","https://placehold.co/400x440/red/fff?text=Футболка Апполон, M, red, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-0-23',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"red"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, M, красный"}]}',
            BARCODE: '1111111111102',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '023',
            GROUP_ID: '0',
            NAME: 'Футболка Апполон, L, red',
            PICTURES:
              '["https://placehold.co/400x440/red/fff?text=Футболка Апполон, L, red, 1&font=Arial","https://placehold.co/400x440/red/fff?text=Футболка Апполон, L, red, 2&font=Arial","https://placehold.co/400x440/red/fff?text=Футболка Апполон, L, red, 3&font=Arial","https://placehold.co/400x440/red/fff?text=Футболка Апполон, L, red, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-0-24',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"XL"},{"name":"color","value":"red"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, M, красный"}]}',
            BARCODE: '1111111111102',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '024',
            GROUP_ID: '0',
            NAME: 'Футболка Апполон, XL, red',
            PICTURES:
              '["https://placehold.co/400x440/red/fff?text=Футболка Апполон, XL, red, 1&font=Arial","https://placehold.co/400x440/red/fff?text=Футболка Апполон, XL, red, 2&font=Arial","https://placehold.co/400x440/red/fff?text=Футболка Апполон, XL, red, 3&font=Arial","https://placehold.co/400x440/red/fff?text=Футболка Апполон, XL, red, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-0-30',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"XS"},{"name":"color","value":"green"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, L, зеленый"}]}',
            BARCODE: '1111111111103',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '030',
            GROUP_ID: '0',
            NAME: 'Футболка Апполон, XS, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Футболка Апполон, XS, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Апполон, XS, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Апполон, XS, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Апполон, XS, green, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-0-31',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"S"},{"name":"color","value":"green"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, L, зеленый"}]}',
            BARCODE: '1111111111103',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '031',
            GROUP_ID: '0',
            NAME: 'Футболка Апполон, S, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Футболка Апполон, S, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Апполон, S, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Апполон, S, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Апполон, S, green, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-0-32',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"green"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, L, зеленый"}]}',
            BARCODE: '1111111111103',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '032',
            GROUP_ID: '0',
            NAME: 'Футболка Апполон, M, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Футболка Апполон, M, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Апполон, M, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Апполон, M, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Апполон, M, green, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-0-33',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"green"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, L, зеленый"}]}',
            BARCODE: '1111111111103',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '033',
            GROUP_ID: '0',
            NAME: 'Футболка Апполон, L, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Футболка Апполон, L, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Апполон, L, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Апполон, L, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Апполон, L, green, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-0-34',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"XL"},{"name":"color","value":"green"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, L, зеленый"}]}',
            BARCODE: '1111111111103',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '034',
            GROUP_ID: '0',
            NAME: 'Футболка Апполон, XL, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Футболка Апполон, XL, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Апполон, XL, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Апполон, XL, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Апполон, XL, green, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          }
        ]
      },
      {
        SIZES: ['S', 'M', 'L'],
        COLORS: ['black', 'white', 'green'],
        GROUP_ID: '1',
        CATEGORY: 'Шорты',
        ITEMS: [
          {
            ARTICLE: 'article-1-00',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"S"},{"name":"color","value":"black"},{"name":"composition","value":"100% полиэстер"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Шорты, XS, черный"}]}',
            BARCODE: '1111111111200',
            BRAND: 'easyway',
            CATEGORY: 'Шорты',
            DESCRIPTION: 'Шорты для тренировок',
            ID: '100',
            GROUP_ID: '1',
            NAME: 'Шорты спринтер, S, black',
            PICTURES:
              '["https://placehold.co/400x440/black/fff?text=Шорты спринтер, S, black, 1&font=Arial","https://placehold.co/400x440/black/fff?text=Шорты спринтер, S, black, 2&font=Arial","https://placehold.co/400x440/black/fff?text=Шорты спринтер, S, black, 3&font=Arial","https://placehold.co/400x440/black/fff?text=Шорты спринтер, S, black, 4&font=Arial"]',
            PRICE: '1000',
            PRICE_INT: '1000'
          },
          {
            ARTICLE: 'article-1-01',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"black"},{"name":"composition","value":"100% полиэстер"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Шорты, XS, черный"}]}',
            BARCODE: '1111111111200',
            BRAND: 'easyway',
            CATEGORY: 'Шорты',
            DESCRIPTION: 'Шорты для тренировок',
            ID: '101',
            GROUP_ID: '1',
            NAME: 'Шорты спринтер, M, black',
            PICTURES:
              '["https://placehold.co/400x440/black/fff?text=Шорты спринтер, M, black, 1&font=Arial","https://placehold.co/400x440/black/fff?text=Шорты спринтер, M, black, 2&font=Arial","https://placehold.co/400x440/black/fff?text=Шорты спринтер, M, black, 3&font=Arial","https://placehold.co/400x440/black/fff?text=Шорты спринтер, M, black, 4&font=Arial"]',
            PRICE: '1000',
            PRICE_INT: '1000'
          },
          {
            ARTICLE: 'article-1-02',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"black"},{"name":"composition","value":"100% полиэстер"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Шорты, XS, черный"}]}',
            BARCODE: '1111111111200',
            BRAND: 'easyway',
            CATEGORY: 'Шорты',
            DESCRIPTION: 'Шорты для тренировок',
            ID: '102',
            GROUP_ID: '1',
            NAME: 'Шорты спринтер, L, black',
            PICTURES:
              '["https://placehold.co/400x440/black/fff?text=Шорты спринтер, L, black, 1&font=Arial","https://placehold.co/400x440/black/fff?text=Шорты спринтер, L, black, 2&font=Arial","https://placehold.co/400x440/black/fff?text=Шорты спринтер, L, black, 3&font=Arial","https://placehold.co/400x440/black/fff?text=Шорты спринтер, L, black, 4&font=Arial"]',
            PRICE: '1000',
            PRICE_INT: '1000'
          },
          {
            ARTICLE: 'article-1-10',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"S"},{"name":"color","value":"white"},{"name":"composition","value":"100% полиэстер"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Шорты, S, белый"}]}',
            BARCODE: '1111111111201',
            BRAND: 'easyway',
            CATEGORY: 'Шорты',
            DESCRIPTION: 'Шорты для тренировок',
            ID: '110',
            GROUP_ID: '1',
            NAME: 'Шорты спринтер, S, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Шорты спринтер, S, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Шорты спринтер, S, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Шорты спринтер, S, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Шорты спринтер, S, white, 4&font=Arial"]',
            PRICE: '1000',
            PRICE_INT: '1000'
          },
          {
            ARTICLE: 'article-1-11',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"white"},{"name":"composition","value":"100% полиэстер"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Шорты, S, белый"}]}',
            BARCODE: '1111111111201',
            BRAND: 'easyway',
            CATEGORY: 'Шорты',
            DESCRIPTION: 'Шорты для тренировок',
            ID: '111',
            GROUP_ID: '1',
            NAME: 'Шорты спринтер, M, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Шорты спринтер, M, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Шорты спринтер, M, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Шорты спринтер, M, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Шорты спринтер, M, white, 4&font=Arial"]',
            PRICE: '1000',
            PRICE_INT: '1000'
          },
          {
            ARTICLE: 'article-1-12',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"white"},{"name":"composition","value":"100% полиэстер"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Шорты, S, белый"}]}',
            BARCODE: '1111111111201',
            BRAND: 'easyway',
            CATEGORY: 'Шорты',
            DESCRIPTION: 'Шорты для тренировок',
            ID: '112',
            GROUP_ID: '1',
            NAME: 'Шорты спринтер, L, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Шорты спринтер, L, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Шорты спринтер, L, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Шорты спринтер, L, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Шорты спринтер, L, white, 4&font=Arial"]',
            PRICE: '1000',
            PRICE_INT: '1000'
          },
          {
            ARTICLE: 'article-1-30',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"S"},{"name":"color","value":"green"},{"name":"composition","value":"100% полиэстер"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Шорты, L, зеленый"}]}',
            BARCODE: '1111111111203',
            BRAND: 'easyway',
            CATEGORY: 'Шорты',
            DESCRIPTION: 'Шорты для тренировок',
            ID: '130',
            GROUP_ID: '1',
            NAME: 'Шорты спринтер, S, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Шорты спринтер, S, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Шорты спринтер, S, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Шорты спринтер, S, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Шорты спринтер, S, green, 4&font=Arial"]',
            PRICE: '1000',
            PRICE_INT: '1000'
          },
          {
            ARTICLE: 'article-1-31',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"green"},{"name":"composition","value":"100% полиэстер"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Шорты, L, зеленый"}]}',
            BARCODE: '1111111111203',
            BRAND: 'easyway',
            CATEGORY: 'Шорты',
            DESCRIPTION: 'Шорты для тренировок',
            ID: '131',
            GROUP_ID: '1',
            NAME: 'Шорты спринтер, M, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Шорты спринтер, M, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Шорты спринтер, M, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Шорты спринтер, M, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Шорты спринтер, M, green, 4&font=Arial"]',
            PRICE: '1000',
            PRICE_INT: '1000'
          },
          {
            ARTICLE: 'article-1-32',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"green"},{"name":"composition","value":"100% полиэстер"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Шорты, L, зеленый"}]}',
            BARCODE: '1111111111203',
            BRAND: 'easyway',
            CATEGORY: 'Шорты',
            DESCRIPTION: 'Шорты для тренировок',
            ID: '132',
            GROUP_ID: '1',
            NAME: 'Шорты спринтер, L, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Шорты спринтер, L, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Шорты спринтер, L, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Шорты спринтер, L, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Шорты спринтер, L, green, 4&font=Arial"]',
            PRICE: '1000',
            PRICE_INT: '1000'
          }
        ]
      },
      {
        SIZES: ['XS', 'S', 'M'],
        COLORS: ['black', 'red', 'green'],
        GROUP_ID: '2',
        CATEGORY: 'Легинсы',
        ITEMS: [
          {
            ARTICLE: 'article-2-00',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"XS"},{"name":"color","value":"black"},{"name":"composition","value":"80% нейлон, 20% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Легинсы, XS, черный"}]}',
            BARCODE: '1111111111300',
            BRAND: 'easyway',
            CATEGORY: 'Легинсы',
            DESCRIPTION: 'Легинсы для тренировок',
            ID: '200',
            GROUP_ID: '2',
            NAME: 'Легинсы крутышка, XS, black',
            PICTURES:
              '["https://placehold.co/400x440/black/fff?text=Легинсы крутышка, XS, black, 1&font=Arial","https://placehold.co/400x440/black/fff?text=Легинсы крутышка, XS, black, 2&font=Arial","https://placehold.co/400x440/black/fff?text=Легинсы крутышка, XS, black, 3&font=Arial","https://placehold.co/400x440/black/fff?text=Легинсы крутышка, XS, black, 4&font=Arial"]',
            PRICE: '2000',
            PRICE_INT: '2000'
          },
          {
            ARTICLE: 'article-2-01',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"S"},{"name":"color","value":"black"},{"name":"composition","value":"80% нейлон, 20% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Легинсы, XS, черный"}]}',
            BARCODE: '1111111111300',
            BRAND: 'easyway',
            CATEGORY: 'Легинсы',
            DESCRIPTION: 'Легинсы для тренировок',
            ID: '201',
            GROUP_ID: '2',
            NAME: 'Легинсы крутышка, S, black',
            PICTURES:
              '["https://placehold.co/400x440/black/fff?text=Легинсы крутышка, S, black, 1&font=Arial","https://placehold.co/400x440/black/fff?text=Легинсы крутышка, S, black, 2&font=Arial","https://placehold.co/400x440/black/fff?text=Легинсы крутышка, S, black, 3&font=Arial","https://placehold.co/400x440/black/fff?text=Легинсы крутышка, S, black, 4&font=Arial"]',
            PRICE: '2000',
            PRICE_INT: '2000'
          },
          {
            ARTICLE: 'article-2-02',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"black"},{"name":"composition","value":"80% нейлон, 20% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Легинсы, XS, черный"}]}',
            BARCODE: '1111111111300',
            BRAND: 'easyway',
            CATEGORY: 'Легинсы',
            DESCRIPTION: 'Легинсы для тренировок',
            ID: '202',
            GROUP_ID: '2',
            NAME: 'Легинсы крутышка, M, black',
            PICTURES:
              '["https://placehold.co/400x440/black/fff?text=Легинсы крутышка, M, black, 1&font=Arial","https://placehold.co/400x440/black/fff?text=Легинсы крутышка, M, black, 2&font=Arial","https://placehold.co/400x440/black/fff?text=Легинсы крутышка, M, black, 3&font=Arial","https://placehold.co/400x440/black/fff?text=Легинсы крутышка, M, black, 4&font=Arial"]',
            PRICE: '2000',
            PRICE_INT: '2000'
          },
          {
            ARTICLE: 'article-2-20',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"XS"},{"name":"color","value":"red"},{"name":"composition","value":"80% нейлон, 20% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Легинсы, M, красный"}]}',
            BARCODE: '1111111111302',
            BRAND: 'easyway',
            CATEGORY: 'Легинсы',
            DESCRIPTION: 'Легинсы для тренировок',
            ID: '220',
            GROUP_ID: '2',
            NAME: 'Легинсы крутышка, XS, red',
            PICTURES:
              '["https://placehold.co/400x440/red/fff?text=Легинсы крутышка, XS, red, 1&font=Arial","https://placehold.co/400x440/red/fff?text=Легинсы крутышка, XS, red, 2&font=Arial","https://placehold.co/400x440/red/fff?text=Легинсы крутышка, XS, red, 3&font=Arial","https://placehold.co/400x440/red/fff?text=Легинсы крутышка, XS, red, 4&font=Arial"]',
            PRICE: '2000',
            PRICE_INT: '2000'
          },
          {
            ARTICLE: 'article-2-21',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"S"},{"name":"color","value":"red"},{"name":"composition","value":"80% нейлон, 20% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Легинсы, M, красный"}]}',
            BARCODE: '1111111111302',
            BRAND: 'easyway',
            CATEGORY: 'Легинсы',
            DESCRIPTION: 'Легинсы для тренировок',
            ID: '221',
            GROUP_ID: '2',
            NAME: 'Легинсы крутышка, S, red',
            PICTURES:
              '["https://placehold.co/400x440/red/fff?text=Легинсы крутышка, S, red, 1&font=Arial","https://placehold.co/400x440/red/fff?text=Легинсы крутышка, S, red, 2&font=Arial","https://placehold.co/400x440/red/fff?text=Легинсы крутышка, S, red, 3&font=Arial","https://placehold.co/400x440/red/fff?text=Легинсы крутышка, S, red, 4&font=Arial"]',
            PRICE: '2000',
            PRICE_INT: '2000'
          },
          {
            ARTICLE: 'article-2-22',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"red"},{"name":"composition","value":"80% нейлон, 20% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Легинсы, M, красный"}]}',
            BARCODE: '1111111111302',
            BRAND: 'easyway',
            CATEGORY: 'Легинсы',
            DESCRIPTION: 'Легинсы для тренировок',
            ID: '222',
            GROUP_ID: '2',
            NAME: 'Легинсы крутышка, M, red',
            PICTURES:
              '["https://placehold.co/400x440/red/fff?text=Легинсы крутышка, M, red, 1&font=Arial","https://placehold.co/400x440/red/fff?text=Легинсы крутышка, M, red, 2&font=Arial","https://placehold.co/400x440/red/fff?text=Легинсы крутышка, M, red, 3&font=Arial","https://placehold.co/400x440/red/fff?text=Легинсы крутышка, M, red, 4&font=Arial"]',
            PRICE: '2000',
            PRICE_INT: '2000'
          },
          {
            ARTICLE: 'article-2-30',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"XS"},{"name":"color","value":"green"},{"name":"composition","value":"80% нейлон, 20% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Легинсы, L, зеленый"}]}',
            BARCODE: '1111111111303',
            BRAND: 'easyway',
            CATEGORY: 'Легинсы',
            DESCRIPTION: 'Легинсы для тренировок',
            ID: '230',
            GROUP_ID: '2',
            NAME: 'Легинсы крутышка, XS, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Легинсы крутышка, XS, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Легинсы крутышка, XS, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Легинсы крутышка, XS, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Легинсы крутышка, XS, green, 4&font=Arial"]',
            PRICE: '2000',
            PRICE_INT: '2000'
          },
          {
            ARTICLE: 'article-2-31',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"S"},{"name":"color","value":"green"},{"name":"composition","value":"80% нейлон, 20% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Легинсы, L, зеленый"}]}',
            BARCODE: '1111111111303',
            BRAND: 'easyway',
            CATEGORY: 'Легинсы',
            DESCRIPTION: 'Легинсы для тренировок',
            ID: '231',
            GROUP_ID: '2',
            NAME: 'Легинсы крутышка, S, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Легинсы крутышка, S, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Легинсы крутышка, S, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Легинсы крутышка, S, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Легинсы крутышка, S, green, 4&font=Arial"]',
            PRICE: '2000',
            PRICE_INT: '2000'
          },
          {
            ARTICLE: 'article-2-32',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"green"},{"name":"composition","value":"80% нейлон, 20% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Легинсы, L, зеленый"}]}',
            BARCODE: '1111111111303',
            BRAND: 'easyway',
            CATEGORY: 'Легинсы',
            DESCRIPTION: 'Легинсы для тренировок',
            ID: '232',
            GROUP_ID: '2',
            NAME: 'Легинсы крутышка, M, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Легинсы крутышка, M, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Легинсы крутышка, M, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Легинсы крутышка, M, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Легинсы крутышка, M, green, 4&font=Arial"]',
            PRICE: '2000',
            PRICE_INT: '2000'
          }
        ]
      },
      {
        SIZES: ['S', 'M', 'L'],
        COLORS: ['white', 'red', 'green'],
        GROUP_ID: '3',
        CATEGORY: 'Брюки',
        ITEMS: [
          {
            ARTICLE: 'article-3-10',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"S"},{"name":"color","value":"white"},{"name":"composition","value":"100% хлопок"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Брюки, S, белый"}]}',
            BARCODE: '1111111111401',
            BRAND: 'easyway',
            CATEGORY: 'Брюки',
            DESCRIPTION: 'Брюки для тренировок',
            ID: '310',
            GROUP_ID: '3',
            NAME: 'Брюки гигант, S, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Брюки гигант, S, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Брюки гигант, S, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Брюки гигант, S, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Брюки гигант, S, white, 4&font=Arial"]',
            PRICE: '2500',
            PRICE_INT: '2500'
          },
          {
            ARTICLE: 'article-3-11',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"white"},{"name":"composition","value":"100% хлопок"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Брюки, S, белый"}]}',
            BARCODE: '1111111111401',
            BRAND: 'easyway',
            CATEGORY: 'Брюки',
            DESCRIPTION: 'Брюки для тренировок',
            ID: '311',
            GROUP_ID: '3',
            NAME: 'Брюки гигант, M, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Брюки гигант, M, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Брюки гигант, M, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Брюки гигант, M, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Брюки гигант, M, white, 4&font=Arial"]',
            PRICE: '2500',
            PRICE_INT: '2500'
          },
          {
            ARTICLE: 'article-3-12',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"white"},{"name":"composition","value":"100% хлопок"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Брюки, S, белый"}]}',
            BARCODE: '1111111111401',
            BRAND: 'easyway',
            CATEGORY: 'Брюки',
            DESCRIPTION: 'Брюки для тренировок',
            ID: '312',
            GROUP_ID: '3',
            NAME: 'Брюки гигант, L, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Брюки гигант, L, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Брюки гигант, L, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Брюки гигант, L, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Брюки гигант, L, white, 4&font=Arial"]',
            PRICE: '2500',
            PRICE_INT: '2500'
          },
          {
            ARTICLE: 'article-3-20',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"S"},{"name":"color","value":"red"},{"name":"composition","value":"100% хлопок"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Брюки, M, красный"}]}',
            BARCODE: '1111111111402',
            BRAND: 'easyway',
            CATEGORY: 'Брюки',
            DESCRIPTION: 'Брюки для тренировок',
            ID: '320',
            GROUP_ID: '3',
            NAME: 'Брюки гигант, S, red',
            PICTURES:
              '["https://placehold.co/400x440/red/fff?text=Брюки гигант, S, red, 1&font=Arial","https://placehold.co/400x440/red/fff?text=Брюки гигант, S, red, 2&font=Arial","https://placehold.co/400x440/red/fff?text=Брюки гигант, S, red, 3&font=Arial","https://placehold.co/400x440/red/fff?text=Брюки гигант, S, red, 4&font=Arial"]',
            PRICE: '2500',
            PRICE_INT: '2500'
          },
          {
            ARTICLE: 'article-3-21',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"red"},{"name":"composition","value":"100% хлопок"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Брюки, M, красный"}]}',
            BARCODE: '1111111111402',
            BRAND: 'easyway',
            CATEGORY: 'Брюки',
            DESCRIPTION: 'Брюки для тренировок',
            ID: '321',
            GROUP_ID: '3',
            NAME: 'Брюки гигант, M, red',
            PICTURES:
              '["https://placehold.co/400x440/red/fff?text=Брюки гигант, M, red, 1&font=Arial","https://placehold.co/400x440/red/fff?text=Брюки гигант, M, red, 2&font=Arial","https://placehold.co/400x440/red/fff?text=Брюки гигант, M, red, 3&font=Arial","https://placehold.co/400x440/red/fff?text=Брюки гигант, M, red, 4&font=Arial"]',
            PRICE: '2500',
            PRICE_INT: '2500'
          },
          {
            ARTICLE: 'article-3-22',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"red"},{"name":"composition","value":"100% хлопок"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Брюки, M, красный"}]}',
            BARCODE: '1111111111402',
            BRAND: 'easyway',
            CATEGORY: 'Брюки',
            DESCRIPTION: 'Брюки для тренировок',
            ID: '322',
            GROUP_ID: '3',
            NAME: 'Брюки гигант, L, red',
            PICTURES:
              '["https://placehold.co/400x440/red/fff?text=Брюки гигант, L, red, 1&font=Arial","https://placehold.co/400x440/red/fff?text=Брюки гигант, L, red, 2&font=Arial","https://placehold.co/400x440/red/fff?text=Брюки гигант, L, red, 3&font=Arial","https://placehold.co/400x440/red/fff?text=Брюки гигант, L, red, 4&font=Arial"]',
            PRICE: '2500',
            PRICE_INT: '2500'
          },
          {
            ARTICLE: 'article-3-30',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"S"},{"name":"color","value":"green"},{"name":"composition","value":"100% хлопок"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Брюки, L, зеленый"}]}',
            BARCODE: '1111111111403',
            BRAND: 'easyway',
            CATEGORY: 'Брюки',
            DESCRIPTION: 'Брюки для тренировок',
            ID: '330',
            GROUP_ID: '3',
            NAME: 'Брюки гигант, S, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Брюки гигант, S, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Брюки гигант, S, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Брюки гигант, S, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Брюки гигант, S, green, 4&font=Arial"]',
            PRICE: '2500',
            PRICE_INT: '2500'
          },
          {
            ARTICLE: 'article-3-31',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"green"},{"name":"composition","value":"100% хлопок"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Брюки, L, зеленый"}]}',
            BARCODE: '1111111111403',
            BRAND: 'easyway',
            CATEGORY: 'Брюки',
            DESCRIPTION: 'Брюки для тренировок',
            ID: '331',
            GROUP_ID: '3',
            NAME: 'Брюки гигант, M, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Брюки гигант, M, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Брюки гигант, M, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Брюки гигант, M, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Брюки гигант, M, green, 4&font=Arial"]',
            PRICE: '2500',
            PRICE_INT: '2500'
          },
          {
            ARTICLE: 'article-3-32',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"green"},{"name":"composition","value":"100% хлопок"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Брюки, L, зеленый"}]}',
            BARCODE: '1111111111403',
            BRAND: 'easyway',
            CATEGORY: 'Брюки',
            DESCRIPTION: 'Брюки для тренировок',
            ID: '332',
            GROUP_ID: '3',
            NAME: 'Брюки гигант, L, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Брюки гигант, L, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Брюки гигант, L, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Брюки гигант, L, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Брюки гигант, L, green, 4&font=Arial"]',
            PRICE: '2500',
            PRICE_INT: '2500'
          }
        ]
      },
      {
        SIZES: ['M', 'L', 'XL'],
        COLORS: ['black', 'white', 'red'],
        GROUP_ID: '4',
        CATEGORY: 'Аксессуары',
        ITEMS: [
          {
            ARTICLE: 'article-4-00',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"black"},{"name":"composition","value":"100% хлопок"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Аксессуары, XS, черный"}]}',
            BARCODE: '1111111111500',
            BRAND: 'easyway',
            CATEGORY: 'Аксессуары',
            DESCRIPTION: 'Аксессуары для тренировок',
            ID: '400',
            GROUP_ID: '4',
            NAME: 'Пояс атлетический, M, black',
            PICTURES:
              '["https://placehold.co/400x440/black/fff?text=Пояс атлетический, M, black, 1&font=Arial","https://placehold.co/400x440/black/fff?text=Пояс атлетический, M, black, 2&font=Arial","https://placehold.co/400x440/black/fff?text=Пояс атлетический, M, black, 3&font=Arial","https://placehold.co/400x440/black/fff?text=Пояс атлетический, M, black, 4&font=Arial"]',
            PRICE: '500',
            PRICE_INT: '500'
          },
          {
            ARTICLE: 'article-4-01',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"black"},{"name":"composition","value":"100% хлопок"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Аксессуары, XS, черный"}]}',
            BARCODE: '1111111111500',
            BRAND: 'easyway',
            CATEGORY: 'Аксессуары',
            DESCRIPTION: 'Аксессуары для тренировок',
            ID: '401',
            GROUP_ID: '4',
            NAME: 'Пояс атлетический, L, black',
            PICTURES:
              '["https://placehold.co/400x440/black/fff?text=Пояс атлетический, L, black, 1&font=Arial","https://placehold.co/400x440/black/fff?text=Пояс атлетический, L, black, 2&font=Arial","https://placehold.co/400x440/black/fff?text=Пояс атлетический, L, black, 3&font=Arial","https://placehold.co/400x440/black/fff?text=Пояс атлетический, L, black, 4&font=Arial"]',
            PRICE: '500',
            PRICE_INT: '500'
          },
          {
            ARTICLE: 'article-4-02',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"XL"},{"name":"color","value":"black"},{"name":"composition","value":"100% хлопок"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Аксессуары, XS, черный"}]}',
            BARCODE: '1111111111500',
            BRAND: 'easyway',
            CATEGORY: 'Аксессуары',
            DESCRIPTION: 'Аксессуары для тренировок',
            ID: '402',
            GROUP_ID: '4',
            NAME: 'Пояс атлетический, XL, black',
            PICTURES:
              '["https://placehold.co/400x440/black/fff?text=Пояс атлетический, XL, black, 1&font=Arial","https://placehold.co/400x440/black/fff?text=Пояс атлетический, XL, black, 2&font=Arial","https://placehold.co/400x440/black/fff?text=Пояс атлетический, XL, black, 3&font=Arial","https://placehold.co/400x440/black/fff?text=Пояс атлетический, XL, black, 4&font=Arial"]',
            PRICE: '500',
            PRICE_INT: '500'
          },
          {
            ARTICLE: 'article-4-10',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"white"},{"name":"composition","value":"100% хлопок"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Аксессуары, S, белый"}]}',
            BARCODE: '1111111111501',
            BRAND: 'easyway',
            CATEGORY: 'Аксессуары',
            DESCRIPTION: 'Аксессуары для тренировок',
            ID: '410',
            GROUP_ID: '4',
            NAME: 'Пояс атлетический, M, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Пояс атлетический, M, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Пояс атлетический, M, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Пояс атлетический, M, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Пояс атлетический, M, white, 4&font=Arial"]',
            PRICE: '500',
            PRICE_INT: '500'
          },
          {
            ARTICLE: 'article-4-11',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"white"},{"name":"composition","value":"100% хлопок"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Аксессуары, S, белый"}]}',
            BARCODE: '1111111111501',
            BRAND: 'easyway',
            CATEGORY: 'Аксессуары',
            DESCRIPTION: 'Аксессуары для тренировок',
            ID: '411',
            GROUP_ID: '4',
            NAME: 'Пояс атлетический, L, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Пояс атлетический, L, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Пояс атлетический, L, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Пояс атлетический, L, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Пояс атлетический, L, white, 4&font=Arial"]',
            PRICE: '500',
            PRICE_INT: '500'
          },
          {
            ARTICLE: 'article-4-12',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"XL"},{"name":"color","value":"white"},{"name":"composition","value":"100% хлопок"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Аксессуары, S, белый"}]}',
            BARCODE: '1111111111501',
            BRAND: 'easyway',
            CATEGORY: 'Аксессуары',
            DESCRIPTION: 'Аксессуары для тренировок',
            ID: '412',
            GROUP_ID: '4',
            NAME: 'Пояс атлетический, XL, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Пояс атлетический, XL, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Пояс атлетический, XL, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Пояс атлетический, XL, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Пояс атлетический, XL, white, 4&font=Arial"]',
            PRICE: '500',
            PRICE_INT: '500'
          },
          {
            ARTICLE: 'article-4-20',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"red"},{"name":"composition","value":"100% хлопок"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Аксессуары, M, красный"}]}',
            BARCODE: '1111111111502',
            BRAND: 'easyway',
            CATEGORY: 'Аксессуары',
            DESCRIPTION: 'Аксессуары для тренировок',
            ID: '420',
            GROUP_ID: '4',
            NAME: 'Пояс атлетический, M, red',
            PICTURES:
              '["https://placehold.co/400x440/red/fff?text=Пояс атлетический, M, red, 1&font=Arial","https://placehold.co/400x440/red/fff?text=Пояс атлетический, M, red, 2&font=Arial","https://placehold.co/400x440/red/fff?text=Пояс атлетический, M, red, 3&font=Arial","https://placehold.co/400x440/red/fff?text=Пояс атлетический, M, red, 4&font=Arial"]',
            PRICE: '500',
            PRICE_INT: '500'
          },
          {
            ARTICLE: 'article-4-21',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"red"},{"name":"composition","value":"100% хлопок"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Аксессуары, M, красный"}]}',
            BARCODE: '1111111111502',
            BRAND: 'easyway',
            CATEGORY: 'Аксессуары',
            DESCRIPTION: 'Аксессуары для тренировок',
            ID: '421',
            GROUP_ID: '4',
            NAME: 'Пояс атлетический, L, red',
            PICTURES:
              '["https://placehold.co/400x440/red/fff?text=Пояс атлетический, L, red, 1&font=Arial","https://placehold.co/400x440/red/fff?text=Пояс атлетический, L, red, 2&font=Arial","https://placehold.co/400x440/red/fff?text=Пояс атлетический, L, red, 3&font=Arial","https://placehold.co/400x440/red/fff?text=Пояс атлетический, L, red, 4&font=Arial"]',
            PRICE: '500',
            PRICE_INT: '500'
          },
          {
            ARTICLE: 'article-4-22',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"XL"},{"name":"color","value":"red"},{"name":"composition","value":"100% хлопок"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Аксессуары, M, красный"}]}',
            BARCODE: '1111111111502',
            BRAND: 'easyway',
            CATEGORY: 'Аксессуары',
            DESCRIPTION: 'Аксессуары для тренировок',
            ID: '422',
            GROUP_ID: '4',
            NAME: 'Пояс атлетический, XL, red',
            PICTURES:
              '["https://placehold.co/400x440/red/fff?text=Пояс атлетический, XL, red, 1&font=Arial","https://placehold.co/400x440/red/fff?text=Пояс атлетический, XL, red, 2&font=Arial","https://placehold.co/400x440/red/fff?text=Пояс атлетический, XL, red, 3&font=Arial","https://placehold.co/400x440/red/fff?text=Пояс атлетический, XL, red, 4&font=Arial"]',
            PRICE: '500',
            PRICE_INT: '500'
          }
        ]
      },
      {
        SIZES: ['XS', 'M', 'L'],
        COLORS: ['black', 'white', 'green'],
        GROUP_ID: '5',
        CATEGORY: 'Лонгсливы',
        ITEMS: [
          {
            ARTICLE: 'article-5-00',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"XS"},{"name":"color","value":"black"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Лонгсливы, XS, черный"}]}',
            BARCODE: '1111111111600',
            BRAND: 'easyway',
            CATEGORY: 'Лонгсливы',
            DESCRIPTION: 'Лонгсливы для тренировок',
            ID: '500',
            GROUP_ID: '5',
            NAME: 'Лонгслив победитель, XS, black',
            PICTURES:
              '["https://placehold.co/400x440/black/fff?text=Лонгслив победитель, XS, black, 1&font=Arial","https://placehold.co/400x440/black/fff?text=Лонгслив победитель, XS, black, 2&font=Arial","https://placehold.co/400x440/black/fff?text=Лонгслив победитель, XS, black, 3&font=Arial","https://placehold.co/400x440/black/fff?text=Лонгслив победитель, XS, black, 4&font=Arial"]',
            PRICE: '2000',
            PRICE_INT: '2000'
          },
          {
            ARTICLE: 'article-5-01',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"black"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Лонгсливы, XS, черный"}]}',
            BARCODE: '1111111111600',
            BRAND: 'easyway',
            CATEGORY: 'Лонгсливы',
            DESCRIPTION: 'Лонгсливы для тренировок',
            ID: '501',
            GROUP_ID: '5',
            NAME: 'Лонгслив победитель, M, black',
            PICTURES:
              '["https://placehold.co/400x440/black/fff?text=Лонгслив победитель, M, black, 1&font=Arial","https://placehold.co/400x440/black/fff?text=Лонгслив победитель, M, black, 2&font=Arial","https://placehold.co/400x440/black/fff?text=Лонгслив победитель, M, black, 3&font=Arial","https://placehold.co/400x440/black/fff?text=Лонгслив победитель, M, black, 4&font=Arial"]',
            PRICE: '2000',
            PRICE_INT: '2000'
          },
          {
            ARTICLE: 'article-5-02',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"black"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Лонгсливы, XS, черный"}]}',
            BARCODE: '1111111111600',
            BRAND: 'easyway',
            CATEGORY: 'Лонгсливы',
            DESCRIPTION: 'Лонгсливы для тренировок',
            ID: '502',
            GROUP_ID: '5',
            NAME: 'Лонгслив победитель, L, black',
            PICTURES:
              '["https://placehold.co/400x440/black/fff?text=Лонгслив победитель, L, black, 1&font=Arial","https://placehold.co/400x440/black/fff?text=Лонгслив победитель, L, black, 2&font=Arial","https://placehold.co/400x440/black/fff?text=Лонгслив победитель, L, black, 3&font=Arial","https://placehold.co/400x440/black/fff?text=Лонгслив победитель, L, black, 4&font=Arial"]',
            PRICE: '2000',
            PRICE_INT: '2000'
          },
          {
            ARTICLE: 'article-5-10',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"XS"},{"name":"color","value":"white"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Лонгсливы, S, белый"}]}',
            BARCODE: '1111111111601',
            BRAND: 'easyway',
            CATEGORY: 'Лонгсливы',
            DESCRIPTION: 'Лонгсливы для тренировок',
            ID: '510',
            GROUP_ID: '5',
            NAME: 'Лонгслив победитель, XS, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Лонгслив победитель, XS, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Лонгслив победитель, XS, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Лонгслив победитель, XS, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Лонгслив победитель, XS, white, 4&font=Arial"]',
            PRICE: '2000',
            PRICE_INT: '2000'
          },
          {
            ARTICLE: 'article-5-11',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"white"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Лонгсливы, S, белый"}]}',
            BARCODE: '1111111111601',
            BRAND: 'easyway',
            CATEGORY: 'Лонгсливы',
            DESCRIPTION: 'Лонгсливы для тренировок',
            ID: '511',
            GROUP_ID: '5',
            NAME: 'Лонгслив победитель, M, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Лонгслив победитель, M, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Лонгслив победитель, M, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Лонгслив победитель, M, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Лонгслив победитель, M, white, 4&font=Arial"]',
            PRICE: '2000',
            PRICE_INT: '2000'
          },
          {
            ARTICLE: 'article-5-12',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"white"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Лонгсливы, S, белый"}]}',
            BARCODE: '1111111111601',
            BRAND: 'easyway',
            CATEGORY: 'Лонгсливы',
            DESCRIPTION: 'Лонгсливы для тренировок',
            ID: '512',
            GROUP_ID: '5',
            NAME: 'Лонгслив победитель, L, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Лонгслив победитель, L, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Лонгслив победитель, L, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Лонгслив победитель, L, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Лонгслив победитель, L, white, 4&font=Arial"]',
            PRICE: '2000',
            PRICE_INT: '2000'
          },
          {
            ARTICLE: 'article-5-30',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"XS"},{"name":"color","value":"green"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Лонгсливы, L, зеленый"}]}',
            BARCODE: '1111111111603',
            BRAND: 'easyway',
            CATEGORY: 'Лонгсливы',
            DESCRIPTION: 'Лонгсливы для тренировок',
            ID: '530',
            GROUP_ID: '5',
            NAME: 'Лонгслив победитель, XS, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Лонгслив победитель, XS, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Лонгслив победитель, XS, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Лонгслив победитель, XS, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Лонгслив победитель, XS, green, 4&font=Arial"]',
            PRICE: '2000',
            PRICE_INT: '2000'
          },
          {
            ARTICLE: 'article-5-31',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"green"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Лонгсливы, L, зеленый"}]}',
            BARCODE: '1111111111603',
            BRAND: 'easyway',
            CATEGORY: 'Лонгсливы',
            DESCRIPTION: 'Лонгсливы для тренировок',
            ID: '531',
            GROUP_ID: '5',
            NAME: 'Лонгслив победитель, M, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Лонгслив победитель, M, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Лонгслив победитель, M, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Лонгслив победитель, M, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Лонгслив победитель, M, green, 4&font=Arial"]',
            PRICE: '2000',
            PRICE_INT: '2000'
          },
          {
            ARTICLE: 'article-5-32',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"green"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Лонгсливы, L, зеленый"}]}',
            BARCODE: '1111111111603',
            BRAND: 'easyway',
            CATEGORY: 'Лонгсливы',
            DESCRIPTION: 'Лонгсливы для тренировок',
            ID: '532',
            GROUP_ID: '5',
            NAME: 'Лонгслив победитель, L, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Лонгслив победитель, L, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Лонгслив победитель, L, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Лонгслив победитель, L, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Лонгслив победитель, L, green, 4&font=Arial"]',
            PRICE: '2000',
            PRICE_INT: '2000'
          }
        ]
      },
      {
        SIZES: ['S', 'M', 'L'],
        COLORS: ['black', 'white', 'green'],
        GROUP_ID: '6',
        CATEGORY: 'Футболки',
        ITEMS: [
          {
            ARTICLE: 'article-6-00',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"S"},{"name":"color","value":"black"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, XS, черный"}]}',
            BARCODE: '1111111111700',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '600',
            GROUP_ID: '6',
            NAME: 'Футболка Крепыш, S, black',
            PICTURES:
              '["https://placehold.co/400x440/black/fff?text=Футболка Крепыш, S, black, 1&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Крепыш, S, black, 2&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Крепыш, S, black, 3&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Крепыш, S, black, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-6-01',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"black"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, XS, черный"}]}',
            BARCODE: '1111111111700',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '601',
            GROUP_ID: '6',
            NAME: 'Футболка Крепыш, M, black',
            PICTURES:
              '["https://placehold.co/400x440/black/fff?text=Футболка Крепыш, M, black, 1&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Крепыш, M, black, 2&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Крепыш, M, black, 3&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Крепыш, M, black, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-6-02',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"black"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, XS, черный"}]}',
            BARCODE: '1111111111700',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '602',
            GROUP_ID: '6',
            NAME: 'Футболка Крепыш, L, black',
            PICTURES:
              '["https://placehold.co/400x440/black/fff?text=Футболка Крепыш, L, black, 1&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Крепыш, L, black, 2&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Крепыш, L, black, 3&font=Arial","https://placehold.co/400x440/black/fff?text=Футболка Крепыш, L, black, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-6-10',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"S"},{"name":"color","value":"white"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, S, белый"}]}',
            BARCODE: '1111111111701',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '610',
            GROUP_ID: '6',
            NAME: 'Футболка Крепыш, S, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Футболка Крепыш, S, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Крепыш, S, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Крепыш, S, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Крепыш, S, white, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-6-11',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"white"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, S, белый"}]}',
            BARCODE: '1111111111701',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '611',
            GROUP_ID: '6',
            NAME: 'Футболка Крепыш, M, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Футболка Крепыш, M, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Крепыш, M, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Крепыш, M, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Крепыш, M, white, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-6-12',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"white"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, S, белый"}]}',
            BARCODE: '1111111111701',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '612',
            GROUP_ID: '6',
            NAME: 'Футболка Крепыш, L, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Футболка Крепыш, L, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Крепыш, L, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Крепыш, L, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Футболка Крепыш, L, white, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-6-30',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"S"},{"name":"color","value":"green"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, L, зеленый"}]}',
            BARCODE: '1111111111703',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '630',
            GROUP_ID: '6',
            NAME: 'Футболка Крепыш, S, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Футболка Крепыш, S, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Крепыш, S, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Крепыш, S, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Крепыш, S, green, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-6-31',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"green"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, L, зеленый"}]}',
            BARCODE: '1111111111703',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '631',
            GROUP_ID: '6',
            NAME: 'Футболка Крепыш, M, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Футболка Крепыш, M, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Крепыш, M, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Крепыш, M, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Крепыш, M, green, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          },
          {
            ARTICLE: 'article-6-32',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"green"},{"name":"composition","value":"90% хлопок, 10% эластан"},{"name":"careInstructions","value":"Ручная стирка при 30°"},{"name":"gender","value":"male"},{"name":"description","value":"Футболки, L, зеленый"}]}',
            BARCODE: '1111111111703',
            BRAND: 'easyway',
            CATEGORY: 'Футболки',
            DESCRIPTION: 'Футболки для тренировок',
            ID: '632',
            GROUP_ID: '6',
            NAME: 'Футболка Крепыш, L, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Футболка Крепыш, L, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Крепыш, L, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Крепыш, L, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Футболка Крепыш, L, green, 4&font=Arial"]',
            PRICE: '1500',
            PRICE_INT: '1500'
          }
        ]
      },
      {
        SIZES: ['S', 'M', 'L', 'XL'],
        COLORS: ['blue', 'white', 'red', 'green'],
        GROUP_ID: '7',
        CATEGORY: 'Шорты',
        ITEMS: [
          {
            ARTICLE: 'article-7-100',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"blue"},{"name":"composition","value":"100% полиэстер"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Шорты, S, белый"}]}',
            BARCODE: '1111111111801',
            BRAND: 'easyway',
            CATEGORY: 'Шорты',
            DESCRIPTION: 'Шорты для тренировок',
            ID: '7100',
            GROUP_ID: '7',
            NAME: 'Шорты чемпион, M, blue',
            PICTURES:
              '["https://placehold.co/400x440/blue/000?text=Шорты чемпион, M, blue, 1&font=Arial","https://placehold.co/400x440/blue/000?text=Шорты чемпион, M, blue, 2&font=Arial","https://placehold.co/400x440/blue/000?text=Шорты чемпион, M, blue, 3&font=Arial","https://placehold.co/400x440/blue/000?text=Шорты чемпион, M, blue, 4&font=Arial"]',
            PRICE: '1000',
            PRICE_INT: '1000'
          },
          {
            ARTICLE: 'article-7-10',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"S"},{"name":"color","value":"white"},{"name":"composition","value":"100% полиэстер"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Шорты, S, белый"}]}',
            BARCODE: '1111111111801',
            BRAND: 'easyway',
            CATEGORY: 'Шорты',
            DESCRIPTION: 'Шорты для тренировок',
            ID: '710',
            GROUP_ID: '7',
            NAME: 'Шорты чемпион, S, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Шорты чемпион, S, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Шорты чемпион, S, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Шорты чемпион, S, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Шорты чемпион, S, white, 4&font=Arial"]',
            PRICE: '1000',
            PRICE_INT: '1000'
          },
          {
            ARTICLE: 'article-7-11',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"white"},{"name":"composition","value":"100% полиэстер"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Шорты, S, белый"}]}',
            BARCODE: '1111111111801',
            BRAND: 'easyway',
            CATEGORY: 'Шорты',
            DESCRIPTION: 'Шорты для тренировок',
            ID: '711',
            GROUP_ID: '7',
            NAME: 'Шорты чемпион, M, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Шорты чемпион, M, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Шорты чемпион, M, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Шорты чемпион, M, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Шорты чемпион, M, white, 4&font=Arial"]',
            PRICE: '1000',
            PRICE_INT: '1000'
          },
          {
            ARTICLE: 'article-7-12',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"white"},{"name":"composition","value":"100% полиэстер"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Шорты, S, белый"}]}',
            BARCODE: '1111111111801',
            BRAND: 'easyway',
            CATEGORY: 'Шорты',
            DESCRIPTION: 'Шорты для тренировок',
            ID: '712',
            GROUP_ID: '7',
            NAME: 'Шорты чемпион, L, white',
            PICTURES:
              '["https://placehold.co/400x440/azure/000?text=Шорты чемпион, L, white, 1&font=Arial","https://placehold.co/400x440/azure/000?text=Шорты чемпион, L, white, 2&font=Arial","https://placehold.co/400x440/azure/000?text=Шорты чемпион, L, white, 3&font=Arial","https://placehold.co/400x440/azure/000?text=Шорты чемпион, L, white, 4&font=Arial"]',
            PRICE: '1000',
            PRICE_INT: '1000'
          },
          {
            ARTICLE: 'article-7-20',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"S"},{"name":"color","value":"red"},{"name":"composition","value":"100% полиэстер"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Шорты, M, красный"}]}',
            BARCODE: '1111111111802',
            BRAND: 'easyway',
            CATEGORY: 'Шорты',
            DESCRIPTION: 'Шорты для тренировок',
            ID: '720',
            GROUP_ID: '7',
            NAME: 'Шорты чемпион, S, red',
            PICTURES:
              '["https://placehold.co/400x440/red/fff?text=Шорты чемпион, S, red, 1&font=Arial","https://placehold.co/400x440/red/fff?text=Шорты чемпион, S, red, 2&font=Arial","https://placehold.co/400x440/red/fff?text=Шорты чемпион, S, red, 3&font=Arial","https://placehold.co/400x440/red/fff?text=Шорты чемпион, S, red, 4&font=Arial"]',
            PRICE: '1000',
            PRICE_INT: '1000'
          },
          {
            ARTICLE: 'article-7-21',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"red"},{"name":"composition","value":"100% полиэстер"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Шорты, M, красный"}]}',
            BARCODE: '1111111111802',
            BRAND: 'easyway',
            CATEGORY: 'Шорты',
            DESCRIPTION: 'Шорты для тренировок',
            ID: '721',
            GROUP_ID: '7',
            NAME: 'Шорты чемпион, M, red',
            PICTURES:
              '["https://placehold.co/400x440/red/fff?text=Шорты чемпион, M, red, 1&font=Arial","https://placehold.co/400x440/red/fff?text=Шорты чемпион, M, red, 2&font=Arial","https://placehold.co/400x440/red/fff?text=Шорты чемпион, M, red, 3&font=Arial","https://placehold.co/400x440/red/fff?text=Шорты чемпион, M, red, 4&font=Arial"]',
            PRICE: '1000',
            PRICE_INT: '1000'
          },
          {
            ARTICLE: 'article-7-22',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"red"},{"name":"composition","value":"100% полиэстер"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Шорты, M, красный"}]}',
            BARCODE: '1111111111802',
            BRAND: 'easyway',
            CATEGORY: 'Шорты',
            DESCRIPTION: 'Шорты для тренировок',
            ID: '722',
            GROUP_ID: '7',
            NAME: 'Шорты чемпион, L, red',
            PICTURES:
              '["https://placehold.co/400x440/red/fff?text=Шорты чемпион, L, red, 1&font=Arial","https://placehold.co/400x440/red/fff?text=Шорты чемпион, L, red, 2&font=Arial","https://placehold.co/400x440/red/fff?text=Шорты чемпион, L, red, 3&font=Arial","https://placehold.co/400x440/red/fff?text=Шорты чемпион, L, red, 4&font=Arial"]',
            PRICE: '1000',
            PRICE_INT: '1000'
          },
          {
            ARTICLE: 'article-7-30',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"S"},{"name":"color","value":"green"},{"name":"composition","value":"100% полиэстер"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Шорты, L, зеленый"}]}',
            BARCODE: '1111111111803',
            BRAND: 'easyway',
            CATEGORY: 'Шорты',
            DESCRIPTION: 'Шорты для тренировок',
            ID: '730',
            GROUP_ID: '7',
            NAME: 'Шорты чемпион, S, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Шорты чемпион, S, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Шорты чемпион, S, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Шорты чемпион, S, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Шорты чемпион, S, green, 4&font=Arial"]',
            PRICE: '1000',
            PRICE_INT: '1000'
          },
          {
            ARTICLE: 'article-7-31',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"M"},{"name":"color","value":"green"},{"name":"composition","value":"100% полиэстер"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Шорты, L, зеленый"}]}',
            BARCODE: '1111111111803',
            BRAND: 'easyway',
            CATEGORY: 'Шорты',
            DESCRIPTION: 'Шорты для тренировок',
            ID: '731',
            GROUP_ID: '7',
            NAME: 'Шорты чемпион, M, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Шорты чемпион, M, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Шорты чемпион, M, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Шорты чемпион, M, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Шорты чемпион, M, green, 4&font=Arial"]',
            PRICE: '1000',
            PRICE_INT: '1000'
          },
          {
            ARTICLE: 'article-7-32',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"L"},{"name":"color","value":"green"},{"name":"composition","value":"100% полиэстер"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Шорты, L, зеленый"}]}',
            BARCODE: '1111111111803',
            BRAND: 'easyway',
            CATEGORY: 'Шорты',
            DESCRIPTION: 'Шорты для тренировок',
            ID: '732',
            GROUP_ID: '7',
            NAME: 'Шорты чемпион, L, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Шорты чемпион, L, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Шорты чемпион, L, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Шорты чемпион, L, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Шорты чемпион, L, green, 4&font=Arial"]',
            PRICE: '1000',
            PRICE_INT: '1000'
          },
          {
            ARTICLE: 'article-7-33',
            ATTRIBUTES:
              '{"sfAttrs":[{"name":"size","value":"XL"},{"name":"color","value":"green"},{"name":"composition","value":"100% полиэстер"},{"name":"careInstructions","value":"Машинная стирка при 40°"},{"name":"gender","value":"male"},{"name":"description","value":"Шорты, L, зеленый"}]}',
            BARCODE: '1111111111803',
            BRAND: 'easyway',
            CATEGORY: 'Шорты',
            DESCRIPTION: 'Шорты для тренировок',
            ID: '733',
            GROUP_ID: '7',
            NAME: 'Шорты чемпион, XL, green',
            PICTURES:
              '["https://placehold.co/400x440/green/fff?text=Шорты чемпион, XL, green, 1&font=Arial","https://placehold.co/400x440/green/fff?text=Шорты чемпион, XL, green, 2&font=Arial","https://placehold.co/400x440/green/fff?text=Шорты чемпион, XL, green, 3&font=Arial","https://placehold.co/400x440/green/fff?text=Шорты чемпион, XL, green, 4&font=Arial"]',
            PRICE: '1000',
            PRICE_INT: '1000'
          }
        ]
      }
    ]
  }

  // const transformedItems = mockData.items.map((group) => {
  //   group.ITEMS = group.ITEMS.map((product) => {
  //     const pictures = parseJSON(product.PICTURES)
  //     const updatePictures: string[] = [] as string[]
  //     console.log(typeof pictures[0])
  //
  //     for (let index = 0; index < 4; index++) {
  //       updatePictures[index] = pictures[0].replace('&font', `, ${index + 1}&font`)
  //     }
  //
  //     product.PICTURES = JSON.stringify(updatePictures)
  //     return product
  //   })
  //
  //   return group
  // })
  //
  // const updatedData: IPaginatedDataRaw<IProductGroupRaw[]> = {
  //   pagination: mockData.pagination,
  //   items: transformedItems
  // }
  //
  // console.log(updatedData)

  return new Promise((resolve) => setTimeout(() => resolve(mockData), 100))
}

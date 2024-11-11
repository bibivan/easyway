import type { IPlacedOrders, IProductGroup, IProductGroupRaw } from '~/types'

export const usePlacedOrdersMock = () => {
  const groups: IProductGroup[] = [
    {
      CATEGORY: 'Легинсы',
      GENDER: 'Женское',
      GROUP_ID: 'EWLG002',
      COLORS: ['000000'],
      SIZES: ['XS'],
      PRICE: '2100',
      ITEMS: [
        {
          ARTICLE: 'EWLG002L',
          FABRIC: {
            composition: 'Полиэстер - Спандекс',
            care: 'Уход: машинная стирка при температуре 40, деликатный отжим, не допускать соприкосновения с липучками и заклёпками.\nСтрана производитель: Россия'
          },
          BARCODE: '2861084960240',
          BRAND: 'EAZYWAY',
          CATEGORY: 'Легинсы',
          DESCRIPTION:
            'Легинсы с высокой посадкой от EAZYWAY — ваш идеальный помощник для любых тренировок! Эти леггинсы обеспечивают непревзойденный комфорт и свободу движений, будь то бег, йога, фитнес или прогулка. Высокая посадка не только корректирует фигуру, но и дарит уверенность на каждом шаге. Специальная вставка – ластовица, обеспечивает абсолютную свободу движений, а эластичная ткань идеально облегает, создавая стильный и удобный образ. Обнови свой гардероб уже сегодня!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
          ID: '3616153',
          GROUP_ID: 'EWLG002',
          NAME: 'Легинсы',
          PICTURES: [
            'https://eazyway.aimagic.today/images/knUB3YJLNqm9tqBEV0lW3uZxubiYAVlBdAlUhpILnWWJJeKt6LD0XWTpcWtU-ynJO6nSAYEeCd1YSAhYO4mG4g__.jpg',
            'https://eazyway.aimagic.today/images/knUB3YJLNqm9tqBEV0lW3lfhrKZACXu7n_Pwa5sj_06Cz0CfUzH38vIFLKQddV86LUDI0ocqZy802wSZitBCXg__.jpg',
            'https://eazyway.aimagic.today/images/knUB3YJLNqm9tqBEV0lW3kwAQAdBpqxLYqQI9C2tKaHy2q1gEyKgqZbZwnaRmWHdlwMdZNyjt1z-IoPzfmP3pg__.jpg',
            'https://eazyway.aimagic.today/images/knUB3YJLNqm9tqBEV0lW3n52w1w5QufqfAoPXyrDv_xRwfDMuOqvziWstOELpiYfRKrLuTONoOLV_i1FTS-UJA__.jpg'
          ],
          PRICE: '2100',
          PRICE_INT: '2100',
          SIZE: 'L',
          COLOR: '000000'
        }
      ],
      BRAND: 'EAZYWAY',
      NEW: 'YES'
    },
    {
      CATEGORY: 'Легинсы',
      GENDER: 'Женское',
      GROUP_ID: 'EWLG002',
      COLORS: ['000000'],
      SIZES: ['L'],
      PRICE: '2100',
      ITEMS: [
        {
          ARTICLE: 'EWLG002L',
          FABRIC: {
            composition: 'Полиэстер - Спандекс',
            care: 'Уход: машинная стирка при температуре 40, деликатный отжим, не допускать соприкосновения с липучками и заклёпками.\nСтрана производитель: Россия'
          },
          BARCODE: '2861084960240',
          BRAND: 'EAZYWAY',
          CATEGORY: 'Легинсы',
          DESCRIPTION:
            'Легинсы с высокой посадкой от EAZYWAY — ваш идеальный помощник для любых тренировок! Эти леггинсы обеспечивают непревзойденный комфорт и свободу движений, будь то бег, йога, фитнес или прогулка. Высокая посадка не только корректирует фигуру, но и дарит уверенность на каждом шаге. Специальная вставка – ластовица, обеспечивает абсолютную свободу движений, а эластичная ткань идеально облегает, создавая стильный и удобный образ. Обнови свой гардероб уже сегодня!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
          ID: '3616153',
          GROUP_ID: 'EWLG002',
          NAME: 'Легинсы',
          PICTURES: [
            'https://eazyway.aimagic.today/images/knUB3YJLNqm9tqBEV0lW3uZxubiYAVlBdAlUhpILnWWJJeKt6LD0XWTpcWtU-ynJO6nSAYEeCd1YSAhYO4mG4g__.jpg',
            'https://eazyway.aimagic.today/images/knUB3YJLNqm9tqBEV0lW3lfhrKZACXu7n_Pwa5sj_06Cz0CfUzH38vIFLKQddV86LUDI0ocqZy802wSZitBCXg__.jpg',
            'https://eazyway.aimagic.today/images/knUB3YJLNqm9tqBEV0lW3kwAQAdBpqxLYqQI9C2tKaHy2q1gEyKgqZbZwnaRmWHdlwMdZNyjt1z-IoPzfmP3pg__.jpg',
            'https://eazyway.aimagic.today/images/knUB3YJLNqm9tqBEV0lW3n52w1w5QufqfAoPXyrDv_xRwfDMuOqvziWstOELpiYfRKrLuTONoOLV_i1FTS-UJA__.jpg'
          ],
          PRICE: '2100',
          PRICE_INT: '2100',
          SIZE: 'L',
          COLOR: '000000'
        }
      ],
      BRAND: 'EAZYWAY',
      NEW: 'YES'
    },
    {
      CATEGORY: 'Комбинезоны',
      GENDER: 'Женское',
      GROUP_ID: 'EWOV3',
      COLORS: ['000000'],
      SIZES: ['M'],
      PRICE: '6400',
      ITEMS: [
        {
          ARTICLE: 'EWOV3M',
          FABRIC: {
            composition: 'Полиэстер - Спандекс',
            care: 'Уход: машинная стирка при температуре 40, деликатный отжим, не допускать соприкосновения с липучками и заклёпками.\nСтрана производитель: Россия'
          },
          BARCODE: '2861084917459',
          BRAND: 'EAZYWAY',
          CATEGORY: 'Комбинезоны',
          DESCRIPTION:
            'Моделирующий комбинезон от EAZYWAY! Этот стильный тренд с двойными бретелями создан для тех, кто ценит комфорт и свободу движения. Элегантный вырез на спине и современный дизайн подчеркнут вашу уверенность и стиль. Не упустите шанс выделиться на тренировках или прогулке и завоевать восхищенные взгляды! Сделайте каждый ваш шаг уверенным и динамичным с EAZYWAY — ваш идеальный партнер в мире спорта!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
          ID: '3592491',
          GROUP_ID: 'EWOV3',
          NAME: 'Комбинезон спортивный',
          PICTURES: [
            'https://eazyway.aimagic.today/images/khRTXKaOL-oE43-tGu1LGX7dNqgdRF9rkd6BbgJhCrhfZHiyDbKL-UEsm0g6_n5ydddTRi04Vifsx4hqx07yEw__.jpg',
            'https://eazyway.aimagic.today/images/khRTXKaOL-oE43-tGu1LGYThBeLXDUKag60-a5ZhEEmTF9Cn2AA4sRSTA6DITVeotUPM76pwdAUy_DV3Yhlbwg__.jpg',
            'https://eazyway.aimagic.today/images/khRTXKaOL-oE43-tGu1LGQo0krrrQz67Ap7rn5CtwgfKqSlTiB1JosOc2GaSkZa_zPDxsF4S3sN6fqyPik5fjw__.jpg',
            'https://eazyway.aimagic.today/images/khRTXKaOL-oE43-tGu1LGaSOUIRGOCEvQ3uowzBLSvK4ASa-MV17TjyXvJvVtowkqX6RmZOoDLxoLNCeHbto8Q__.jpg'
          ],
          PRICE: '6400',
          PRICE_INT: '6400',
          SIZE: 'M',
          COLOR: '000000'
        }
      ],
      BRAND: 'EAZYWAY',
      NEW: 'YES'
    },
    {
      CATEGORY: 'Рашгарды',
      GENDER: 'Мужское',
      GROUP_ID: 'EF23012',
      COLORS: ['1240AB'],
      SIZES: ['XL'],
      PRICE: '5900',
      ITEMS: [
        {
          ARTICLE: 'EF23012XL',
          FABRIC: {
            composition: 'Полиэстер, лайкра',
            care: 'Уход: машинная стирка при температуре 40, деликатный отжим, не допускать соприкосновения с липучками и заклёпками.\nСтрана производитель: Россия'
          },
          BARCODE: '2861084905340',
          BRAND: 'EASYFIT',
          CATEGORY: 'Рашгарды',
          DESCRIPTION:
            'Рашгард для тренировок, изготовленный методом компрессии с термоактивными свойствами. Высокотехнологичная тренировочная одежда, которая поможет вам достичь поставленных целей. \nРашгард созданы для спортсменов, которые любят ощущать одежду, как "вторую кожу". \nСпециальное плотное плетение, которое наделяет ткань повышенными компрессионными свойствами. Компрессионный эффект оптимизирует кровообращение и снижает мышечную усталость, повышая выносливость.\nРашгард подходит для кроссфита (CrossFit), ММА (смешанные единоборства), грэпплинга и джиу джицу, классического и тайского бокса, работы с железом и фитнеса, велоспорта и сёрфинга, для бега по улице и бега с препятствиями.',
          ID: '3592438',
          GROUP_ID: 'EF23012',
          NAME: 'Рашгард easyfit',
          PICTURES: [
            'https://eazyway.aimagic.today/images/8MWZzXrrZRWTG8zHHKAPvAl_JDNKnD29KrQuFsioZxcHnn073ef7yKll1-WMWUm3zq4dADxmucrt5xWcA-0URQ__.jpg',
            'https://eazyway.aimagic.today/images/8MWZzXrrZRWTG8zHHKAPvCHZViMPHNSgrSIvgG0ThNeJTfkDvnOj6vm2hF_fryyvX14j8xvHl048IIwxd_QD0A__.jpg',
            'https://eazyway.aimagic.today/images/8MWZzXrrZRWTG8zHHKAPvDLz50_jv8Pe6hroSWiDUhaNl_HcZ76no50LrAqJWMCjpih776e1k2DZZCquSaoxbQ__.jpg',
            'https://eazyway.aimagic.today/images/8MWZzXrrZRWTG8zHHKAPvPs97J683X-fl0pjT9mkldlllKEGJzHKWD66_KzJ6uxSafMjg4xfTi1WQoy0S4dCrQ__.jpg',
            'https://eazyway.aimagic.today/images/8MWZzXrrZRWTG8zHHKAPvJ3kJ33lUMOZrYtFEsc3ipwN6Jm3MVcpN7Z3xPBUzDsK_GYx0O_ZdayxHL01DJmw5A__.jpg'
          ],
          PRICE: '5900',
          PRICE_INT: '5900',
          SIZE: 'XL',
          COLOR: '1240AB'
        }
      ],
      BRAND: 'EASYFIT',
      NEW: 'NO'
    },
    {
      CATEGORY: 'Шорты',
      GENDER: 'Мужское',
      GROUP_ID: 'EF23018',
      COLORS: ['000000'],
      SIZES: ['XXL'],
      PRICE: '3600',
      ITEMS: [
        {
          ARTICLE: 'EF23018XXL',
          FABRIC: {
            composition: 'Полиэстер, лайкра',
            care: 'Уход: машинная стирка при температуре 40, деликатный отжим.\nСтрана производитель: Россия'
          },
          BARCODE: '2861084905173',
          BRAND: 'EASYFIT',
          CATEGORY: 'Шорты',
          DESCRIPTION:
            'Легкие шорты для беговых тренировок и любых активных видов спорта. Также подходят для спортивной ходьбы, велоспорта, лыжероллерных и силовых тренировок, фитнеса и активного отдыха.\nОтличный вариант для занятий в помещении и на улице в особенно жаркую погоду.\nРазрезы по бокам для большего комфорта во время активности. Материал с механическим стрейчем отлично тянется и обеспечит свободу движений.  ',
          ID: '3592458',
          GROUP_ID: 'EF23018',
          NAME: 'Шорты easyfit',
          PICTURES: [
            'https://eazyway.aimagic.today/images/8MWZzXrrZRWTG8zHHKAPvE2kOtegFVY4j_NPPncU2P0uhdJrg4yCQkGhmffbVqZVwkHjRclamqT_YAx2BOV8Lw__.jpg',
            'https://eazyway.aimagic.today/images/8MWZzXrrZRWTG8zHHKAPvExUbfcdEnkpwB3ZD0FukdXdRQ-Mo7bT_3I0VGdiWQhnOLruMb8-XLO2vJw9bdPANg__.jpg',
            'https://eazyway.aimagic.today/images/8MWZzXrrZRWTG8zHHKAPvEBVm4rNtfJ3BWSd1_34Xq5Vyo3bHOMf_Yh4bR4Y-dmyiDgVeYTEWyphFsKa-fyGxw__.jpg',
            'https://eazyway.aimagic.today/images/8MWZzXrrZRWTG8zHHKAPvLaooKARpKNdGDrdoIeTGXnS_hwDC1W8xbRHC6ofmv0ZV7OD2fcdtqV_T1cvh_vYZA__.jpg'
          ],
          PRICE: '3600',
          PRICE_INT: '3600',
          SIZE: 'XXL',
          COLOR: '000000'
        }
      ],
      BRAND: 'EASYFIT',
      NEW: 'NO'
    },
    {
      CATEGORY: 'Футболки',
      GENDER: 'Мужское',
      GROUP_ID: 'EF23016',
      COLORS: ['000000'],
      SIZES: ['S'],
      PRICE: '3800',
      ITEMS: [
        {
          ARTICLE: 'EF23016S',
          FABRIC: {
            composition: 'Полиэстер, лайкра',
            care: 'Уход: машинная стирка при температуре 40, деликатный отжим, не допускать соприкосновения с липучками и заклёпками.\nСтрана производитель: Россия'
          },
          BARCODE: '2000000000107',
          BRAND: 'EASYFIT',
          CATEGORY: 'Футболки',
          DESCRIPTION:
            'Ультратонкая футболка для бега, тренировок и разминок на открытом воздухе, велоспорта и легкой атлетики, активного отдыха, треккинга. Выполнена путем комбинации двух видов ткани, легкая, эластичная, комфортная модель. Мягкий быстросохнущий материал быстро отводит влагу от тела, оставляя кожу сухой. Практически не ощущается на теле, не сковывает движений. Плоские швы.',
          ID: '3592413',
          GROUP_ID: 'EF23016',
          NAME: 'Футболка easyfit',
          PICTURES: [
            'https://eazyway.aimagic.today/images/8MWZzXrrZRWTG8zHHKAPvFxxKEClVjz2ipWqmFl0e5tFSVCVmSYYi3wLRnvsooUMKDaNJnYNLF5MniV1WZm9zg__.jpg',
            'https://eazyway.aimagic.today/images/8MWZzXrrZRWTG8zHHKAPvEHJ06K8wwcDg5SfylLQK73ZkyJVIS8Uk9chrFva0FOV3UpK5TOGJmD2LKO_-3bAiA__.jpg',
            'https://eazyway.aimagic.today/images/8MWZzXrrZRWTG8zHHKAPvBf8P0Zq-3O1pid-QMMtftwcV7ngWah4XvNBIz8Uv4Ajb7Bq7148uPxFyOhDtDgWpA__.jpg',
            'https://eazyway.aimagic.today/images/8MWZzXrrZRWTG8zHHKAPvHw4wYv0qk9EwgpXX8q5tgubU4o2gR_HiLyiFu3nFa6kzJ4QxFoBQiIUemWCnSbung__.jpg',
            'https://eazyway.aimagic.today/images/8MWZzXrrZRWTG8zHHKAPvBUGfh0RLms2jpWLN5IeoYFh4qlmZJPl8jXQRzaqOZjjXYAEz8esO6q_O3IXe417Tw__.jpg',
            'https://eazyway.aimagic.today/images/8MWZzXrrZRWTG8zHHKAPvJXQjPMlTPnGH-xiQObAa2-Af5Zn7zWs4JI3_AThGUD-74Pb5A9bu2dXBfrGXRggmw__.jpg',
            'https://eazyway.aimagic.today/images/8MWZzXrrZRWTG8zHHKAPvK0G3R5fJapIPbXnadMFh9eRNOhxU_IXxm7Jeqz0-_5AW1qIrMp_Vtfggf8q3AQCyw__.jpg'
          ],
          PRICE: '3800',
          PRICE_INT: '3800',
          SIZE: 'S',
          COLOR: '000000'
        }
      ],
      BRAND: 'EASYFIT',
      NEW: 'NO'
    }
  ].map((group: IProductGroupRaw) => productGroupRawToProductGroup(group))

  const userMock: IPlacedOrders = {
    '12.06.2024': groups,
    '23.12.2023': groups,
    '04.06.2022': groups,
    '11.01.2021': groups
  }

  return useMockFetch('userMock', userMock)
}

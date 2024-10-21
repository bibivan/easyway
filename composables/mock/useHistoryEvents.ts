import type { IHistoryEvent } from '~/types/about'

export const useHistoryEvents = (): IHistoryEvent[] => {
  return [
    { date: 'Апрель\n2019', description: 'Старт работы\nпо\u00A0созданию бренда EAZYWAY' },
    { date: 'Июль\n2019', description: 'Первая продажа. Запуск работы\nсайта, склада, доставки' },
    { date: 'Февраль\n2020', description: 'Открытие первого магазина\nв Москве' },
    { date: 'Сентябрь\n2021', description: '500 000 единиц\nпроданной продукции' },
    { date: 'Апрель\n2022', description: 'Топ-100 поставщиков\nWildberries' },
    {
      date: 'Июнь\n2024',
      description:
        'Официальное приобретение торговой марки Eazyway компанией «ООО Капитал Инвест» для усиления и масштабирования бренда'
    }
  ]
}

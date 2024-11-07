import type { ITableData } from '~/types'

export const useSizeChartMock = () => {
  const womanSizeChart: ITableData<['INT', 'EU', 'IT', 'RUS', 'US', 'UK'], string> = {
    headers: ['INT', 'EU', 'IT', 'RUS', 'US', 'UK'],
    rows: [
      ['XS', '36', '38', '42', '6', '8'],
      ['S', '38', '40', '44', '8', '10'],
      ['M', '40', '42', '46', '10', '12'],
      ['L', '42', '44', '48', '12', '14'],
      ['XL', '44', '46', '50', '14', '16'],
      ['XXL', '46', '48', '52', '16', '18'],
      ['XXXL', '48', '50', '54', '18', '20']
    ]
  }

  const manSizeChart: ITableData<['INT', 'EU', 'IT', 'RUS', 'US', 'UK'], string> = {
    headers: ['INT', 'EU', 'IT', 'RUS', 'US', 'UK'],
    rows: [
      ['XS', '36', '38', '42', '6', '8'],
      ['S', '38', '40', '44', '8', '10'],
      ['M', '40', '42', '46', '10', '12'],
      ['L', '42', '44', '48', '12', '14'],
      ['XL', '44', '46', '50', '14', '16'],
      ['XXL', '46', '48', '52', '16', '18'],
      ['XXXL', '48', '50', '54', '18', '20']
    ]
  }

  return {
    womanSizeChart,
    manSizeChart
  }
}

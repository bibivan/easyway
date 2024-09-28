import type { EPaymentType, TNullable, TRawDateString } from '~/types'

export type TCountry = 'RUS'

export interface IDeliveryCourier {
  name: string
  delivery_code: string
  delivery_id: number
  cost: number
  insurance: number
  encashment: number
  payment_types: EPaymentType
  delivery_date: TRawDateString
  possible_dates: TRawDateString[]
  place_id: number
  transport_api_code: string
}

export interface IDeliveryPoint {
  name: string
  delivery_code: string
  delivery_id: number
  cost: number
  insurance: number
  encashment: number
  payment_types: EPaymentType
  delivery_date: TRawDateString
  place_id: number
  transport_api_code: string
  comment_address: string
  gps: [number, number]
  address: string
  payment_for_terminal: number
  fitting_room: number
  phone: string
  schedule: string
  image: TNullable<string>
}
export interface IDeliveriesDataItem {
  name: string
  kladr: string
  fias: string
  region_name: string
  type_name: string
  country: TCountry
  weight: number
  parcel_size: [number, number, number]
  delivery_types: {
    [key: string]: IDeliveryCourier | IDeliveryPoint
  }
}

export interface IDeliveriesDataRaw {
  data: IDeliveriesDataItem[]
  success: boolean
}

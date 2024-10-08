import {
  type TNullable,
  type IAddressSuggestion,
  type IDeliveryCourier,
  type IDeliveryPoint,
  type ICartItem,
  EDeliveryType
} from '~/types'

export enum EPaymentType {
  CARD = 2
}

export interface IPaymentType {
  name: string
  id: number
}

export interface IOrderState {
  addressData: TNullable<IAddressSuggestion>
  addressString: TNullable<string>
  fiases: TNullable<Array<TNullable<string>>>
  fias: TNullable<string>
  kladr: TNullable<string>
  placeId: TNullable<number>
  postalCode: TNullable<string>
  phone: TNullable<string>
  name: TNullable<string>
  surname: TNullable<string>
  middleName: TNullable<string>
  email: TNullable<string>
  comment: TNullable<string>
  courierDelivery: TNullable<EDeliveryType>
  deliveryCouriers: TNullable<IDeliveryCourier[]>
  deliveryPoints: TNullable<IDeliveryPoint[]>
  pickedCourier: TNullable<IDeliveryCourier>
  pickedPoint: TNullable<IDeliveryPoint>
  pickedPointAddress: TNullable<string>
  ruPostDelivery: TNullable<boolean>
  paymentType: TNullable<EPaymentType>
  orderSum: TNullable<number>
  deliveryPrice: TNullable<number>
  price: TNullable<number>
  orderWeight: TNullable<number>
}

export interface IPaymentType {
  name: string
  id: number
}

export interface ISendOrderPayload {
  FIAS: string
  KLADR: string
  DATE_CREATE: string
  STATUS: string
  NAME: string
  LAST_NAME: string
  MIDDLE_NAME: string
  PHONE: string
  EMAIL: string
  DELIVERY_PRICE: number
  WEIGHT: number
  PRICE: number
  ADDRESS: string
  PVZ_ADDRESS: string
  PAID: boolean
  PAYMENT_TYPE: number
  PLACE_ID: number
  SEND_ORDER_TO_SDT: boolean
  RU_POST_DELIVERY: boolean
  COURIER_DELIVERY: boolean
  B2B_CLIENT: boolean
  LOYALTY_POINT: number
  DELIVERY_INTERVAL: number
  COMMENT: string
  PRODUCTS: ICartItem[]
}

export interface ISentOrderRaw extends ISendOrderPayload {
  ID: string
}

export interface ISendOrderResponse {
  date: string
  SF: {
    writeOffId: TNullable<string>
    accrualId: TNullable<string>
    orderAdd: boolean
    orderUpdate: boolean
    orderId: string
    clientUpdate: boolean
    newClient: boolean
    clientId: string
    clientLoyalty: boolean
    clientLoyaltyPoint: number
    orderSum: number
    dateTime: string
  }
  SDT: false
  raw: ISentOrderRaw
}

export interface IPromoData {
  value: TNullable<number>
  code: TNullable<string>
}

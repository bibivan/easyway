import dayjs from 'dayjs'
import { EDeliveryType, type ICartItem, type IOrderState, type ISendOrderPayload } from '~/types'

export const useOrderStore = defineStore('order_store', () => {
  const orderState: IOrderState = reactive({
    addressData: null,
    addressString: null,
    fiases: null,
    fias: null,
    kladr: null,
    placeId: null,
    postalCode: null,
    phone: null,
    name: null,
    surname: null,
    middleName: null,
    email: null,
    comment: null,
    courierDelivery: null,
    deliveryCouriers: null,
    deliveryPoints: null,
    pickedCourier: null,
    pickedPoint: null,
    pickedPointAddress: null,
    ruPostDelivery: null,
    paymentType: null,
    orderSum: null,
    deliveryPrice: null,
    price: null,
    orderWeight: null
  })

  const getOrderPayload = (cartContent: ICartItem[]) => {
    return {
      FIAS: orderState.fias as string,
      KLADR: orderState.kladr || '',
      DATE_CREATE: dayjs().format('DD.MM.YY HH:mm:ss'),
      STATUS: 'new',
      NAME: orderState.name as string,
      LAST_NAME: orderState.surname as string,
      MIDDLE_NAME: orderState.middleName as string,
      PHONE: '7' + orderState.phone?.slice(-10),
      EMAIL: orderState.email as string,
      DELIVERY_PRICE: orderState.deliveryPrice as number,
      WEIGHT: 100, // todo: решить вопрос с ценой и весами
      PRICE: orderState.price as number,
      ADDRESS: orderState.addressString as string,
      PVZ_ADDRESS: orderState.pickedPointAddress as string,
      PAID: false,
      PAYMENT_TYPE: orderState.paymentType as number,
      PLACE_ID: orderState.placeId as number,
      SEND_ORDER_TO_SDT: true,
      RU_POST_DELIVERY: orderState.ruPostDelivery as boolean,
      COURIER_DELIVERY: orderState.courierDelivery === EDeliveryType.COURIER,
      B2B_CLIENT: false,
      LOYALTY_POINT: 0,
      DELIVERY_INTERVAL: 0,
      COMMENT: orderState.comment || '',
      PRODUCTS: cartContent
    }
  }

  const sendOrder = async <ISendOrderResponse>(payload: ISendOrderPayload) => {
    return await useClientFetch<ISendOrderResponse>('orders/add', {
      method: 'POST',
      body: payload
    })
  }

  return {
    orderState,
    getOrderPayload,
    sendOrder
  }
})

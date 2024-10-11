import dayjs from 'dayjs'
import { EDeliveryType, type ICartItem, type IOrder, type ISendOrderPayload } from '~/types'

export const useOrderStore = () => {
  const order = useState<IOrder>('order_store', () => ({
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
  }))

  const getOrderPayload = (cartContent: ICartItem[]) => {
    return {
      FIAS: order.value.fias as string,
      KLADR: order.value.kladr || '',
      DATE_CREATE: dayjs().format('DD.MM.YY HH:mm:ss'),
      STATUS: 'new',
      NAME: order.value.name as string,
      LAST_NAME: order.value.surname as string,
      MIDDLE_NAME: order.value.middleName as string,
      PHONE: '7' + order.value.phone?.slice(-10),
      EMAIL: order.value.email as string,
      DELIVERY_PRICE: order.value.deliveryPrice as number,
      WEIGHT: 100, // todo: решить вопрос с ценой и весами
      PRICE: order.value.price as number,
      ADDRESS: order.value.addressString as string,
      PVZ_ADDRESS: order.value.pickedPointAddress as string,
      PAID: false,
      PAYMENT_TYPE: order.value.paymentType as number,
      PLACE_ID: order.value.placeId as number,
      SEND_ORDER_TO_SDT: true,
      RU_POST_DELIVERY: order.value.ruPostDelivery as boolean,
      COURIER_DELIVERY: order.value.courierDelivery === EDeliveryType.COURIER,
      B2B_CLIENT: false,
      LOYALTY_POINT: 0,
      DELIVERY_INTERVAL: 0,
      COMMENT: order.value.comment || '',
      PRODUCTS: cartContent
    }
  }

  const sendOrder = async <ISendOrderResponse>(payload: ISendOrderPayload) => {
    return await useBaseFetch<ISendOrderResponse>('orders/add', {
      method: 'POST',
      body: payload
    })
  }

  const clearOrder = () => {
    Object.keys(order.value).forEach((key) => {
      order.value[key as keyof IOrder] = null
    })
  }

  return {
    order,
    getOrderPayload,
    sendOrder,
    clearOrder
  }
}

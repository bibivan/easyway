import dayjs from 'dayjs'
import {
  EDeliveryType,
  type ICartItem,
  type IOrder,
  type ISendOrderPayload,
  type ISendOrderResponse
} from '~/types'

export const useOrderStore = defineStore('order_store', () => {
  const order = reactive<IOrder>({
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
      FIAS: order.fias as string,
      KLADR: order.kladr || '',
      DATE_CREATE: dayjs().format('DD.MM.YY HH:mm:ss'),
      STATUS: 'new',
      NAME: order.name as string,
      LAST_NAME: order.surname as string,
      MIDDLE_NAME: order.middleName as string,
      PHONE: '7' + order.phone?.slice(-10),
      EMAIL: order.email as string,
      DELIVERY_PRICE: order.deliveryPrice as number,
      WEIGHT: 100, // todo: решить вопрос с ценой и весами
      PRICE: order.price as number,
      ADDRESS: order.addressString as string,
      PVZ_ADDRESS: order.pickedPointAddress as string,
      PAID: false,
      PAYMENT_TYPE: order.paymentType as number,
      PLACE_ID: order.placeId as number,
      SEND_ORDER_TO_SDT: true,
      RU_POST_DELIVERY: order.ruPostDelivery as boolean,
      COURIER_DELIVERY: order.courierDelivery === EDeliveryType.COURIER,
      B2B_CLIENT: false,
      LOYALTY_POINT: 0,
      DELIVERY_INTERVAL: 0,
      COMMENT: order.comment || '',
      PRODUCTS: cartContent
    }
  }

  const clearOrder = () => {
    Object.keys(order).forEach((key) => {
      order[key as keyof IOrder] = null
    })
  }

  const sendOrder = async (cartData: ICartItem[]) => {
    const payload = getOrderPayload(cartData)
    const orderResponse = await useApiFetch<ISendOrderResponse, ISendOrderResponse>('orders/add', {
      method: 'POST',
      body: payload
    })

    const sf = orderResponse.data.value?.SF
    if (orderResponse.error.value || !sf?.orderId) {
      useNuxtApp().$toast('Не удалось отправить заказ')
      throw new Error()
    }

    const linkResponse = await useApiFetch<{ Link: string }, { Link: string }>('payment/get-url', {
      method: 'POST',
      body: {
        orderId: sf.orderId
      }
    })

    const link = linkResponse.data.value?.Link
    if (link) {
      clearOrder()
      await navigateTo(link, { external: true })
    } else {
      useNuxtApp().$toast('Не удалось отправить заказ')
      throw new Error()
    }
  }

  return {
    order,
    getOrderPayload,
    sendOrder,
    clearOrder
  }
})

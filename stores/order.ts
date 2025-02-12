import dayjs from 'dayjs'
import {
  EDeliveryType,
  type ICartItem,
  type IOrder,
  type IOrderPayload,
  type IOrderPayloadProduct, IPromoData,
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

  const getOrderPayload = (cartContent: ICartItem[], promoContent: IPromoData): IOrderPayload => {
    const products: IOrderPayloadProduct[] = cartContent.map((item) => {
      return {
        NAME: item.name,
        ARTICLE: item.article,
        SKU: item.barcode,
        CNT: item.cnt,
        PRICE: item.price,
        ID: item.id,
        size: {
          LENGTH: null,
          WIDTH: null,
          HEIGHT: null,
          WEIGHT: null
        }
      }
    })

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
      COMMENT: order.comment + "||"+ promoContent.code+";"+promoContent.amount+";"+promoContent.balance,
      PRODUCTS: products
    }
  }

  const clearOrder = () => {
    Object.keys(order).forEach((key) => {
      order[key as keyof IOrder] = null
    })
  }

  const clearDelivery = () => {
    order.addressData = null
    order.addressString = null
    order.pickedCourier = null
    order.pickedPoint = null
    order.pickedPointAddress = null
    order.deliveryPoints = null
    order.deliveryCouriers = null
    order.fiases = null
    order.fias = null
    order.kladr = null
    order.placeId = null
    order.postalCode = null
    order.ruPostDelivery = null
  }

  const sendOrder = async (cartData: ICartItem[], promoData: IPromoData) => {
    const payload = getOrderPayload(cartData, promoData);
    if (promoData.balance === true) {
      await fetch('https://promo.aimagic.today/use-promo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ promo: promoData.code, amount: promoData.amount })
      });
    }
    const { SF } = await useSFFetch<ISendOrderResponse>('orders/add', { body: payload })

    if (!SF?.orderId) throw new Error()

    const { Link } = await useSFFetch<{ Link: string }>('payment/get-url', {
      body: { orderId: SF.orderId }
    })

    if (Link) {
      await navigateTo(Link, { external: true })
      clearOrder()
    } else throw new Error()
  }

  return {
    order,
    getOrderPayload,
    clearOrder,
    clearDelivery,
    sendOrder
  }
})

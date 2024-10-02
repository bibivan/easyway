<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators'
import {
  EDeliveryType,
  type IDeliveriesDataItem,
  type IDeliveriesDataRaw,
  type IDeliveryCourier,
  type IDeliveryPoint,
  type TNullable
} from '~/types'

const { orderState } = useOrderStore()

const separateCouriersAndPickupPoints = (data: IDeliveriesDataItem) => {
  const deliveries = Object.values(data.delivery_types)
  const courierDeliveryIds = [1, 4, 7] // todo: выяснить про доступные курьерки
  const deliveryCouriers = [] as IDeliveryCourier[]
  const deliveryPoints = [] as IDeliveryPoint[]
  // const courierDeliveryIds = [1, 4, 7, 22]
  // const postPickupDeliveryIds = [3, 5, 21]

  deliveries.forEach((item) => {
    if (courierDeliveryIds.includes(item?.delivery_id))
      deliveryCouriers.push(item as IDeliveryCourier)
    else if ('gps' in item && item.gps?.length) {
      deliveryPoints.push(item)
    }
  })

  orderState.deliveryCouriers = deliveryCouriers
  orderState.deliveryPoints = deliveryPoints
  orderState.fias = data.fias
}

// todo: решить вопрос с весом и размерами заказа

const getDeliveries = async (fiases: Array<TNullable<string>>) => {
  for (const fias of fiases) {
    if (fias) {
      const { data, success } = await useClientFetch<IDeliveriesDataRaw>('pickup-sdt/get-pickups', {
        method: 'POST',
        body: {
          fias: fias,
          payment_type: orderState.paymentType,
          company: 0,
          weight: 100,
          parcel_size: [10, 10, 10],
          order_sum: 1000
        }
      })

      if (success) return separateCouriersAndPickupPoints(data[0])
    }
  }
}

watch(
  () => orderState.fiases,
  async (val) => {
    if (val) await getDeliveries(val)
  },
  { deep: true }
)

// валидация
const validationRules = computed(() => ({
  courierDelivery: {
    required: helpers.withMessage('Выберите способ доставки', () => !!orderState.courierDelivery)
  }
}))
const v$ = useVuelidate(validationRules, orderState)
</script>

<template>
  <div class="delivery-types">
    <div class="delivery-types__tabs">
      <button
        class="delivery-types__tab"
        :class="{
          'delivery-types__tab_active': orderState.courierDelivery === EDeliveryType.COURIER
        }"
        @click.prevent="orderState.courierDelivery = EDeliveryType.COURIER"
      >
        Курьер
      </button>
      <button
        class="delivery-types__tab"
        :class="{
          'delivery-types__tab_active': orderState.courierDelivery === EDeliveryType.PICKUP
        }"
        @click.prevent="orderState.courierDelivery = EDeliveryType.PICKUP"
      >
        Пункт выдачи
      </button>
      <BaseErrorMessage
        class="delivery-types__error"
        :error-meassage="v$.$errors[0]?.$message"
      />
    </div>

    <div
      v-if="isNotNull(orderState.courierDelivery)"
      class="delivery-types__tab-content"
    >
      <ClientOnly>
        <CheckoutDeliveryCouriers
          v-show="
            orderState.courierDelivery === EDeliveryType.COURIER &&
            orderState.addressData?.data?.house
          "
        />
      </ClientOnly>
      <ClientOnly>
        <CheckoutDeliveryPoints v-show="orderState.courierDelivery === EDeliveryType.PICKUP" />
      </ClientOnly>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'checkout-delivery-types';
</style>

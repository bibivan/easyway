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

const { order } = useOrderStore()

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

  order.deliveryCouriers = deliveryCouriers
  order.deliveryPoints = deliveryPoints
  order.fias = data.fias
}

// todo: решить вопрос с весом и размерами заказа

const getDeliveries = async (fiases: Array<TNullable<string>>) => {
  for (const fias of fiases) {
    if (fias) {
      const { data, success } = await useClientFetch<IDeliveriesDataRaw>('pickup-sdt/get-pickups', {
        method: 'POST',
        body: {
          fias: fias,
          payment_type: order.paymentType,
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

const handleSetDeliveryType = (type: EDeliveryType) => (order.courierDelivery = type)

watch(
  () => order.fiases,
  async (val) => {
    if (val) await getDeliveries(val)
  },
  { deep: true }
)

// валидация
const validationRules = computed(() => ({
  courierDelivery: {
    required: helpers.withMessage('Выберите способ доставки', () => !!order.courierDelivery)
  },
  pickedCourier: {
    required: helpers.withMessage('Выберите курьерскую службу', () =>
      order.courierDelivery === EDeliveryType.COURIER ? !!order?.pickedCourier : true
    )
  },
  pickedPoint: {
    required: helpers.withMessage('Выберите пункт выдачи', () =>
      order.courierDelivery === EDeliveryType.PICKUP ? !!order.pickedPoint : true
    )
  }
}))
const v$ = useVuelidate(validationRules, order)
const { hasError, errorMessage } = useValidationInfo(v$)
</script>

<template>
  <div class="delivery-types">
    <div class="delivery-types__tabs">
      <button
        class="delivery-types__tab"
        :class="{
          'delivery-types__tab_active': order.courierDelivery === EDeliveryType.COURIER
        }"
        @click.prevent="handleSetDeliveryType(EDeliveryType.COURIER)"
      >
        Курьер
      </button>
      <button
        class="delivery-types__tab"
        :class="{
          'delivery-types__tab_active': order.courierDelivery === EDeliveryType.PICKUP
        }"
        @click.prevent="handleSetDeliveryType(EDeliveryType.PICKUP)"
      >
        Пункт выдачи
      </button>
      <BaseErrorMessage
        v-if="hasError"
        class="delivery-types__error"
        :message="errorMessage"
      />
    </div>

    <div
      v-if="isNotNull(order.courierDelivery) && order.addressData"
      class="delivery-types__tab-content"
    >
      <ClientOnly>
        <CheckoutDeliveryCouriers
          v-show="order.courierDelivery === EDeliveryType.COURIER && order.addressData?.data?.house"
        />
      </ClientOnly>
      <ClientOnly>
        <CheckoutDeliveryPoints v-show="order.courierDelivery === EDeliveryType.PICKUP" />
      </ClientOnly>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'checkout-delivery-types';
</style>

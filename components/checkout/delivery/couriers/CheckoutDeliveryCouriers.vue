<script setup lang="ts">
import type { TNullable } from '~/types'

const { order } = useOrderStore()
const pickedCourier = ref<TNullable<string>>(null)

watch(pickedCourier, (val) => {
  if (order.deliveryCouriers) {
    order.pickedCourier =
      order.deliveryCouriers.find((item) => item.name === val) || order.pickedCourier
  }
})

watch(
  () => order.pickedCourier,
  (val) => {
    if (val) {
      // const postCourierDeliveryIds = [7, 22]
      const postCourierDeliveryIds = [7]

      if (postCourierDeliveryIds.includes(val.delivery_id)) order.ruPostDelivery = true

      order.deliveryPrice = val.cost
      order.placeId = val.place_id
      order.addressString = order.addressData?.unrestricted_value || null
      order.pickedPointAddress = null
    }
  }
)
</script>

<template>
  <div
    v-if="order.deliveryCouriers"
    class="form__radios delivery-couriers"
  >
    <BaseRadio
      v-for="(deliveryCourier, index) in order.deliveryCouriers"
      :id="deliveryCourier.transport_api_code + deliveryCourier.delivery_code"
      :key="deliveryCourier.delivery_code + index"
      v-model="pickedCourier"
      :value="deliveryCourier.name"
      :label="
        deliveryCourier.name +
        ' доставка ' +
        deliveryCourier.delivery_date +
        ' за ' +
        deliveryCourier.cost +
        ' руб'
      "
    />
  </div>
</template>
<style lang="scss" scoped>
@import 'checkout-delivery-couriers';
</style>

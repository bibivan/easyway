<script setup lang="ts">
import type { TNullable } from '~/types'

const { order } = useOrderStore()
const pickedCourier = ref<TNullable<string>>(null)

watch(pickedCourier, (val) => {
  if (order.value.deliveryCouriers) {
    order.value.pickedCourier =
      order.value.deliveryCouriers.find((item) => item.name === val) || order.value.pickedCourier
  }
})

watch(
  () => order.value.pickedCourier,
  (val) => {
    if (val) {
      // const postCourierDeliveryIds = [7, 22]
      const postCourierDeliveryIds = [7]

      if (postCourierDeliveryIds.includes(val.delivery_id)) order.value.ruPostDelivery = true

      order.value.deliveryPrice = val.cost
      order.value.placeId = val.place_id
      order.value.addressString = order.value.addressData?.unrestricted_value || null
      order.value.pickedPointAddress = null
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
      :label="deliveryCourier.name + ' доставка ' + deliveryCourier.delivery_date"
    />
  </div>
</template>
<style lang="scss" scoped>
@import 'checkout-delivery-couriers';
</style>

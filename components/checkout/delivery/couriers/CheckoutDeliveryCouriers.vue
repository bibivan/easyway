<script setup lang="ts">
import { helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { EDeliveryType, type TNullable } from '~/types'
const { orderState } = useOrderStore()
const pickedCourier = ref<TNullable<string>>(null)

// валидация
const validationRules = computed(() => ({
  pickedCourier: {
    required: helpers.withMessage('Выберите курьерскую службу', () =>
      orderState.courierDelivery === EDeliveryType.COURIER ? !!orderState?.pickedCourier : true
    )
  }
}))

useVuelidate(validationRules, orderState)

watch(pickedCourier, (val) => {
  if (orderState.deliveryCouriers) {
    orderState.deliveryCouriers.find((item) => item.name === val)
  }
})

watch(
  () => orderState.pickedCourier,
  (val) => {
    if (val) {
      // const postCourierDeliveryIds = [7, 22]
      const postCourierDeliveryIds = [7]

      if (postCourierDeliveryIds.includes(val.delivery_id)) orderState.ruPostDelivery = true

      orderState.deliveryPrice = val.cost
      orderState.placeId = val.place_id
      orderState.addressString = orderState.addressData?.unrestricted_value || null
      orderState.pickedPointAddress = null
    }
  }
)
</script>

<template>
  <div class="delivery-couriers">
    <BaseRadio
      v-for="(deliveryCourier, index) in orderState.deliveryCouriers"
      :id="deliveryCourier.transport_api_code + deliveryCourier.delivery_code"
      :key="deliveryCourier.delivery_code + index"
      v-model="pickedCourier"
      :value="deliveryCourier.name"
      :label="deliveryCourier.name + ' доставка ' + deliveryCourier.delivery_date"
      theme="easynutrition"
    />
  </div>
</template>
<style lang="scss" scoped>
@import 'checkout-delivery-couriers';
</style>

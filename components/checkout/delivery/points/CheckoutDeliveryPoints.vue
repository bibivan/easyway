<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators'
import { EDeliveryType, type TNullable } from '~/types'

const { orderState } = useOrderStore()

// валидация
const validationRules = computed(() => ({
  pickedPoint: {
    required: helpers.withMessage('Выберите пункт выдачи', () =>
      orderState.courierDelivery === EDeliveryType.PICKUP ? !!orderState.pickedPoint : true
    )
  }
}))
useVuelidate(validationRules, orderState)

watch(
  () => orderState.pickedPoint,
  (val) => {
    if (val) {
      orderState.deliveryPrice = val.cost
      orderState.placeId = val.place_id
      orderState.addressString = val.address
      orderState.pickedPointAddress = val.address
    }
    return
  }
)

// wheel stopping
const tabContent = ref<TNullable<HTMLElement>>(null)
watch(tabContent, () => {
  if (tabContent.value) {
    tabContent.value.addEventListener('wheel', (event) => {
      event.stopPropagation()
    })
  }
})
</script>

<template>
  <div
    ref="tabContent"
    class="delivery-points"
  >
    <CheckoutDeliveryMap v-if="orderState.deliveryPoints" />
  </div>
</template>

<style scoped lang="scss">
@import 'checkout-delivery-points';
</style>

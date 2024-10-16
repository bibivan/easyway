<script setup lang="ts">
import type { TNullable } from '~/types'

const { order } = useOrderStore()

watch(
  () => order.pickedPoint,
  (val) => {
    if (val) {
      order.deliveryPrice = val.cost
      order.placeId = val.place_id
      order.addressString = val.address
      order.pickedPointAddress = val.address
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
    <CheckoutDeliveryMap v-if="order.deliveryPoints" />
  </div>
</template>

<style scoped lang="scss">
@import 'checkout-delivery-points';
</style>

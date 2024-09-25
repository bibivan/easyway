<script setup lang="ts">
const cartStore = useCartStore()
const { cartState } = cartStore
const { cartItemsCount } = storeToRefs(cartStore)

onMounted(() => {
  const cartJSON = localStorage.getItem('easyway-cart')

  if (isValidJSON(cartJSON)) {
    cartState.data = parseJSON(localStorage.getItem('easyway-cart'))
  }
})
</script>

<template>
  <span class="total-items">
    <SvgCart />
    <span
      v-if="cartItemsCount"
      class="total-items__count"
      >{{ cartItemsCount }}</span
    >
  </span>
</template>
<style lang="scss" scoped>
@import 'cart-total-items';
</style>

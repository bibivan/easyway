<script setup lang="ts">
const cartStore = useCartStore()
const { cartState } = cartStore
const { cartItemsCount } = storeToRefs(cartStore)

onMounted(() => {
  const cartJSON = localStorage.getItem('eazy-clothing-cart')

  if (isValidJSON(cartJSON)) {
    cartState.data = parseJSON(localStorage.getItem('eazy-clothing-cart'))
  }
})
</script>

<template>
  <span class="cart-items-amount">
    <SvgCart />
    <span
      v-if="cartItemsCount"
      class="cart-items-amount__value"
      >{{ cartItemsCount }}</span
    >
  </span>
</template>
<style lang="scss" scoped>
@import 'cart-items-amount';
</style>

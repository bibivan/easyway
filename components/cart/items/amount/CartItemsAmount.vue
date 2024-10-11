<script setup lang="ts">
const { cartData, cartItemsCount } = useCartStore()

onMounted(() => {
  const cartJSON = localStorage.getItem('easyway-cart')

  if (isValidJSON(cartJSON)) {
    cartData.value = parseJSON(localStorage.getItem('easyway-cart'))
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

<script setup lang="ts">
const { promo, initPromoData, calculateDiscountedSum, calculateDiscount } = usePromoStore()
const { cartTotalPrice } = storeToRefs(useCartStore())
const orderState = reactive({
  deliveryPrice: null
})

const discountValue = computed(() => calculateDiscount(cartTotalPrice.value))

const discountedSum = computed(() => {
  return calculateDiscountedSum(cartTotalPrice.value) + (orderState.deliveryPrice || 0)
})

onMounted(() => initPromoData())
</script>

<template>
  <section class="section">
    <div class="container">
      <h1>Order</h1>

      <div v-if="promo.data">
        <span>Скидка: </span>
        <span>-{{ discountValue }}₽</span>
      </div>

      <div>
        <span>Итого: </span>
        <span>{{ cartTotalPrice }}₽</span>
      </div>

      <div>
        <span>К оплате: </span>
        <span>{{ discountedSum }}₽</span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>

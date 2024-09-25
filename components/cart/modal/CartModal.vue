<script setup lang="ts">
const { cartState } = useCartStore()
const { globalScrollbarState } = useGlobalScrollbarStore()

const handleCloseCart = () => {
  cartState.isShown = false
  globalScrollbarState.hidden = false
}
</script>

<template>
  <transition name="slide-right">
    <div
      v-if="cartState.isShown"
      class="cart-modal"
    >
      <div
        class="cart-modal__overlay"
        @click="handleCloseCart"
      />
      <div class="cart-modal__dialog">
        <PerfectScrollbar v-if="cartState.data">
          <!--          <CartItem-->
          <!--            v-for="item in cartState.data"-->
          <!--            :key="item.id"-->
          <!--            :data="item"-->
          <!--          />-->
        </PerfectScrollbar>
        <p v-else>Корзина пуста</p>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
@import 'cart-modal';
</style>

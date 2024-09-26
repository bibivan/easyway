<script setup lang="ts">
const { isMobile } = storeToRefs(useDeviceTypeStore())
const { cartState, clearCart: handleClearCart } = useCartStore()
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
        <PerfectScrollbar class="cart-modal__dialog-ps">
          <div class="cart-modal__content">
            <button
              class="cart-modal__close"
              @click="handleCloseCart"
            >
              <SvgCross />
            </button>
            <template v-if="cartState.data">
              <div class="cart-modal__head">
                <h2 class="cart-modal__title">Корзина</h2>
                <button
                  class="cart-modal__clear"
                  @click="handleClearCart"
                >
                  Очистить корзину
                </button>
              </div>
              <PerfectScrollbar
                class="cart-modal__items-ps"
                :options="{ suppressScrollY: isMobile }"
              >
                <div class="cart-modal__items">
                  <CartItem
                    v-for="item in cartState.data"
                    :key="item.id"
                    :data="item"
                  />
                </div>
              </PerfectScrollbar>
              <CartTotal />
              <button class="btn cart-modal__checkout-btn">Оформить заказз</button>
            </template>
            <p v-else>Корзина пуста</p>
          </div>
        </PerfectScrollbar>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
@import 'cart-modal';
</style>

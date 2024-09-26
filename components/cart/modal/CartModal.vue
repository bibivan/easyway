<script setup lang="ts">
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
      <button
        class="cart-modal__close"
        @click="handleCloseCart"
      >
        <SvgCross />
      </button>
      <div class="cart-modal__dialog cart-modal__dialog_shown_mobile">
        <PerfectScrollbar class="cart-modal__ps cart-modal__ps_mobile">
          <div
            v-if="cartState.data"
            class="cart-modal__wrapper"
          >
            <div class="cart-modal__head">
              <h2 class="cart-modal__title">Корзина</h2>
              <button
                class="cart-modal__clear"
                @click="handleClearCart"
              >
                Очистить корзину
              </button>
            </div>
            <div class="cart-modal__items">
              <CartItem
                v-for="item in cartState.data"
                :key="item.id"
                :data="item"
              />
            </div>
          </div>
          <p v-else>Корзина пуста</p>
        </PerfectScrollbar>
      </div>

      <div class="cart-modal__dialog cart-modal__dialog_shown_tablet">
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
            v-if="cartState.data"
            class="cart-modal__ps cart-modal__ps_tablet"
          >
            <div class="cart-modal__items">
              <CartItem
                v-for="item in cartState.data"
                :key="item.id"
                :data="item"
              />
            </div>
          </PerfectScrollbar>
        </template>

        <p v-else>Корзина пуста</p>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
@import 'cart-modal';
</style>

<script setup lang="ts">
import SvgChevronLeft from '~/components/svg/SvgChevronLeft.vue'

const cartStore = useCartStore()
const { cartState, clearCart: handleClearCart } = cartStore
const { cartTotalPrice } = storeToRefs(cartStore)
const { isMobile } = storeToRefs(useDeviceTypeStore())
const { globalScrollbarState } = useGlobalScrollbarStore()
const { promo, calculateDiscountedSum } = usePromoStore()

const totalSum = computed(() => formatNumberWithSpaces(cartTotalPrice.value))

const discountedSum = computed(() => {
  return formatNumberWithSpaces(calculateDiscountedSum(cartTotalPrice.value))
})

const handleCloseModal = () => {
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
        @click="handleCloseModal"
      />
      <div class="cart-modal__dialog">
        <PerfectScrollbar class="cart-modal__dialog-ps">
          <div class="cart-modal__content">
            <template v-if="cartState.data">
              <div class="cart-modal__head">
                <h2 class="cart-modal__title">Корзина</h2>
                <button
                  class="cart-modal__clear"
                  @click="handleClearCart"
                >
                  Очистить корзину
                </button>
                <button
                  class="cart-modal__close"
                  @click="handleCloseModal"
                >
                  <SvgChevronLeft v-if="isMobile" />
                  <SvgCross v-else />
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
              <PromoChecker :total-sum="cartTotalPrice" />
              <p class="label-value-info">
                <span class="label-value-info__label">К оплате</span>
                <span class="label-value-info__value">
                  <span
                    v-if="promo.data"
                    class="cart-modal__initial-sum"
                  >
                    {{ totalSum }} ₽
                  </span>
                  <span class="cart-modal__total-sum">{{ discountedSum }} ₽</span>
                </span>
              </p>
              <NuxtLink
                to="/order"
                class="btn cart-modal__checkout-btn"
                @click="handleCloseModal"
              >
                Оформить заказз
              </NuxtLink>
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

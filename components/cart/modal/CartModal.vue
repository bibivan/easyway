<script setup lang="ts">
const cartStore = useCartStore()
const { cartTotalPrice } = storeToRefs(cartStore)
const { cartState, clearCart: handleClearCart } = cartStore
const { promoState, calculateDiscountedSum } = usePromoStore()
const { isMobile, isDesktop } = storeToRefs(useDeviceTypeStore())
const { globalScrollIsHidden } = storeToRefs(useGlobalScrollbarStore())

const totalSum = computed(() => formatNumberWithSpaces(cartTotalPrice.value))

const discountedSum = computed(() => {
  return formatNumberWithSpaces(calculateDiscountedSum(cartTotalPrice.value))
})

const handleCloseModal = () => {
  cartState.isShown = false
  if (isDesktop.value) globalScrollIsHidden.value = false
  if (!isDesktop.value) document.body.classList.remove('body_no-scroll')
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
            <div class="cart-modal__head">
              <h2 class="cart-modal__title">Корзина</h2>
              <button
                v-if="cartState.data"
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
            <template v-if="cartState.data">
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
                    v-if="promoState.data.amount"
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

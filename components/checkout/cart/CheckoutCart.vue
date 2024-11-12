<script setup lang="ts">
defineEmits<{ onSendOrder: [void] }>()

const cartStore = useCartStore()
const { cartTotalPrice } = storeToRefs(cartStore)
const { cartState } = cartStore
const { order } = useOrderStore()
const { promoState, initPromoData, calculateDiscount, calculateDiscountedSum } = usePromoStore()
const { handleShowCart } = useCartOpening()

const totalSum = computed(() => (order.price || 0) + (order.deliveryPrice || 0))

onMounted(() => initPromoData())

watch(
  [() => promoState.data.amount, cartTotalPrice],
  () => {
    order.price = calculateDiscountedSum(cartTotalPrice.value, cartState)
  },
  { immediate: true }
)
</script>

<template>
  <fieldset class="form__fieldset checkout-cart">
    <legend class="form__legend checkout-cart__heading">Заказ</legend>
    <ul class="checkout-cart__items">
      <li
        v-for="item in cartState.data"
        :key="item.id"
        class="checkout-cart__item checkout-cart-item"
      >
        <div class="checkout-cart-item__info">
          <span class="checkout-cart-item__name">{{ item.name }} </span>
          <span class="checkout-cart-item__desc">Артикул: {{ item.article }}</span>
        </div>
        <span class="checkout-cart-item__price">{{ item.cnt * item.price }}₽</span>
      </li>
      <li
        v-if="order.deliveryPrice && (order?.pickedCourier?.name || order?.pickedPoint?.name)"
        class="checkout-cart__item checkout-cart-item"
      >
        <div class="checkout-cart-item__info">
          <span class="checkout-cart-item__name">Доставка</span>
          <span
            v-if="order?.pickedCourier"
            class="checkout-cart-item__desc"
            >{{ order.pickedCourier.name }}</span
          >
          <span
            v-if="order?.pickedPoint"
            class="checkout-cart-item__desc"
            >{{ order.pickedPoint.name }}</span
          >
        </div>
        <span class="checkout-cart-item__price">{{ order.deliveryPrice }}₽</span>
      </li>
      <li
        v-if="promoState.data.amount"
        class="checkout-cart__item checkout-cart-item"
      >
        <div class="checkout-cart-item__info">
          <span class="checkout-cart-item__name">Скидка</span>
          <span class="checkout-cart-item__desc">Промокод: {{ promoState.data.code }}</span>
        </div>
        <span class="checkout-cart-item__price">-{{ calculateDiscount(cartTotalPrice, cartState) }}₽</span>
      </li>
    </ul>

    <div class="checkout-cart__total checkout-total">
      <div class="checkout-total__label">Итого</div>
      <div class="checkout-total__sum">{{ totalSum }}₽</div>
    </div>

    <div class="checkout-cart__actions">
      <button
        id="send_order_btn"
        class="checkout-cart__btn btn"
      >
        Оформить
      </button>
      <button
        class="checkout-cart__btn btn btn_light"
        @click="handleShowCart"
      >
        Редактировать
      </button>

      <p class="checkout-cart__alert">
        После&nbsp;нажатия на&nbsp;кнопку «Оформить заказ», нельзя внести изменения в&nbsp;текущий
        заказ
      </p>
    </div>
  </fieldset>
</template>

<style scoped lang="scss">
@import 'checkout-cart';
</style>

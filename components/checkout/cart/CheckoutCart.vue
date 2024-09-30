<script setup lang="ts">
defineEmits<{ onSendOrder: [void] }>()

const { cartState, cartTotalPrice } = storeToRefs(useCartStore())
const { orderState } = useOrderStore()
const { promoState, initPromoData, calculateDiscount, calculateDiscountedSum } = usePromoStore()
const { handleShowCart } = useCartOpening()

const totalSum = computed(() => (orderState.price || 0) + (orderState.deliveryPrice || 0))

onMounted(() => initPromoData())

watch(
  () => promoState.data.value,
  () => {
    orderState.price = calculateDiscountedSum(cartTotalPrice.value)
  },
  { immediate: true }
)
</script>

<template>
  <fieldset class="fieldset checkout-cart">
    <legend class="fieldset__legend checkout-cart__heading">Заказ</legend>
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
        v-if="
          orderState.deliveryPrice &&
          (orderState?.pickedCourier?.name || orderState?.pickedPoint?.name)
        "
        class="checkout-cart__item checkout-cart-item"
      >
        <div class="checkout-cart-item__info">
          <span class="checkout-cart-item__name">Доставка</span>
          <span
            v-if="orderState?.pickedCourier"
            class="checkout-cart-item__desc"
            >{{ orderState.pickedCourier.name }}</span
          >
          <span
            v-if="orderState?.pickedPoint"
            class="checkout-cart-item__desc"
            >{{ orderState.pickedPoint.name }}</span
          >
        </div>
        <span class="checkout-cart-item__price">{{ orderState.deliveryPrice }}₽</span>
      </li>
      <li
        v-if="promoState.data.value"
        class="checkout-cart__item checkout-cart-item"
      >
        <div class="checkout-cart-item__info">
          <span class="checkout-cart-item__name">Скидка</span>
          <span class="checkout-cart-item__desc">Промокод: {{ promoState.data.code }}</span>
        </div>
        <span class="checkout-cart-item__price">-{{ calculateDiscount(cartTotalPrice) }}₽</span>
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

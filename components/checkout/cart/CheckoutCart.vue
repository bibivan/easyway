<script setup lang="ts">
defineEmits<{
  onSendOrder: [void]
}>()

const { cartState, cartTotalPrice } = storeToRefs(useCartStore())
const { orderState } = useOrderStore()
const { promoState, initPromoData, calculateDiscountedSum, calculateDiscount } = usePromoStore()

onMounted(() => {
  orderState.price = cartTotalPrice.value
  initPromoData()
})
</script>

<template>
  <fieldset class="fieldset checkout-cart">
    <legend class="fieldset__legend">ЗАКАЗ</legend>
    <ul class="checkout-cart__items">
      <li
        v-for="item in cartState.data"
        :key="item.id"
        class="checkout-cart__item cart-item"
      >
        <div class="cart-item__text">
          <div class="cart-item__name">
            <span>{{ item.name }} x{{ item.cnt }}</span>
          </div>
        </div>
      </li>
      <li
        v-if="orderState.deliveryPrice"
        class="checkout-cart__item cart-item"
      >
        <div class="cart-item__text">
          <div class="cart-item__name">
            <span>Доставка</span>
            <span> {{ orderState.deliveryPrice || 0 }}₽</span>
          </div>
        </div>
      </li>
      <li
        v-if="promoState.data.value"
        class="checkout-cart__item cart-item"
      >
        <div class="cart-item__text">
          <div class="cart-item__name">
            <span>Скидка</span>
            <span>-{{ calculateDiscount(cartTotalPrice) }}₽</span>
          </div>
        </div>
      </li>
    </ul>

    <div class="checkout-cart__total total">
      <div class="total__label">Итого</div>
      <div class="total__sum">
        {{ calculateDiscountedSum(cartTotalPrice) + (orderState.deliveryPrice || 0) }}₽
      </div>
    </div>

    <div class="checkout-cart__btns">
      <button
        class="checkout-cart__btn btn btn_easynutrition_painted"
        @click="$emit('onSendOrder')"
      >
        Оформить
      </button>
      <NuxtLink
        class="checkout-cart__btn btn btn_disabled"
        to="/cart"
        >Редактировать</NuxtLink
      >

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

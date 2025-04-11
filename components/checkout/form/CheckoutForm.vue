<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'

const { sendOrder } = useOrderStore()
const { cartState } = useCartStore()
const { promoState } = usePromoStore()
const v$ = useVuelidate()
const state = reactive({
  dataIsSending: false,
  checkoutError: false
})

const handleSendData = async () => {
  ym(98761136,'reachGoal','goal-buy-button')
  const result = await v$.value.$validate()

  if (!result) return
  if (!cartState.data) return

  try {
    state.dataIsSending = true;

    if (cartState.data && Array.isArray(cartState.data) && promoState.data) {
      const discountCode = promoState.data.code ?? ''; // Убедимся, что это строка
      const discountAmount = promoState.data.amount ?? 0; // Убедимся, что это число
      let totalDiscount = 0;
      const updatedCartData = cartState.data.map(item => {
        let newPrice = item.price;
        let discount = 0;
        if (promoState.data.balance === true) {
          let availableDiscount = promoState.data.amount! - totalDiscount;
          if (availableDiscount > 0) {
            discount = Math.min(availableDiscount, item.price - 1);
            totalDiscount += discount;
          }
        } else {
          if (discountCode.startsWith('EAZY') && !item.article.startsWith('EF')) {
            discount = Math.floor(item.price * discountAmount / 100);
          } else if (discountCode.startsWith('easy') || discountCode.startsWith('EASY')) {
            if (item.article.startsWith('EF')) {
              discount = Math.floor(item.price * discountAmount / 100);
            }
          } else {
            discount = Math.floor(item.price * discountAmount / 100);
          }
        }
        newPrice = item.price - discount;
        return { ...item, price: newPrice };
      });

      console.log('Updated cartState.data:', updatedCartData);
      console.log('promoState.data:', promoState.data);

      // Передаем новый массив с измененными ценами в метод отправки
      await sendOrder(updatedCartData, {
        amount: (promoState.data.balance)? totalDiscount : promoState.data.amount,
        code: promoState.data.code,
        balance: promoState.data.balance,
      });
      v$.value.$reset();
    }
  } catch (e) {
    state.checkoutError = true;
  } finally {
    state.dataIsSending = false;
  }
}

onMounted(() => {
  const sendBtn = document.getElementById('send_order_btn')
  if (sendBtn) sendBtn.addEventListener('click', handleSendData)
})
</script>
<template>
  <form
    v-bind="$attrs"
    action="#"
    class="form"
    @submit.prevent="handleSendData"
  >
    <CheckoutDelivery />
    <CheckoutClient />
    <CheckoutPayment />
  </form>
  <CheckoutPaymentProcess
    v-if="state.dataIsSending || state.checkoutError"
    :data-sending="state.dataIsSending"
    :checkout-error="state.checkoutError"
    @on-close-modal="state.checkoutError = false"
  />
</template>

<style scoped lang="scss">
@import 'checkout-form';
</style>

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
  const result = await v$.value.$validate()

  if (!result) return
  if (!cartState.data) return

  try {
    state.dataIsSending = true;

    if (cartState.data && Array.isArray(cartState.data) && promoState.data) {
      const discountCode = promoState.data.code ?? ''; // Убедимся, что это строка
      const discountAmount = promoState.data.amount ?? 0; // Убедимся, что это число

      const updatedCartData = cartState.data.map(item => {
        let newPrice = item.price;

        // Проверка на скидку
        if (discountCode.startsWith('EAZY') && !item.article.startsWith('EF')) {
          // Применяем скидку, если промокод начинается с EAZY и article не начинается с EF
          newPrice = item.price - (item.price * discountAmount / 100);
        } else if (discountAmount > 0) {
          // Применяем скидку ко всем товарам, если есть ненулевая скидка
          newPrice = item.price - (item.price * discountAmount / 100);
        }

        // Возвращаем новый объект с измененной ценой
        return { ...item, price: newPrice };
      });

      // console.log('Updated cartState.data:', updatedCartData);
      // console.log('promoState.data:', promoState.data);

      // Передаем новый массив с измененными ценами в метод отправки
      await sendOrder(updatedCartData, {
        amount: promoState.data.amount,
        code: promoState.data.code,
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

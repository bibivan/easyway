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
    state.dataIsSending = true
    await sendOrder(cartState.data, {
      amount: promoState.data.amount,
      code: promoState.data.code,
    })
    v$.value.$reset()
  } catch (e) {
    state.checkoutError = true
  } finally {
    state.dataIsSending = false
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

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import type { ISendOrderResponse } from '~/types'

const { getOrderPayload, sendOrder, clearOrder } = useOrderStore()
const { cartData } = useCartStore()

const v$ = useVuelidate()
const state = reactive({
  dataIsSending: false,
  checkoutError: false
})

const handleSendData = async () => {
  const result = await v$.value.$validate()

  if (!result) return
  if (!cartData.value) return

  try {
    state.dataIsSending = true

    // const payload = getOrderPayload(cartData.value)
    //
    // const { SF } = await sendOrder<ISendOrderResponse>(payload)
    //
    // if (!SF.orderId) return (state.checkoutError = true)
    //
    // const { Link: link } = await useClientFetch<{ Link: string }>('payment/get-url', {
    //   method: 'POST',
    //   body: {
    //     orderId: SF.orderId
    //   }
    // })
    //
    // if (link) {
    //   clearOrder()
    //   await navigateTo(link, { external: true })
    // } else state.checkoutError = true
  } catch (e) {
    state.checkoutError = true
  } finally {
    state.dataIsSending = false
  }
}

onMounted(() => {
  const sendBtn = document.getElementById('send_order_btn')
  if (sendBtn) sendBtn.addEventListener('click', () => handleSendData())
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

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'

const v$ = useVuelidate()

const handleSendData = async () => {
  const result = await v$.value.$validate()
  console.log(result)
}

onMounted(() => {
  const sendBtn = document.getElementById('send_order_btn')
  if (sendBtn) sendBtn.addEventListener('click', () => handleSendData())
})
</script>
<template>
  <form
    action="#"
    @submit.prevent="handleSendData"
  >
    <CheckoutDeliveryFieldset />
  </form>
</template>

<style scoped lang="scss">
@import 'checkout-form';
</style>

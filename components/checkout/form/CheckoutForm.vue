<script setup lang="ts">
const { handleSendData } = useOrderFormSending()
</script>
<template>
  <form
    action="#"
    @submit.prevent="handleSendData"
  >
    <CheckoutDeliveryFieldset />
    <button
      class="btn"
      type="submit"
      style="margin-top: 40px"
      @submit="handleSendData"
    >
      submit
    </button>
  </form>
</template>

<style scoped lang="scss">
@import 'checkout-form';
</style>

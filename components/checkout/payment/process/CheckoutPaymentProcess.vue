<script lang="ts" setup>
const props = defineProps<{
  dataSending: boolean
  checkoutError: boolean
}>()

const emit = defineEmits<{
  onCloseModal: [void]
}>()

const closeModal = () => {
  if (props.dataSending) return
  emit('onCloseModal')
}
</script>

<template>
  <div class="payment-process">
    <BaseSpinner
      v-if="dataSending"
      theme="easynutrition"
    />
    <div
      v-else-if="checkoutError"
      class="payment-process__dialog"
    >
      <div class="payment-process__text">
        Произошла ошибка при оформлении заказа. Повторите попытку
      </div>
      <button
        class="payment-process__btn btn btn_easynutrition_painted"
        @click="closeModal"
      >
        Закрыть
      </button>
    </div>
    <div
      class="payment-process__overlay"
      @click="closeModal"
    />
  </div>
</template>

<style lang="scss" scoped>
@import 'checkout-payment-process';
</style>

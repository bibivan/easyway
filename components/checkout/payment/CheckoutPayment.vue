<script setup lang="ts">
import { helpers, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

const { order } = useOrderStore()
const paymentData = usePaymentTypesData()
const isConfirmed = ref<boolean>(false)

const validationRules = computed(() => ({
  paymentType: {
    required: helpers.withMessage('Обязательный параметр', required)
  }
}))
const v$ = useVuelidate(validationRules, order)
const { hasError, errorMessage } = useValidationInfo(ref(v$.value.paymentType))
</script>

<template>
  <fieldset class="form__fieldset checkout-payment">
    <legend class="form__legend">Оплата</legend>

    <div class="form__radios checkout-payment__types">
      <p class="form__subtitle">Способ оплаты</p>
      <BaseRadio
        v-for="paymentType in paymentData"
        :id="'payment_type_' + paymentType.id"
        :key="'payment-type-' + paymentType.id"
        v-model="order.paymentType"
        :value="paymentType.id"
        :label="paymentType.name"
      />
      <BaseErrorMessage
        v-if="hasError"
        :message="errorMessage"
      />
    </div>

    <BaseCheckbox
      id="personal_data_consent"
      v-model="isConfirmed"
      :required-val="true"
    >
      <template #label>
        Я&nbsp;подтверждаю, что&nbsp;прочитал, понял и&nbsp;полностью согласен с&nbsp;Политикой
        конфиденциальности и&nbsp;даю&nbsp;Согласие на&nbsp;обработку персональных данных»
      </template>
    </BaseCheckbox>
  </fieldset>
</template>

<style scoped lang="scss">
@import 'checkout-payment';
</style>

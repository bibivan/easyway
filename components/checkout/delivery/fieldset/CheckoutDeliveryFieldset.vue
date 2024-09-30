<script setup lang="ts">
import { EDeliveryType, type IAddressSuggestion, type TNullable } from '~/types'

const { orderState } = useOrderStore()

const setAddressData = (addressData: TNullable<IAddressSuggestion>) => {
  if (!addressData) return
  orderState.fiases = [
    addressData.data.settlement_fias_id,
    addressData.data.city_fias_id,
    addressData.data.area_fias_id,
    addressData.data.region_fias_id
  ]
  orderState.postalCode = addressData.data?.postal_code
  orderState.addressString = addressData.unrestricted_value
}

watch(
  () => orderState.addressData,
  (val) => setAddressData(val)
)
</script>

<template>
  <fieldset class="fieldset checkout-delivery">
    <legend class="fieldset__legend">Адрес и&nbsp;доставка</legend>

    <BaseAddressInput
      id="checkout_address_input"
      v-model:address-data="orderState.addressData"
      class="checkout-delivery__address"
      :check-full-address="orderState.courierDelivery === EDeliveryType.COURIER"
      address-query="Самара молодежная"
    />

    <CheckoutDeliveryTypes />
  </fieldset>
</template>

<style lang="scss" scoped>
@import 'checkout-delivery-fieldset';
</style>

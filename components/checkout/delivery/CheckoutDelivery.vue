<script setup lang="ts">
import { EDeliveryType, type IAddressSuggestion, type TNullable } from '~/types'

const { order, clearDelivery } = useOrderStore()

const setAddressData = (addressData: TNullable<IAddressSuggestion>) => {
  if (!addressData) return
  order.fiases = [
    addressData.data.settlement_fias_id,
    addressData.data.city_fias_id,
    addressData.data.area_fias_id,
    addressData.data.region_fias_id
  ]
  order.postalCode = addressData.data?.postal_code
  order.addressString = addressData.unrestricted_value
}

onMounted(() => clearDelivery())

watch(
  () => order.addressData,
  (val) => setAddressData(val)
)
</script>

<template>
  <fieldset class="form__fieldset checkout-delivery">
    <legend class="form__legend">Адрес и&nbsp;доставка</legend>

    <BaseAddressInput
      id="checkout_address_input"
      class="checkout-delivery__address"
      :check-full-address="order.courierDelivery === EDeliveryType.COURIER"
      @on-update-address-data="order.addressData = $event"
    />
    <!--    address-query="самара молодежная 9"-->

    <CheckoutDeliveryTypes />
  </fieldset>
</template>

<style lang="scss" scoped>
@import 'checkout-delivery';
</style>

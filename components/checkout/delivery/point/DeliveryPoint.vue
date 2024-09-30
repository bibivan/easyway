<script setup lang="ts">
import type { IDeliveryPoint } from '~/types'

defineProps<{ data: IDeliveryPoint }>()

const { orderState } = useOrderStore()
</script>

<template>
  <p class="yandex-balloon__info">
    <span class="yandex-balloon__subtitle">
      {{ data.name }} доставка: {{ data.delivery_date }}</span
    >
  </p>
  <p class="yandex-balloon__info">
    <span class="yandex-balloon__subtitle">График работы:</span>
    {{ data.schedule }}
  </p>
  <p class="yandex-balloon__info">
    <span class="yandex-balloon__subtitle">Адрес:</span>
    {{ data.address }}
  </p>
  <button
    class="yandex-balloon__send-btn"
    :disabled="data === orderState.pickedPoint"
    @click.stop="orderState.pickedPoint = data"
  >
    <template v-if="data === orderState.pickedPoint"> Выбрано </template>
    <template v-else> Доставить сюда </template>
  </button>
</template>

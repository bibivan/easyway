<script setup lang="ts">
import { YandexMap, YandexClusterer, YandexMarker } from 'vue-yandex-maps'
import type { IDeliveryPoint, TNullable, YaMapInstance } from '~/types'

let mapInstance: YaMapInstance
const { order } = useOrderStore()

const initBtnEvenListeners = () => {
  document.addEventListener('click', (event: Event) => {
    const targetElement = event.target as EventTarget &
      HTMLButtonElement & { dataset: { pickupPointIndex: number } }
    const pointIndex = +targetElement?.dataset?.pickupPointIndex
    if (pointIndex && order.value.deliveryPoints) {
      event.preventDefault()
      order.value.pickedPoint = order.value.deliveryPoints[pointIndex as number]
      targetElement.classList.add('btn--disabled')
      targetElement.disabled = true
      targetElement.textContent = 'Выбрано'
    }
  })
}

const getMarkerProperties = (point: IDeliveryPoint, index: number) => ({
  clusterCaption: point.name,
  balloonContentBody: `<div class="yandex-balloon yandex-balloon_in-cluster">
  <p class="yandex-balloon__info">
    <span class="yandex-balloon__subtitle">График работы:</span>
    ${point.schedule}
  </p>
  <p class="yandex-balloon__info">
    <span class="yandex-balloon__subtitle">Адрес:</span>
    ${point.address}
  </p>
  <button
    class="yandex-balloon__send-btn"
    data-pickup-point-index="${index}"
  >
     ${window.innerWidth > 374 ? 'Доставить сюда' : 'выбрать'}
  </button>
      </div>`
})

const setMapCenter = (zoom: number) => {
  if (order.value?.addressData?.data.geo_lat && order.value?.addressData.data.geo_lon) {
    mapInstance.setCenter(
      [+order.value?.addressData.data.geo_lat, +order.value?.addressData.data.geo_lon],
      zoom,
      {
        checkZoomRange: true,
        duration: 1000
      }
    )
  }
}

const setMapInstance = (map: YaMapInstance) => {
  mapInstance = map
  setMapCenter(14)
  initBtnEvenListeners()
}

watch(
  [() => order.value.addressData?.data?.geo_lat, () => order.value.addressData?.data?.geo_lon],
  (val, oldVal) => {
    if (!oldVal.length || mapInstance) return
    setMapCenter(14)
  }
)
</script>

<template>
  <YandexMap
    v-if="order.addressData?.data.geo_lon && order.addressData.data.geo_lat"
    class="delivery-map"
    :settings="{
      apiKey: '007525b7-2cfa-454c-b495-a51e31ae118b',
      lang: 'ru_RU',
      coordorder: 'latlong',
      debug: false,
      version: '2.1'
    }"
    :controls="['zoomControl']"
    :coordinates="[+order.addressData.data.geo_lat, +order.addressData.data.geo_lon]"
    @created="setMapInstance"
  >
    <YandexClusterer
      :key="order.addressData.data.geo_lat + order.addressData.data.geo_lon"
      :options="{ preset: 'islands#blackClusterIcons' }"
    >
      <YandexMarker
        v-for="(point, index) in order.deliveryPoints"
        :key="point.name + index"
        :coordinates="point.gps"
        :marker-id="'placemark' + index"
        :properties="getMarkerProperties(point, index)"
        :options="{
          preset: 'islands#blackDeliveryIcon'
        }"
      >
        <template #component>
          <CheckoutDeliveryPoint :data="point" />
        </template>
      </YandexMarker>
    </YandexClusterer>
  </YandexMap>
</template>

<style scoped lang="scss">
@import 'checkout-delivery-map';
</style>

<script setup lang="ts">
import VueSlider from 'vue-3-slider-component'

const props = defineProps<{
  priceFrom: number
  priceTo: number
  min: number
  max: number
}>()

const emit = defineEmits<{
  'update:priceFrom': [number]
  'update:priceTo': [number]
}>()

const setPriceFrom = (priceFrom: number, priceTo: number) => {
  if (priceFrom < props.min) return props.min
  if (priceFrom > priceTo) return priceTo
  return priceFrom
}

const setPriceTo = (priceTo: number, priceFrom: number) => {
  if (priceTo > props.max) return props.max
  if (priceTo < priceFrom) return priceFrom
  return priceTo
}

const handleSetPriceFrom = (value: number) => {
  emit('update:priceFrom', setPriceFrom(value, props.priceTo))
}

const handleSetPriceTo = (value: number) => {
  emit('update:priceTo', setPriceTo(value, props.priceFrom))
}

const priceRange = computed({
  get: () => [props.priceFrom, props.priceTo],
  set: (val) => {
    handleSetPriceFrom(val[0])
    handleSetPriceTo(val[1])
  }
})
</script>

<template>
  <div class="range-price">
    <div class="range-price__ranges">
      <span>от</span>
      <span>до</span>
    </div>

    <VueSlider
      v-model="priceRange"
      class="range-price__slider"
      :min="min"
      :max="max"
      :enable-cross="false"
      :interval="50"
      :dot-size="8"
      :height="3"
      tooltip="none"
      :process-style="{ 'background-color': '#232323' }"
      :dot-style="{ 'background-color': '#232323' }"
    />
    <div class="range-price__inputs">
      <input
        class="range-price__input"
        :min="min"
        :max="max"
        :value="priceFrom"
        type="number"
        @change="handleSetPriceFrom(($event.target as HTMLInputElement).valueAsNumber)"
      />
      <input
        class="range-price__input"
        :min="min"
        :max="max"
        :value="priceTo"
        type="number"
        @change="handleSetPriceTo(($event.target as HTMLInputElement).valueAsNumber)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'product-filters-price';
</style>

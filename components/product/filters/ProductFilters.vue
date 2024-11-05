<script setup lang="ts">
import { EProductFilters } from '~/types'

const rangeStep = ref(10)
const route = useRoute()
const router = useRouter()
const { sizesFilters, colorsFilters, minPrice, maxPrice } = storeToRefs(useProductFiltersStore())

const { priceFrom, priceTo } = useProductsQuery()
const filtersState = reactive({
  [EProductFilters.SIZE]: route.query[EProductFilters.SIZE] || null,
  [EProductFilters.COLOR]: route.query[EProductFilters.COLOR] || null,
  [EProductFilters.PRICEFROM]: (priceFrom.value && parseInt(priceFrom.value)) || minPrice.value,
  [EProductFilters.PRICETO]: (priceTo.value && parseInt(priceTo.value)) || maxPrice.value
})

const handleResetFilters = () => {
  delete route.query[EProductFilters.SIZE]
  delete route.query[EProductFilters.COLOR]
  delete route.query[EProductFilters.PRICEFROM]
  delete route.query[EProductFilters.PRICETO]
}

const handleSetMin = (e: Event) => {
  const input = e.target as HTMLInputElement
  const value = +input.value

  if (value < minPrice.value) input.value = String(minPrice.value)
  if (value > filtersState[EProductFilters.PRICETO]) {
    input.value = String(filtersState[EProductFilters.PRICETO] - rangeStep.value)
  }
  filtersState[EProductFilters.PRICETO] = +input.value
}

const handleSetMax = (e: Event) => {
  const input = e.target as HTMLInputElement
  const value = +input.value
  if (value > maxPrice.value) input.value = String(maxPrice.value)
  if (value < filtersState[EProductFilters.PRICEFROM]) {
    input.value = String(filtersState[EProductFilters.PRICEFROM] + rangeStep.value)
  }
  filtersState[EProductFilters.PRICETO] = +value
}

watch(filtersState, () => {
  router.push({
    query: {
      ...route.query,
      ...(filtersState[EProductFilters.SIZE] && {
        [EProductFilters.SIZE]: filtersState[EProductFilters.SIZE]
      }),
      ...(filtersState[EProductFilters.COLOR] && {
        [EProductFilters.COLOR]: filtersState[EProductFilters.COLOR]
      }),
      ...(filtersState[EProductFilters.PRICEFROM] && {
        [EProductFilters.PRICEFROM]: filtersState[EProductFilters.PRICEFROM]
      }),
      ...(filtersState[EProductFilters.PRICETO] && {
        [EProductFilters.PRICETO]: filtersState[EProductFilters.PRICETO]
      })
    }
  })
})
</script>

<template>
  <div class="product-filters">
    <div class="product-filters__popups">
      <BasePopup label="Размеры">
        <BaseSizeInput
          v-for="(size, idx) in sizesFilters"
          :id="'filer_' + size + idx"
          :key="'filer-' + size"
          v-model="filtersState[EProductFilters.SIZE]"
          :value="size"
          :label="transformSizeString(size)"
          type="radio"
        />
      </BasePopup>
      <BasePopup
        v-if="colorsFilters"
        label="Цвет"
      >
        <BaseColorInput
          v-for="(color, idx) in colorsFilters"
          :id="'filer_' + color + idx"
          :key="'filer-' + color"
          v-model="filtersState[EProductFilters.COLOR] as string"
          :value="color"
          :label="transformSizeString(color)"
          type="radio"
        />
      </BasePopup>
      <BasePopup
        v-if="colorsFilters"
        label="Цена"
      >
        <div class="range-price">
          <div class="range-price__ranges">
            <span>от</span>
            <span>до</span>
          </div>

          <CommonRangeSlider
            v-model:minValue.number="filtersState[EProductFilters.PRICEFROM]"
            v-model:maxValue.number="filtersState[EProductFilters.PRICETO]"
            :min="1"
            :max="99999"
            :normalize-fact="2"
            :step="10"
          />
          <div class="range-price__inputs">
            <input
              class="range-input"
              type="number"
              :min="minPrice"
              :max="maxPrice"
              :value="EProductFilters.PRICEFROM"
              @change="handleSetMin"
            />
            <input
              class="range-input"
              type="number"
              :min="minPrice"
              :max="maxPrice"
              :value="EProductFilters.PRICETO"
              @change="handleSetMax"
            />
          </div>
        </div>
        <CommonRangeSlider
          v-model:minValue.number="filtersState[EProductFilters.PRICEFROM]"
          v-model:maxValue.number="filtersState[EProductFilters.PRICETO]"
          :min="minPrice"
          :max="maxPrice"
          :normalize-fact="2"
          :step="rangeStep"
        />
      </BasePopup>
    </div>
    <button
      class="product-filters__reset-btn"
      @click="handleResetFilters"
    >
      Сбросить фильтры
    </button>
  </div>
</template>

<style scoped lang="scss">
@import 'product-filters';
</style>

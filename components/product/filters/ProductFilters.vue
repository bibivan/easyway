<script setup lang="ts">
import { EProductFilters, type IFiltersState } from '~/types'

const rangeStep = ref(10)
const route = useRoute()
const router = useRouter()
const { sizesFilters, colorsFilters, minPrice, maxPrice } = storeToRefs(useProductFiltersStore())

const { priceFrom, priceTo } = useProductsQuery()
const filtersState = reactive<IFiltersState>({
  [EProductFilters.SIZE]: route.query[EProductFilters.SIZE] || null,
  [EProductFilters.COLOR]: route.query[EProductFilters.COLOR] || null,
  [EProductFilters.PRICEFROM]: priceFrom.value || minPrice.value,
  [EProductFilters.PRICETO]: priceTo.value || maxPrice.value
})

const handleResetFilters = () => {
  filtersState[EProductFilters.SIZE] = null
  filtersState[EProductFilters.COLOR] = null
  filtersState[EProductFilters.PRICEFROM] = 0
  filtersState[EProductFilters.PRICETO] = 0
}

const setMin = (e: Event) => {
  const input = e.target as HTMLInputElement
  const value = +input.value

  if (value < minPrice.value) input.value = String(minPrice.value)
  if (value > filtersState[EProductFilters.PRICETO])
    input.value = String(filtersState[EProductFilters.PRICETO] - rangeStep.value)
  filtersState[EProductFilters.PRICEFROM] = +input.value
}

const setMax = (e: Event) => {
  console.log(e)
  const input = e.target as HTMLInputElement
  const value = +input.value

  if (value > maxPrice.value) input.value = String(maxPrice.value)
  if (value < filtersState[EProductFilters.PRICEFROM])
    input.value = String(filtersState[EProductFilters.PRICEFROM] + rangeStep.value)
  filtersState[EProductFilters.PRICETO] = +value
}

const handleSetMin = debounce(setMin, 500)
const handleSetMax = debounce(setMax, 500)

watch(filtersState, () => {
  const query = { ...route.query }

  Object.keys(filtersState).forEach((key) => {
    if (filtersState[key as keyof IFiltersState]) {
      query[key] = String(filtersState[key as keyof IFiltersState])
    } else {
      delete query[key]
    }
  })

  router.push({ query })
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
        v-show="false"
        v-if="minPrice && maxPrice"
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
            :min="minPrice"
            :max="maxPrice"
            :normalize-fact="2"
            :step="rangeStep"
          />
          <div class="range-price__inputs">
            <input
              class="range-input"
              type="number"
              :min="minPrice"
              :max="maxPrice"
              :value="filtersState[EProductFilters.PRICEFROM]"
              @change="handleSetMin"
            />
            <input
              class="range-input"
              type="number"
              :min="minPrice"
              :max="maxPrice"
              :value="filtersState[EProductFilters.PRICETO]"
              @change="handleSetMax"
            />
          </div>
        </div>
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

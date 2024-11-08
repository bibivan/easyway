<script setup lang="ts">
import { EProductFilters, type IFiltersState } from '~/types'

const route = useRoute()
const { sizesFilters, colorsFilters, minPrice, maxPrice } = storeToRefs(useProductFiltersStore())
const { isDesktop } = storeToRefs(useDeviceTypeStore())

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
  filtersState[EProductFilters.PRICEFROM] = minPrice.value
  filtersState[EProductFilters.PRICETO] = maxPrice.value
}

const updateQuery = () => {
  const query = { ...route.query }

  Object.keys(filtersState).forEach((key) => {
    if (filtersState[key as keyof IFiltersState]) {
      query[key] = String(filtersState[key as keyof IFiltersState])
    } else {
      delete query[key]
    }
  })

  navigateTo({ query })
}

watch(filtersState, debounce(updateQuery, 500))
</script>

<template>
  <div class="product-filters">
    <div
      v-if="isDesktop"
      class="product-filters__popups"
    >
      <BasePopup label="Размеры">
        <div class="product-filters__filter">
          <BaseSizeInput
            v-for="(size, idx) in sizesFilters"
            :id="'filer_' + size + idx"
            :key="'filer-' + size"
            v-model="filtersState[EProductFilters.SIZE]"
            :value="size"
            :label="transformSizeString(size)"
            type="radio"
          />
        </div>
      </BasePopup>
      <BasePopup
        v-if="colorsFilters"
        label="Цвет"
      >
        <div class="product-filters__filter">
          <BaseColorInput
            v-for="(color, idx) in colorsFilters"
            :id="'filer_' + color + idx"
            :key="'filer-' + color"
            v-model="filtersState[EProductFilters.COLOR] as string"
            :value="color"
            :label="transformSizeString(color)"
            type="radio"
          />
        </div>
      </BasePopup>
      <BasePopup
        v-show="true"
        v-if="minPrice && maxPrice"
        label="Цена"
      >
        <ProductFiltersPrice
          v-model:price-from="filtersState[EProductFilters.PRICEFROM]"
          v-model:price-to="filtersState[EProductFilters.PRICETO]"
          class="product-filters__range"
          :min="minPrice"
          :max="maxPrice"
        />
      </BasePopup>
    </div>
    <div
      v-else
      class="product-filters__list"
    >
      <div class="product-filters__item">
        <p class="product-filters__label">Размер</p>
        <div class="product-filters__filter">
          <BaseSizeInput
            v-for="(size, idx) in sizesFilters"
            :id="'filer_' + size + idx"
            :key="'filer-' + size"
            v-model="filtersState[EProductFilters.SIZE]"
            :value="size"
            :label="transformSizeString(size)"
            type="radio"
          />
        </div>
      </div>
      <div
        v-if="colorsFilters"
        class="product-filters__item"
      >
        <p class="product-filters__label">Цвет</p>
        <div class="product-filters__filter">
          <BaseColorInput
            v-for="(color, idx) in colorsFilters"
            :id="'filer_' + color + idx"
            :key="'filer-' + color"
            v-model="filtersState[EProductFilters.COLOR] as string"
            :value="color"
            :label="transformSizeString(color)"
            type="radio"
          />
        </div>
      </div>
      <div
        v-show="true"
        v-if="minPrice && maxPrice"
        class="product-filters__item"
      >
        <p class="product-filters__label">Цена</p>
        <ProductFiltersPrice
          v-model:price-from="filtersState[EProductFilters.PRICEFROM]"
          v-model:price-to="filtersState[EProductFilters.PRICETO]"
          class="product-filters__range"
          :min="minPrice"
          :max="maxPrice"
        />
      </div>
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

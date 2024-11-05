<script setup lang="ts">
import { EProductFilters } from '~/types'

const route = useRoute()
const router = useRouter()
const { sizesFilters, colorsFilters, priceFromFilter, priceToFilter } =
  storeToRefs(useProductFiltersStore())
const filtersState = reactive({
  [EProductFilters.SIZE]: route.query[EProductFilters.SIZE] || null,
  [EProductFilters.COLOR]: route.query[EProductFilters.COLOR] || null,
  [EProductFilters.PRICEFROM]: route.query[EProductFilters.PRICEFROM] || null,
  [EProductFilters.PRICETO]: route.query[EProductFilters.PRICETO] || null
})

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
  </div>
</template>

<style scoped lang="scss">
@import 'product-filters';
</style>

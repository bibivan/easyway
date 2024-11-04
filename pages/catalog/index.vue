<script setup lang="ts">
import { EFetchStatus } from '~/types'
import ProductFilters from '~/components/product/filters/ProductFilters.vue'

const { isDesktop } = useDeviceTypeStore()
const { status, error, data } = useCatalog()
const { currentGender, currentBrand } = useRouteQuery()
const categoriesStore = useProductCategoriesStore()
const { getCurrentCategories } = categoriesStore
const { currentCategories } = storeToRefs(categoriesStore)
const filtersStore = useProductFiltersStore()
const { getFilters } = filtersStore
const { filters } = storeToRefs(filtersStore)

const breadcrumbsData = computed(() => [
  { to: '/', label: 'Главная' },
  { label: (currentGender.value || currentBrand.value)?.toLowerCase() || '' }
])

await getCurrentCategories()
</script>

<template>
  <section class="section section_pb_0">
    <div class="container">
      <div class="catalog-head">
        <SiteBreadcrumbs
          class="catalog-head__breadcrumbs"
          :data="breadcrumbsData"
        />
        <ProductFilters class="catalog-head__filters" />
      </div>
    </div>
  </section>
  <section class="section catalog">
    <div class="container catalog__container">
      <BaseSpinner v-if="status === EFetchStatus.PENDING" />
      <template v-if="status === EFetchStatus.SUCCESS">
        <aside
          v-if="isDesktop"
          class="catalog__categories categories"
        >
          <h2 class="categories__heading">Категории товаров</h2>
          <ProductCategories
            v-if="currentCategories"
            class="categories__body"
            :data="currentCategories"
          />
        </aside>
        <div class="catalog__content">
          <div class="catalog__list">
            <CatalogItem
              v-for="item in data?.items"
              :key="item.groupId"
              :data="item"
            />
          </div>

          <BasePagination
            v-if="data?.pagination"
            :data="data.pagination"
          />
        </div>
      </template>
      <div v-if="status === EFetchStatus.ERROR">{{ error?.message }}</div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'catalog';
</style>

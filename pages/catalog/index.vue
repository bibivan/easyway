<script setup lang="ts">
import { EFetchStatus } from '~/types'

const { isDesktop } = storeToRefs(useDeviceTypeStore())
const { status, error, data } = useCatalog()
const { currentGender, currentBrand } = useProductsQuery()
const { currentCategories } = storeToRefs(useProductCategoriesStore())
const { filtersState } = useProductFiltersStore()

const state = reactive({
  filtersAreShown: false,
  categoriesAreShown: false
})

const breadcrumbsData = computed(() => [
  { to: '/', label: 'Главная' },
  { label: (currentGender.value || currentBrand.value)?.toLowerCase() || '' }
])

const { initFavorites } = useFavoritesStore()
initFavorites()
</script>

<template>
  <section class="section section_pb_0 catalog-head">
    <div class="container catalog-container">
      <SiteBreadcrumbs
        class="catalog-head__breadcrumbs"
        :data="breadcrumbsData"
      />
      <template v-if="isDesktop">
        <ProductFilters
          v-if="filtersState.data"
          class="catalog-head__filters"
        />
      </template>
      <template v-else>
        <CommonSettingsModal
          v-model="state.filtersAreShown"
          settings-name="Фильтры"
        >
          <ProductFilters v-if="filtersState.data" />
        </CommonSettingsModal>
      </template>
    </div>
  </section>

  <section
    v-if="!isDesktop"
    class="section section_pb_0 catalog-head"
  >
    <div class="container">
      <div class="catalog-head__controls">
        <button
          class="catalog-head__btn"
          @click="state.categoriesAreShown = true"
        >
          Категории
          <SvgFilters />
        </button>
        <button
          class="catalog-head__btn"
          @click="state.filtersAreShown = true"
        >
          Фильтры
          <SvgFilters />
        </button>
      </div>
    </div>
  </section>
  <section class="section catalog">
    <div class="container catalog-container">
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
        <template v-else>
          <CommonSettingsModal
            v-model="state.categoriesAreShown"
            settings-name="Категории"
          >
            <ProductCategories
              v-if="currentCategories"
              :data="currentCategories"
              @click="state.categoriesAreShown = false"
            />
          </CommonSettingsModal>
        </template>
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

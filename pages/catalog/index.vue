<script setup lang="ts">
import { EFetchStatus } from '~/types'
import { capitalize } from '~/utils/common'

const { isDesktop } = useDeviceTypeStore()
const { status, error, data } = useCatalog()
const { currentGender, currentBrand } = useRouteQuery()
const { filters, categories } = useProductFiltersStore()

const breadcrumbsData = computed(() => [
  { to: '/', label: 'Главная' },
  { label: ((currentGender.value || currentBrand.value) as string).toLowerCase() }
])
</script>

<template>
  <section class="section section_pb_0">
    <div class="container">
      <div class="catalog-head">
        <SiteBreadcrumbs
          class="catalog-head__breadcrumbs"
          :data="breadcrumbsData"
        />
        <div class="catalog-head__filters"></div>
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
            v-if="isEGender(currentGender)"
            class="categories__body"
            :gender="currentGender"
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

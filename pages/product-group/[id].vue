<script setup lang="ts">
import { EFetchStatus, EProductFilters } from '~/types'

const { currentBrand, pageId } = useProductsQuery()
const { status, error, data: productGroup, refresh } = useProductGroup(pageId.value)
await refresh()
const { state, activeProduct, sizeList } = useActiveProduct(productGroup)

const breadcrumbsData = computed(() => [
  { to: '/', label: 'Главная' },
  { to: '/catalog', label: 'Каталог' },
  {
    to: {
      name: 'catalog',
      query: { [EProductFilters.CATEGORY]: productGroup.value?.category }
    },
    label: productGroup.value?.category || ''
  }
])
</script>

<template>
  <section class="section">
    <div class="container">
      <SiteBreadcrumbs
        class="catalog-head__breadcrumbs"
        :data="breadcrumbsData"
      />
    </div>
  </section>
  <section class="product">
    <div class="container">
      <div class="product__content">
        <BaseSpinner v-if="status === EFetchStatus.PENDING" />
        <div v-if="status === EFetchStatus.ERROR">Ошибка{{ error?.message }}</div>
        <template v-if="status === EFetchStatus.SUCCESS">
          <ProductImages
            v-if="activeProduct?.pictures"
            class="product__images"
            :images="activeProduct.pictures.slice(0, 4)"
          />
          <ProductInfo
            v-if="state?.size.value && sizeList && activeProduct && productGroup"
            v-model:color="state.color"
            v-model:size="state.size.value"
            :product-group="productGroup"
            :sizes="sizeList"
            :product="activeProduct"
            class="product__info"
          />
        </template>
      </div>
    </div>
  </section>
  <ProductSuggestions
    suggestions-name="your-look"
    suggestions-label="Собери образ"
    :query="{
      ...(productGroup?.gender && { [EProductFilters.GENDER]: productGroup?.gender }),
      ...(currentBrand && { [EProductFilters.BRAND]: currentBrand })
    }"
  />
  <ProductSuggestions
    suggestions-name="similar"
    suggestions-label="Похожее"
    :query="{
      ...(productGroup?.category && { [EProductFilters.CATEGORY]: productGroup.category }),
      ...(productGroup?.gender && { [EProductFilters.GENDER]: productGroup?.gender }),
      ...(currentBrand && { [EProductFilters.BRAND]: currentBrand })
    }"
  />
</template>

<style scoped lang="scss">
@import 'product-group';
</style>

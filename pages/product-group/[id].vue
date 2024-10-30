<script setup lang="ts">
import { EBrand, EFetchStatus, EGender, EProductFilters } from '~/types'

const route = useRoute()
const id = computed(() => {
  return Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
})
const brand = computed(() => {
  const brand = route.query[EProductFilters.BRAND]
  return Array.isArray(brand) ? brand[0] : brand
})

const { status, error, data: productGroup, refresh } = useProductGroup(id?.value)
await refresh()
const { state, activeProduct } = useActiveProduct(productGroup)
</script>

<template>
  <section class="product">
    <div class="container">
      <div class="product__content">
        <BaseSpinner v-if="status === EFetchStatus.PENDING" />
        <div v-if="status === EFetchStatus.ERROR">Ошибка{{ error?.message }}</div>
        <template v-if="status === EFetchStatus.SUCCESS">
          <ProductImages
            v-if="activeProduct?.pictures"
            class="product__images"
            :images="activeProduct.pictures"
          />
          <ProductInfo
            v-if="state?.size.value && activeProduct && productGroup"
            v-model:color="state.color"
            v-model:size="state.size.value"
            :colors="productGroup.colors"
            :sizes="productGroup.sizes"
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
    :with-slider="true"
    :query="{
      [EProductFilters.GENDER]: EGender.FEMALE,
      [EProductFilters.BRAND]: brand || EBrand.EASYWAY
    }"
    :to="{
      name: 'catalog',
      query: { [EProductFilters.GENDER]: EGender.FEMALE }
    }"
  />
  <ProductSuggestions
    suggestions-name="similar"
    suggestions-label="Похожее"
    :with-slider="true"
    :query="{
      [EProductFilters.GENDER]: EGender.FEMALE,
      [EProductFilters.BRAND]: brand || EBrand.EASYWAY
    }"
    :to="{
      name: 'catalog',
      query: { [EProductFilters.GENDER]: EGender.FEMALE }
    }"
  />
</template>

<style scoped lang="scss">
@import 'product-group';
</style>

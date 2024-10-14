<script setup lang="ts">
import { EFetchStatus, EGender } from '~/types'

const { status, error, data: productGroup, refresh } = useProductGroupStore()
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
            v-if="state && activeProduct && productGroup"
            v-model:color="state.color"
            v-model:size="state.size"
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
    :params="{ gender: EGender.FEMALE }"
  />
  <ProductSuggestions
    suggestions-name="similar"
    suggestions-label="Похожее"
    :with-slider="true"
    :params="{ gender: EGender.FEMALE }"
  />
</template>

<style scoped lang="scss">
@import 'product-group';
</style>

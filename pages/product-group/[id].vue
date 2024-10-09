<script setup lang="ts">
const route = useRoute()
const productGroupStore = useProductGroupStore()
const { productGroup } = storeToRefs(productGroupStore)

await useAsyncData('product', () => {
  return productGroupStore.getProductData({
    groupId: Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
  })
})

const { state, activeProduct } = useActiveProduct(productGroup)
</script>

<template>
  <section
    v-if="productGroup"
    class="product"
  >
    <div class="container">
      <div class="product__content">
        <ProductImages
          v-if="activeProduct?.pictures"
          class="product__images"
          :images="activeProduct.pictures"
        />
        <ProductInfo
          v-if="state && activeProduct"
          v-model:color="state.color"
          v-model:size="state.size"
          :product="activeProduct"
          class="product__info"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'product-group';
</style>

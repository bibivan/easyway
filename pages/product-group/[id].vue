<script setup lang="ts">
import ProductImages from '~/components/product/images/ProductImages.vue'

const route = useRoute()
const productGroupStore = useProductGroupStore()
const { productGroupState, getProductData } = productGroupStore
const { productGroup } = storeToRefs(productGroupStore)

await useAsyncData('product', () => {
  return getProductData({
    ID: Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
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
          :images="activeProduct.pictures"
        />
        <div
          v-if="activeProduct"
          class="product__info"
        >
          <h1>{{ activeProduct.name }}</h1>

          <div
            v-if="productGroup && state"
            class="product__colors"
          >
            <BaseColorInput
              v-for="color in productGroup.colors"
              :id="activeProduct.groupId + color"
              :key="activeProduct.groupId + color"
              v-model="state.color"
              :style="{ color: color }"
              :value="color"
              type="radio"
            />
          </div>
          <div
            v-if="productGroup && state"
            class="product__sizes"
          >
            <BaseSizeInput
              v-for="size in productGroup.sizes"
              :id="activeProduct.groupId + size"
              :key="activeProduct.groupId + size"
              v-model="state.size"
              :value="size"
              type="radio"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'product-group';
</style>

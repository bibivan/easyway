<script setup lang="ts">
import type { IProduct } from '~/types'

defineProps<{ product: IProduct }>()

const { data: productGroup } = useProductGroupStore()
const modelColor = defineModel<string>('color')
const modelSize = defineModel<string>('size')
</script>

<template>
  <div class="product-info">
    <div class="product-info__head">
      <h1 class="product-info__name">{{ product.name }}</h1>
      <p class="product-info__price">{{ product.priceInt }} ₽</p>
      <p class="product-info__article">{{ product.article }}</p>
    </div>

    <div
      v-if="productGroup"
      class="product-info__items-wrapper"
    >
      <h2 class="product-info__subtitle">Цвет</h2>
      <div class="product-info__colors">
        <BaseColorInput
          v-for="color in productGroup.colors"
          :id="'product_color_' + color"
          :key="'product-color-' + color"
          v-model="modelColor"
          :style="{ color: color }"
          :value="color"
          type="radio"
        />
      </div>
    </div>
    <div
      v-if="productGroup"
      class="product-info__items-wrapper"
    >
      <h2 class="product-info__subtitle">Размер</h2>
      <div class="product-info__sizes">
        <BaseSizeInput
          v-for="size in productGroup.sizes"
          :id="'product_size_' + size"
          :key="'product-size-' + size"
          v-model="modelSize"
          :value="size"
          type="radio"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'product-info';
</style>

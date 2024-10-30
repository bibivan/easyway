<script setup lang="ts">
import { EProductSizeAttr, type IProduct } from '~/types'

const props = defineProps<{
  product: IProduct
  colors: string[]
  sizes: EProductSizeAttr[]
}>()

const { cartState, putToCart: handlePutToCart, deleteCartItem } = useCartStore()

const modelColor = defineModel<string>('color')
const modelSize = defineModel<string>('size')
const productIsInCart = computed(() => arrayHasElem(cartState.data || [], 'id', props.product.id))

const handleDeleteCartItem = () => {
  deleteCartItem(props.product.id)
  useNuxtApp().$toast('Товар удален из коризны')
}
</script>

<template>
  <div class="product-info">
    <div class="product-info__head">
      <h1 class="product-info__name">{{ product.name }}</h1>
      <p class="product-info__price">{{ product.priceInt }} ₽</p>
      <p class="product-info__article">{{ product.article }}</p>
    </div>

    <div class="product-info__items-wrapper">
      <h2 class="product-info__subtitle">Цвет</h2>
      <div class="product-info__colors">
        <BaseColorInput
          v-for="color in colors"
          :id="'product_color_' + color"
          :key="'product-color-' + color"
          v-model="modelColor"
          :style="{ color: color }"
          :value="color"
          type="radio"
        />
      </div>
    </div>
    <div class="product-info__items-wrapper">
      <h2 class="product-info__subtitle">Размер</h2>
      <div class="product-info__sizes">
        <BaseSizeInput
          v-for="size in sizes"
          :id="'product_size_' + size"
          :key="'product-size-' + size"
          v-model="modelSize"
          :value="size"
          type="radio"
        />
      </div>
    </div>

    <div class="product-info__description product-info__items-wrapper">
      <h2 class="product-info__subtitle">Описание</h2>
      <p class="product-info__text">
        {{ product.description }}
      </p>
    </div>
    <div class="product-info__composition product-info__items-wrapper">
      <h2 class="product-info__subtitle">Состав:</h2>
      <p class="product-info__text">
        {{ product.fabric?.composition }}
      </p>
    </div>
    <div class="product-info__care product-info__items-wrapper">
      <h2 class="product-info__subtitle">Состав:</h2>
      <p class="product-info__text">
        {{ product.fabric?.care }}
      </p>
    </div>

    <div class="product-info__actions">
      <button
        v-if="productIsInCart"
        class="btn"
        @click="handleDeleteCartItem"
      >
        Удалить из корзины
      </button>
      <button
        v-else
        class="btn"
        @click="handlePutToCart(product)"
      >
        В корзину
      </button>
      <button
        v-if="false"
        class="btn"
      >
        <SvgFavorite />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'product-info';
</style>

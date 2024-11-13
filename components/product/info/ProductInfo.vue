<script setup lang="ts">
import { EGender, type IProduct, type IProductGroup, type IProductSizeState } from '~/types'

const props = defineProps<{
  productGroup: IProductGroup
  product: IProduct
  sizes: IProductSizeState[]
}>()

const { womanSizeChart, manSizeChart } = useSizeChartMock()
const { cartState, putToCart: handlePutToCart, deleteCartItem } = useCartStore()
const { isMobile } = storeToRefs(useDeviceTypeStore())

const modelColor = defineModel<string>('color')
const modelSize = defineModel<string>('size')
const sizesModalIsShown = ref<boolean>(false)

const productIsInCart = computed(() => arrayHasElem(cartState.data || [], 'id', props.product.id))
const sizeChart = computed(() => {
  if (props.productGroup.gender === EGender.FEMALE) {
    return {
      name: 'Женская одежда',
      data: womanSizeChart
    }
  } else {
    return {
      name: 'Мужская одежда',
      data: manSizeChart
    }
  }
})

const handleDeleteCartItem = () => {
  deleteCartItem(props.product.id)
  useNuxtApp().$toast('Товар удален из коризны', {
    theme: 'dark'
  })
}

const { findItem, addToFavorites, deleteFromFavorites } = useFavoritesStore()
const isInFavorites = computed(() => findItem(props.productGroup.groupId))
const handleToggleFavorite = () => {
  return isInFavorites.value
    ? deleteFromFavorites(props.productGroup.groupId)
    : addToFavorites(props.productGroup)
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
          v-for="color in productGroup.colors"
          :id="product.id + color"
          :key="product.id + color"
          v-model="modelColor"
          :value="color"
          type="radio"
        />
      </div>
    </div>
    <div class="product-info__items-wrapper">
      <div class="product-info__subtitle-wrapper">
        <h2 class="product-info__subtitle">Размер</h2>
        <button
          v-if="!isMobile"
          class="product-info__subtitle-btn"
          @click="sizesModalIsShown = true"
        >
          Размерная сетка <SvgChevronRight />
        </button>
      </div>
      <div class="product-info__sizes">
        <template
          v-for="size in sizes"
          :key="product.id + size.value"
        >
          <BaseSizeInput
            v-if="size.value"
            :id="product.id + size.value"
            v-model="modelSize"
            :value="size.value"
            :label="transformSizeString(size.value)"
            type="radio"
          />
        </template>
      </div>

      <button
        v-show="isMobile"
        class="product-info__subtitle-btn"
        @click="sizesModalIsShown = true"
      >
        Гид по размерам <SvgChevronRight />
      </button>
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
      <h2 class="product-info__subtitle">Рекомендации по уходу:</h2>
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
        class="btn product-info__to-favorite"
        :class="{ 'product-info__to-favorite_active': isInFavorites }"
        @click="handleToggleFavorite"
      >
        <SvgFavorite />
      </button>
    </div>
    <BaseModal
      v-model="sizesModalIsShown"
      dialog-class="clothes-size-table"
    >
      <BaseTable
        :name="sizeChart.name"
        :data="sizeChart.data"
      />
    </BaseModal>
  </div>
</template>

<style scoped lang="scss">
@import 'product-info';
</style>

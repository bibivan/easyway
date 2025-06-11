<script setup lang="ts">
import type { IProductGroup } from '~/types'
import { transformSizeString } from '~/utils/products'


const props = defineProps<{
  data: IProductGroup
  withoutBtn?: boolean
}>()
const {
  cartState,
  putToCart: handlePutToCart,
  deleteCartItem: handleDeleteCartItem
} = useCartStore()
const { isMobile } = storeToRefs(useDeviceTypeStore())
const { state, activeProduct, sizeList } = useActiveProduct(toRef(props, 'data'))

const productIsInCart = computed(() => {
  return arrayHasElem(cartState.data || [], 'id', activeProduct?.value?.id)
})

const { findItem, addToFavorites, deleteFromFavorites } = useFavoritesStore()
const isInFavorites = computed(() => findItem(props.data.groupId))
const handleToggleFavorite = () => {
  return isInFavorites.value ? deleteFromFavorites(props.data.groupId) : addToFavorites(props.data)
}
const badges = computed(() => {
  // console.log(props.data.badges);
  // if (props.data.brand !== 'EAZYWAY') {
  //   props.data.badges.push('easyfit');
  // }
  return props.data.badges;
})


const getBadgeSrc = (badge: string) => {
  const fileName = badge.replace(/\s+/g, '%20') // пробелы на %20
  return isMobile.value
      ? `/img/320_mob_ Button ${fileName}.png`
      : `/img/Button ${fileName}.png`
}
</script>

<template>
  <div
    v-if="activeProduct"
    class="catalog-item"
  >
    <button
      class="catalog-item__to-favorite"
      :class="{ 'catalog-item__to-favorite_active': isInFavorites }"
      @click="handleToggleFavorite"
    >
      <SvgHeart />
    </button>
    <NuxtLink :to="{ name: 'product-group-id', params: { id: data.groupId } }">
      <div class="catalog-item__img-wrapper">
        <img
          v-if="activeProduct.pictures?.length"
          :src="activeProduct.pictures[0]"
          :alt="activeProduct.name"
          class="catalog-item__image"
        />
        <div class="catalog-item__badges">
          <img
              v-for="badge in badges"
              :key="badge"
              :src="getBadgeSrc(badge)"
              :alt="badge"
              class="catalog-item__badge"
          />
        </div>
      </div>
    </NuxtLink>

    <div
      v-if="state"
      class="catalog-item__body"
    >
      <NuxtLink
        :to="{ name: 'product-group-id', params: { id: data.groupId } }"
        class="catalog-item__name"
      >
        {{ activeProduct.name }}
      </NuxtLink>
      <div class="catalog-item__colors">
        <BaseColorInput
          v-for="color in data.colors"
          :id="data.groupId + color"
          :key="data.groupId + color"
          v-model="state.color"
          :value="color"
          type="radio"
        />
      </div>
      <div class="catalog-item__sizes">
        <template
          v-for="(size, idx) in sizeList"
          :key="data.groupId + size"
        >
          <BaseSizeInput
            v-if="size.value"
            :id="data.groupId + size.value + idx"
            v-model="state.size.value"
            :value="size.value"
            :label="transformSizeString(size.value)"
            type="radio"
          />
        </template>
      </div>
      <div class="catalog-item__footer">
        <p
          v-if="(activeProduct.priceDsc ?? 0) > (activeProduct.priceInt ?? 0)"
          class="catalog-item__price__old"
        >
          {{ activeProduct.priceDsc }} ₽
        </p>
        <p class="catalog-item__price">{{ activeProduct.price }} ₽</p>

        <template v-if="!withoutBtn && !isMobile">
          <CatalogItemsCounter
            v-if="productIsInCart && !isMobile"
            :id="activeProduct.id"
            class="catalog-item__counter"
          />
          <button
            v-else-if="productIsInCart"
            class="catalog-item__btn btn"
            @click="handleDeleteCartItem(activeProduct.id)"
          >
            <SvgTrash />
          </button>
          <button
            v-else
            class="catalog-item__btn btn"
            @click="handlePutToCart(activeProduct)"
          >
            <SvgCart />
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'catalog-item';
</style>

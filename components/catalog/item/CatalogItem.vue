<script setup lang="ts">
import type { IProductGroup } from '~/types'
import { transformSizeString } from '~/utils/products'

const props = defineProps<{ data: IProductGroup }>()
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
</script>

<template>
  <div
    v-if="activeProduct"
    class="catalog-item"
  >
    <NuxtLink :to="{ name: 'product-group-id', params: { id: data.groupId } }">
      <div class="catalog-item__img-wrapper">
        <img
          v-if="activeProduct.pictures?.length"
          :src="activeProduct.pictures[0]"
          :alt="activeProduct.name"
          class="catalog-item__image"
        />
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
        <p class="catalog-item__price">{{ activeProduct.price }} ₽</p>

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
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'catalog-item';
</style>

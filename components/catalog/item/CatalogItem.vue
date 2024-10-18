<script setup lang="ts">
import type { IProductGroup } from '~/types'

const props = defineProps<{ data: IProductGroup }>()
const {
  cartState,
  putToCart: handlePutToCart,
  deleteCartItem: handleDeleteCartItem
} = useCartStore()
const { isMobile } = storeToRefs(useDeviceTypeStore())
const { state, activeProduct } = useActiveProduct(toRef(props, 'data'))

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
      <img
        v-if="activeProduct.pictures?.length"
        :src="activeProduct.pictures[0]"
        :alt="activeProduct.name"
        class="catalog-item__img"
      />
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
          :style="{ color: color }"
          :value="color"
          type="radio"
        />
      </div>
      <div class="catalog-item__sizes">
        <BaseSizeInput
          v-for="size in data.sizes"
          :id="data.groupId + size"
          :key="data.groupId + size"
          v-model="state.size"
          :value="size"
          type="radio"
        />
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

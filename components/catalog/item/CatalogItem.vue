<script setup lang="ts">
import { EProductSizeAttr, type IProductGroup } from '~/types'

const props = defineProps<{ data: IProductGroup }>()
const state = reactive<{
  color: string
  size: EProductSizeAttr
  foo: string[]
}>({
  color: props.data.items[0].sfAttrs?.color || props.data.colors[0],
  size: props.data.items[0].sfAttrs?.size || props.data.sizes[0],
  foo: [props.data.colors[0]]
})

const activeProduct = computed(() => {
  return props.data.items.find((item) => {
    return item.sfAttrs?.color === state.color && item.sfAttrs?.size === state.size
  })
})

watch(
  () => state.color,
  () => {
    if (!activeProduct.value) {
      const itemByColor = props.data.items.find((item) => item.sfAttrs?.color === state.color)
      if (itemByColor?.sfAttrs) state.size = itemByColor.sfAttrs.size
    }
  }
)

watch(
  () => state.size,
  () => {
    if (!activeProduct.value) {
      const itemBySize = props.data.items.find((item) => item.sfAttrs?.size === state.size)
      if (itemBySize?.sfAttrs) state.color = itemBySize.sfAttrs.color
    }
  }
)
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

    <div class="catalog-item__body">
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
        <button class="catalog-item__add">
          <SvgCart />
        </button>
      </div>
      <!--      <CatalogItemsCounter :id="activeProduct.id" />-->
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'catalog-item';
</style>

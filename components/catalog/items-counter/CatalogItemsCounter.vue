<script setup lang="ts">
const props = defineProps<{ id: number }>()
const { increaseItemsCount, decreaseItemsCount, cartState } = useCartStore()
const thisCartItem = computed(() => cartState.data?.find((item) => item.id === props.id) || null)
</script>

<template>
  <div
    v-if="thisCartItem"
    class="catalog-counter"
  >
    <button
      class="catalog-counter__minus"
      @click="decreaseItemsCount(id)"
    >
      <SvgMinus />
    </button>
    <div class="catalog-counter__count">{{ thisCartItem.cnt }}</div>
    <button
      class="catalog-counter__plus"
      @click="increaseItemsCount(id)"
    >
      <SvgPlus />
    </button>
  </div>
</template>

<style scoped lang="scss">
@import 'catalog-items-counter';
</style>

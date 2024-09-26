<script setup lang="ts">
import type { ICartItem } from '~/types'

defineProps<{ data: ICartItem }>()

const {
  increaseItemsCount: handleIncreaseItemsCount,
  decreaseItemsCount: handleDecreaseItemsCount
} = useCartStore()
</script>

<template>
  <div class="cart-counter">
    <button
      class="cart-counter__minus"
      @click="handleDecreaseItemsCount(data.id)"
    >
      <SvgMinus />
    </button>
    <div class="cart-counter__count">{{ data.cnt }}</div>
    <button
      class="cart-counter__plus"
      @click="handleIncreaseItemsCount(data.id)"
    >
      <SvgPlus />
    </button>
  </div>
</template>

<style scoped lang="scss">
@import 'cart-items-counter';
</style>

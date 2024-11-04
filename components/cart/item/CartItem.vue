<script setup lang="ts">
import type { ICartItem } from '~/types'

defineProps<{ data: ICartItem }>()

const { deleteCartItem: handleDeleteCartItem } = useCartStore()
</script>

<template>
  <div class="cart-item">
    <div class="cart-item__img-wrapper">
      <img
        class="cart-item__image"
        :src="data.picture"
        :alt="data.name"
      />
      <CartItemsCounter :data="data" />
    </div>

    <div class="cart-item__info">
      <p class="cart-item__name">{{ data.name }}</p>
      <div class="cart-item__params">
        <div class="cart-item__attrs">
          <p class="cart-item__attr">
            <span class="cart-item__label"> Цвет: </span>
            <BaseColorInput
              :id="'color_id_' + data.color"
              class="cart-item__color"
              :style="{ color: data.color }"
              :value="data.color"
              type="radio"
            />
          </p>
          <p class="cart-item__attr">
            <span class="cart-item__label"> Размер: </span>
            {{ data.size }}
          </p>
        </div>
        <div class="cart-item__price">{{ formatNumberWithSpaces(data.price * data.cnt) }} ₽</div>
      </div>
    </div>
    <button
      class="cart-item__delete-btn"
      @click="handleDeleteCartItem(data.id)"
    >
      <SvgTrash />
    </button>
  </div>
</template>

<style scoped lang="scss">
@import 'cart-item';
</style>

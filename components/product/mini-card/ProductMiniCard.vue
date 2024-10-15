<script setup lang="ts">
import { EFetchStatus } from '~/types'

const props = defineProps<{
  productGroupId: number
}>()

const { error, status, data: productGroup, refresh } = useProductGroup(props.productGroupId)
const product = computed(() => productGroup.value?.items[0])
const isShown = ref<boolean>(false)

const handleOpenCard = () => (isShown.value = true)
const handleCloseCard = () => (isShown.value = false)

await refresh()
</script>

<template>
  <div
    class="mini-card"
    :class="{ 'mini-card_opened': isShown }"
  >
    <div
      class="mini-card__overlay"
      @click="handleCloseCard"
    />
    <div
      v-if="isShown"
      class="mini-card__dialog"
    >
      <template v-if="status === EFetchStatus.SUCCESS && product">
        <NuxtLink
          v-if="product.pictures"
          :to="{ name: 'product-group-id', params: { id: productGroupId } }"
        >
          <img
            class="mini-card__img"
            :src="product.pictures[0]"
            :alt="product.name"
          />
        </NuxtLink>
        <div class="mini-card__text">
          <NuxtLink :to="{ name: 'product-group-id', params: { id: productGroupId } }">
            <h3 class="mini-card__name">{{ product.name }}</h3>
          </NuxtLink>
          <button
            v-if="false"
            class="mini-card__to-favorites"
          >
            <SvgFavorite />
            в избранное
          </button>
          <p class="mini-card__price">{{ product.priceInt }}&nbsp;₽</p>
        </div>
      </template>
      <template v-if="status === EFetchStatus.ERROR && error">
        {{ error.message }}
      </template>

      <button
        class="mini-card__close-btn"
        @click="handleCloseCard"
      >
        <SvgCross />
      </button>
    </div>
    <button
      v-if="!isShown"
      class="mini-card__open-btn"
      @click="handleOpenCard"
    >
      <SvgPlus />
    </button>
  </div>
</template>

<style scoped lang="scss">
@import 'product-mini-card';
</style>

<script setup lang="ts">
definePageMeta({
  layout: 'authenticated',
  currentBreadcrumb: 'Избранное'
})

const { favoritesState } = useFavoritesStore()
</script>

<template>
  <div class="favorites">
    <div
      v-if="favoritesState.data"
      class="favorites__list"
    >
      <CatalogItem
        v-for="item in favoritesState.data"
        :key="item.groupId"
        :data="item"
      />
    </div>
    <CommonMessageFrame
      v-else
      title="Здесь пока ничего нет :("
      description="Тут будут модели, которые вы отложите в избранное"
      btn-content="На главную"
      to="/"
    >
      <SvgHeart class="favorites__icon" />
    </CommonMessageFrame>
  </div>
</template>

<style scoped lang="scss">
@import 'profile-favorites';
</style>

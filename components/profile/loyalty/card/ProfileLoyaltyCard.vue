<script setup lang="ts">
defineProps<{
  pointsCount: number
}>()
</script>

<template>
  <div class="card">
    <div class="card__text">
      <p class="card__label">Бонусы</p>
      <p class="card__points">{{ pointsCount }}</p>
    </div>
    <SvgEazywayCard
      class="card__img"
      role="img"
      aria-label="Изображение карты лояльности"
    />
  </div>
</template>

<style scoped lang="scss">
@import 'profile-loyalty-card';
</style>

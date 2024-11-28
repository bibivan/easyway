<script setup lang="ts">
definePageMeta({
  layout: 'authenticated',
  currentBreadcrumb: 'Избранное'
})

const { favoritesState, initFavorites } = useFavoritesStore()

initFavorites()
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
      title="Правила бонусной программы"
      description="
      • Накопленная сумма покупок от 0 рублей 
      • 5% кэшбека начисляются на все покупки 
      • 1 балл = 1 рубль. Баллы начисляются через 14 дней с момента покупки 
      • Приветственные 500 баллов за первый заказ 
      • 500 подарочных баллов на День Рождения. Начисляются за неделю до дня рождения и действуют 14 дней* 
      • Срок действия баллов – 1 год после начисления • Баллами можно оплатить до 15% стоимости товаров  
      • Проверить баланс можно в личном кабинете 
      • Особенности начисления баллов при возврате:   полученные баллы списываются;    потраченные баллы возвращаются  
      * Проверьте в личном кабинете, верно ли указана дата рождения"
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

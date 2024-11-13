<script setup lang="ts">
const props = defineProps<{
  pointsCount: number
}>()

const formattedPoints = computed(() => {
  return declineWord(props.pointsCount, 'балл')
})
</script>

<template>
  <div class="loyalty-text">
    <h2 class="loyalty-text__heading">Моя карта лояльности</h2>
    <p
      v-if="formattedPoints"
      class="loyalty-text__description"
    >
      {{ formattedPoints }} лояльности ожидают активации
    </p>
    <p
      v-else
      class="loyalty-text__description"
    >
      Пока нет начислений
    </p>
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import 'profile-loyalty-text';
</style>

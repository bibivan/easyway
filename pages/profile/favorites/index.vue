<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  layout: 'authenticated'
})
</script>

<template>
  <div>favorites</div>
</template>

<style scoped lang="scss">
@import 'profile-favorites';
</style>

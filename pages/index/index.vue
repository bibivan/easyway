<script lang="ts" setup>
import { EGender } from '~/types/index.js'
</script>

<template>
  <MainPageHero />
  <ProductSuggestions
    suggestions-name="New"
    suggestions-label="Новинки"
    :with-slider="true"
    :params="{ gender: EGender.FEMALE }"
  />
</template>
<style scoped lang="scss">
@import 'index';
</style>

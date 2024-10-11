<script setup lang="ts">
import { EFetchStatus } from '~/types'

const { catalogState, catalogItems } = useCatalogStore()
const { status, error } = catalogState
</script>

<template>
  <section class="section">
    <div class="container">
      <BaseSpinner v-if="status === EFetchStatus.PENDING" />
      <div
        v-if="status === EFetchStatus.SUCCESS"
        class="catalog"
      >
        <CatalogItem
          v-for="item in catalogItems"
          :key="item.groupId"
          :data="item"
        />
      </div>
      <div v-if="status === EFetchStatus.ERROR">{{ error?.message }}</div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'catalog';
</style>

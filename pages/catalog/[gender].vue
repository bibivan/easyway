<script setup lang="ts">
import { EFetchStatus } from '~/types'

const { status, error, data: catalogData } = useCatalogStore()
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
          v-for="item in catalogData?.items"
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

<script setup lang="ts">
import { EFetchStatus, EProductFilters } from '~/types'
import { watch } from 'vue'

const route = useRoute()
const { status, error, data: catalogData } = useCatalog()

watch(
  () => route?.query[EProductFilters.BRAND],
  (value) => {
    const theme = Array.isArray(value) ? value[0] : value || ''

    document?.body.setAttribute('data-theme', theme || '')
  },
  { immediate: true }
)
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

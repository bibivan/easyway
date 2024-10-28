<script setup lang="ts">
import { EFetchStatus, EProductFilters } from '~/types'
import { watch } from 'vue'
import { isEGender } from '~/utils/typeguards/common'

const route = useRoute()
const { isDesktop } = useDeviceTypeStore()
const { status, error, data: catalogData } = useCatalog()
const currentGender = computed(() => {
  const gender = Array.isArray(route.query.gender) ? route.query.gender[0] : route.query.gender
  if (isEGender(gender)) return gender
})

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
  <section class="section catalog">
    <aside
      v-if="isDesktop"
      class="catalog__categories categories"
    >
      <h2 class="categories__heading">Категории товаров</h2>
      <ProductCategories
        class="categories__body"
        :gender="currentGender"
      />
    </aside>
    <div class="container">
      <BaseSpinner v-if="status === EFetchStatus.PENDING" />
      <div
        v-if="status === EFetchStatus.SUCCESS"
        class="catalog__list"
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

<script setup lang="ts">
import { EFetchStatus } from '~/types'
import { isEGender } from '~/utils/typeguards/common'

const route = useRoute()
const { isDesktop } = useDeviceTypeStore()
const { status, error, data } = useCatalog()
const currentGender = computed(() => {
  const gender = Array.isArray(route.query.gender) ? route.query.gender[0] : route.query.gender
  if (isEGender(gender)) return gender
})

console.log('in page', data.value)
</script>

<template>
  <section class="section catalog">
    <aside
      v-if="isDesktop && false"
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
          v-for="item in data?.items"
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

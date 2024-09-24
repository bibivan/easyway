<script setup lang="ts">
const catalogStore = useCatalogStore()
const { catalog } = storeToRefs(catalogStore)

await useAsyncData('catalog', () => {
  const payload = useBaseCatalogPayload()
  return catalogStore.getCatalogData(payload)
})
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="catalog">
        <CatalogItem
          v-for="item in catalog"
          :key="item.groupId"
          :data="item"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'catalog';
</style>

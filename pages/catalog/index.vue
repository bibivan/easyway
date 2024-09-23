<script setup lang="ts">
import { EBrand, EGender, type IGetCatalogPayload } from '~/types'

const { params, meta } = useRoute()
const catalogStore = useCatalogStore()
const { catalog } = storeToRefs(catalogStore)

await useAsyncData('catalog', () => {
  const payload: IGetCatalogPayload = {
    brand: meta.brand ? (meta.brand as string) : EBrand.EASYFIT
  }

  if (params.gender) payload.gender = params.gender as EGender

  return catalogStore.getCatalogData(payload)
})
</script>

<template>
  <div v-if="catalog">
    <div
      v-for="item in catalog"
      :key="item.id"
    >
      {{ item.id }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
import {
  EFetchStatus,
  type IPaginatedDataRaw,
  type IProductGroup,
  type IProductGroupRaw
} from '~/types'

const minProductsPerView = 4
const props = defineProps<{
  suggestionsName: string
  suggestionsLabel: string
  limit?: number
  query: Record<string, string | string[]>
}>()

const { data, error, status } = await useApiFetch<
  IPaginatedDataRaw<IProductGroupRaw[]>,
  IProductGroup[]
>('data', {
  query: {
    limit: props.limit ? props.limit : minProductsPerView,
    ...props.query
  },
  transform: (data) => {
    return productGroupsRawToProductGroups(data.items)
  }
})

const desktopData = computed(() => data.value?.slice(0, 4))
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="product-suggestions">
        <CommonHeading
          v-if="data"
          :title="suggestionsLabel"
          :to="{
            name: 'catalog',
            query
          }"
        />
        <div class="product-suggestions__body">
          <BaseSpinner v-if="status === EFetchStatus.PENDING" />
          <template v-if="status === EFetchStatus.ERROR">{{ error?.message }}</template>
          <template v-if="status === EFetchStatus.SUCCESS">
            <div
              v-if="!limit"
              class="product-suggestions__list"
            >
              <CatalogItem
                v-for="item in desktopData"
                :key="item.groupId"
                :data="item"
              />
            </div>
            <Swiper
              v-else
              class="product-suggestions__swiper"
              :draggable="true"
              :grab-cursor="true"
              :slides-per-view="2"
              :space-between="10"
              :initial-slide="0"
              :breakpoints="{
                768: { slidesPerView: 3 },
                800: { slidesPerView: 4 }
              }"
            >
              <SwiperSlide
                v-for="item in data"
                :key="item.groupId"
              >
                <CatalogItem :data="item" />
              </SwiperSlide>
            </Swiper>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'product-suggestions';
</style>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { EFetchStatus, type IProductGroup, type IProductGroupRaw } from '~/types'

const props = defineProps<{
  suggestionsName: string
  suggestionsLabel: string
  params: Record<string, string>
  withSlider?: boolean
  to: RouteLocationRaw
}>()

const { isDesktop } = useDeviceTypeStore()

const { data, error, status } = await useAsyncData<IProductGroup[]>(
  props.suggestionsName,
  async () => {
    // const data = await useClientFetch<IPaginatedDataRaw<IProductGroupRaw[]>>('/products/get/', {
    //   method: 'GET',
    //   params
    // })

    const data = useCatalogMock()

    return data?.items.map((item: IProductGroupRaw) => {
      return productGroupRawToProductGroup(item)
    })
  }
)
const desktopData = computed(() => data.value?.slice(0, 4))
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="product-suggestions">
        <CommonHeading
          v-if="data"
          :title="suggestionsLabel"
          :to="to"
        />
        <div class="product-suggestions__body">
          <BaseSpinner v-if="status === EFetchStatus.PENDING" />
          <template v-if="status === EFetchStatus.ERROR">{{ error?.message }}</template>
          <template v-if="status === EFetchStatus.SUCCESS">
            <Swiper
              v-if="!isDesktop && withSlider"
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
            <div
              v-else
              class="product-suggestions__list"
            >
              <CatalogItem
                v-for="item in desktopData"
                :key="item.groupId"
                :data="item"
              />
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'product-suggestions';
</style>

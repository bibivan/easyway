<script setup lang="ts">
import type { IProductGroup, IProductGroupRaw } from '~/types'

const props = defineProps<{
  suggestionsName: string
  suggestionsLabel: string
  params: Record<string, string>
  withSlider?: boolean
}>()

const { isDesktop } = useDeviceTypeStore()
const loading = ref<boolean>(false)

const { data, error } = await useAsyncData<IProductGroup[]>(props.suggestionsName, async () => {
  // if (getRandomNumber(1, 100) > 50) throw new Error('500 Internal Server Error')

  loading.value = true
  // const data = await useClientFetch<IPaginatedDataRaw<IProductGroupRaw[]>>('/products/get/', {
  //   method: 'GET',
  //   params
  // })
  const data = await useCatalogMock()
  const transformedData = data?.items.map((item: IProductGroupRaw) =>
    productGroupRawToProductGroup(item)
  )
  // .slice(0, 4)

  loading.value = true
  return transformedData
})
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="product-suggestions">
        <div class="product-suggestions__head">
          <h2 class="product-suggestions__heading">{{ suggestionsLabel }}</h2>
          <NuxtLink
            class="product-suggestions__link"
            to="catalog"
          >
            Смотреть все
            <SvgChevronRight />
          </NuxtLink>
        </div>
        <div class="product-suggestions__body">
          <template v-if="data">
            <Swiper
              v-if="!isDesktop && withSlider"
              class="product-suggestions__swiper"
              :draggable="true"
              :grab-cursor="true"
              :slides-per-view="4"
              :space-between="10"
              :initial-slide="0"
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
                v-for="item in data"
                :key="item.groupId"
                :data="item"
              />
            </div>
          </template>
          <template v-if="error">
            {{ error.message || 'Произошла ошибка при запросе данных' }}
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'product-suggestions';
</style>

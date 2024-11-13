<script setup lang="ts">
import { EFetchStatus, type IPlacedOrders, type IPlacedOrdersRaw } from '~/types'

definePageMeta({
  layout: 'authenticated',
  currentBreadcrumb: 'Заказы'
})

const {
  data,
  error,
  refresh: handleGetPlacedOrders,
  status
} = useAuthFetch<IPlacedOrdersRaw, IPlacedOrders>('placed-orders', {
  transform: (data: IPlacedOrdersRaw) => {
    return placedOrdersRawToPlacedOrders(data)
  }
})
// const { data, error, refresh: handleGetPlacedOrders, status } = usePlacedOrdersMock()
</script>

<template>
  <BaseLoading
    v-if="status === EFetchStatus.PENDING"
    color="#232323"
  />
  <div
    v-if="data && status === EFetchStatus.SUCCESS"
    class="placed-orders"
  >
    <div
      v-for="(list, date) in data"
      :key="'order-date-' + date"
      class="placed-orders__item"
    >
      <time class="placed-orders__date">{{ date }}</time>

      <div class="placed-orders__list">
        <CatalogItem
          v-for="(item, idx) in list"
          :key="date + item.groupId + idx"
          :data="item"
          :without-btn="true"
        />
      </div>
    </div>
  </div>
  <CommonMessageFrame
    v-else-if="status === EFetchStatus.SUCCESS"
    title="Заказов пока не было :("
    description="Все ващи покупки можно будет посмотреть в этом разделе"
    btn-content="На главную"
    to="/"
  >
    <SvgCart class="placed-orders__icon" />
  </CommonMessageFrame>

  <CommonErrorView
    :error="error"
    :title="error?.message"
    :loading="status === EFetchStatus.PENDING"
    @on-refresh="handleGetPlacedOrders"
  />
</template>

<style scoped lang="scss">
@import 'profile-orders';
</style>

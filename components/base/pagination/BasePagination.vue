<script setup lang="ts">
import type { IPagination } from '~/types'

defineProps<{
  data: IPagination
}>()
const minLinksCount = 3
const maxLinksCount = 5
const countDifference = 2

</script>

<template>
  <div class="pagination">
    <NuxtLink
      class="pagination__btn pagination__btn_first"
      :class="{ 'pagination__btn_non-clickable': data.page === 1 }"
      :to="{
        query: {
          ...$route.query,
          page: 1
        }
      }"

    >
      <SvgChevronLeft />
    </NuxtLink>
    <template
      v-for="page in data.pages"
      :key="'go-to-page' + page"
    >
      <NuxtLink
        v-if="
          (page >= data.page - countDifference && page <= data.page + countDifference) ||
          (page <= maxLinksCount && data.page <= minLinksCount) ||
          (page > data.pages - maxLinksCount && data.page >= data.pages - countDifference)
        "
        class="pagination__btn"
        :class="{ pagination__btn_active: data.page === +page }"
        :to="{
          query: {
            ...$route.query,
            page: page
          }
        }"
      >
        {{ page }}
      </NuxtLink>
    </template>
    <SvgDots
      v-if="data.page < data.pages - countDifference"
      class="pagination__dots"
    />

    <NuxtLink
      class="pagination__btn pagination__btn_last"
      :class="{ 'pagination__btn_non-clickable': data.page === data.pages }"
      :to="{
        query: {
          ...$route.query,
          page: data.pages
        }
      }"
    >
      <SvgChevronRight />
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
@import 'base-pagination';
</style>

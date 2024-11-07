<script setup lang="ts" generic="T extends unknown[], U">
import type { ITableData } from '~/types'

defineProps<{
  name: string
  data: ITableData<T, U>
}>()
</script>

<template>
  <div class="base-table">
    <h2 class="base-table__name">{{ name }}</h2>
    <table class="base-table__container">
      <thead class="base-table__head">
        <tr class="base-table__row">
          <th
            v-for="(headCell, key, index) in data.headers"
            :key="'head-cell-index' + index"
            class="base-table__cell base-table__cell_head"
          >
            {{ headCell }}
          </th>
        </tr>
      </thead>
      <tbody class="base-table__body">
        <tr
          v-for="(row, rowIndex) in data.rows"
          :key="'row-' + rowIndex"
          class="base-table__row"
        >
          <td
            v-for="(cell, cellIndex) in row"
            :key="'cell-' + rowIndex + '-' + cellIndex"
            class="base-table__cell"
          >
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
@import 'base-table';
</style>

<script lang="ts" setup>
import { EErrorPosition } from '~/types'
import type { Ref } from 'vue'

withDefaults(
  defineProps<{
    message?: string | Ref<string>
    errorPosition?: EErrorPosition
  }>(),
  {
    errorPosition: EErrorPosition.ABSOLUTE
  }
)
</script>

<template>
  <span :class="['error-message', 'error-message_position_' + errorPosition]">
    {{ message }}
  </span>
</template>

<style scoped lang="scss">
@import 'base-error-message';
</style>

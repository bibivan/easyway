<script lang="ts" setup>
import type { Validation } from '@vuelidate/core'
import type { TErrorPosition } from '~/types'

withDefaults(
  defineProps<{
    errorInstance: Validation
    validatedProperty?: string
    nestedValidatedProperty?: string
    position?: TErrorPosition
    className?: string
  }>(),
  {
    position: 'absolute',
    className: '',
    validatedProperty: undefined,
    nestedValidatedProperty: undefined
  }
)
</script>

<template>
  <template v-if="validatedProperty">
    <div :class="`${className} error-message error-message_position_${position}`">
      {{ errorInstance[validatedProperty]?.$errors[0]?.$message }}
    </div>
  </template>
  <template v-else>
    <div :class="`${className} error-message error-message_position_${position}`">
      {{ errorInstance.$errors[0]?.$message }}
    </div>
  </template>
</template>

<style scoped lang="scss">
@import 'base-error-message';
</style>

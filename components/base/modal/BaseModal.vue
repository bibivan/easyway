<script setup lang="ts">
const { isDesktop } = storeToRefs(useDeviceTypeStore())
const { globalScrollIsHidden } = storeToRefs(useGlobalScrollbarStore())
const model = defineModel<boolean>()

const handleCloseModal = () => {
  model.value = false
}

watch(model, (val) => {
  if (isDesktop.value) {
    return val ? (globalScrollIsHidden.value = true) : (globalScrollIsHidden.value = false)
  } else {
    return val
      ? document.body.classList.add('body_no-scroll')
      : document.body.classList.remove('body_no-scroll')
  }
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="model"
      class="base-modal"
      @click.self="handleCloseModal"
    >
      <div class="base-modal__dialog">
        <button
          class="base-modal__close-btn"
          @click="handleCloseModal"
        >
          <SvgCross />
        </button>
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
@import 'base-modal';
</style>

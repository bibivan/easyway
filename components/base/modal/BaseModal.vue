<script setup lang="ts">
const isOpened = defineModel<boolean>({
  required: true
})

const handleCloseModal = () => {
  isOpened.value = false
}

const { setNoScroll } = useNoScroll()
watch(isOpened, (val) => setNoScroll(val))
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpened"
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

<script setup lang="ts">
defineProps<{
  settingsName: string
  modalClass?: string
  dialogClass?: string
}>()

const isOpened = defineModel<boolean>({
  required: true
})

const { setNoScroll } = useNoScroll()
watch(isOpened, (val) => setNoScroll(val))
</script>

<template>
  <Teleport to="body">
    <transition name="slide-up">
      <div
        v-if="isOpened"
        class="settings-modal"
        :class="modalClass"
        @click.self="isOpened = false"
      >
        <div class="settings-modal__head">
          <p class="settings-modal__name">{{ settingsName }}</p>
          <button
            class="settings-modal__close-btn"
            @click="isOpened = false"
          >
            <SvgChevronUp />
          </button>
        </div>
        <div
          class="settings-modal__body"
          :class="dialogClass"
        >
          <slot />
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped lang="scss">
@import 'common-settings-modal';
</style>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  images: [string, string, string] // Три изображения для разных экранов
  note?: string
  imagesTop?: boolean
  title: string
  to: RouteLocationRaw
}>()

const backgroundImage = ref('')

// Функция для установки фонового изображения
function updateBackgroundImage() {
  const width = window.innerWidth
  if (width >= 1024){
    backgroundImage.value = `url(${props.images[0]})`
  }
  else if (width > 860 && width < 1024) {
    backgroundImage.value = `url(${props.images[1]})`
  }
  else if (width <= 860) {
    backgroundImage.value = `url(${props.images[2]})`
  } else {
    backgroundImage.value = 'none'
  }
}

onMounted(() => {
  updateBackgroundImage()
  window.addEventListener('resize', updateBackgroundImage)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateBackgroundImage)
})
</script>

<template>
  <section class="hero section">
    <div
        class="hero__wrapper"
        :style="{ backgroundImage: backgroundImage }"
    >
      <NuxtLink
          class="hero__banner"
          :to="to"
      >
        <span class="hero__image hero__image_1">
          <span
              v-if="note"
              class="hero__note"
          >
            {{ note }}
          </span>
        </span>
      </NuxtLink>
    </div>
    <div class="hero__container container">
      <div class="hero__content">
        <p class="hero__heading">{{ title }}</p>
        <NuxtLink
            class="btn hero__btn"
            :to="to"
        >
          купить
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'main-page-hero-bf';

</style>

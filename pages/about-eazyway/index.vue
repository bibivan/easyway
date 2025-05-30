<script setup lang="ts">
import { Swiper as SwiperClass } from 'swiper'
import type { TNullable } from '~/types'

const { isDesktop } = storeToRefs(useDeviceTypeStore())
const tabs = useAboutTabsMock()
const swiperInstance = ref<TNullable<SwiperClass>>(null)
const activeSlideIndex = ref<number>(0)

const goToSlide = (idx: number) => swiperInstance.value?.slideTo(idx)
const onSwiperInit = (swiper: SwiperClass) => {
  swiperInstance.value = swiper

  swiper.on('slideChange', () => {
    activeSlideIndex.value = swiper.activeIndex
  })
}
</script>

<template>
  <CommonHero
    class="easyway-about-hero"
    text="Ты — вдохновение для&nbsp;других. Твоя сила мотивирует!"
  />
  <div
    v-if="isDesktop"
    class="section about-slider"
  >
    <section>
      <div class="container">
        <div class="about-slider__buttons">
          <button
            v-for="(tab, idx) in tabs"
            :key="'swiper-key-' + idx"
            class="about-slider__btn"
            :class="{ 'about-slider__btn_active': idx === activeSlideIndex }"
            @click="goToSlide(idx)"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>
    </section>
    <div class="container about-slider__container">
      <Swiper
        class="base-swiper about-slider__swiper"
        :draggable="true"
        :grab-cursor="true"
        :initial-slide="0"
        :modules="[SwiperScrollbar]"
        :scrollbar="{
          el: '.swiper-scrollbar',
          hide: false
        }"
        slides-per-view="auto"
        @swiper="onSwiperInit"
      >
        <SwiperSlide
          v-for="(tab, idx) in tabs"
          :key="'swiper-slide-' + idx"
          class="about-slider__slide"
          :class="{ 'about-slider__slide_w_lg': idx === 2 }"
        >
          <component
            :is="tab.component"
            class="about-slider__inner-slide"
          />
        </SwiperSlide>

        <div class="swiper-scrollbar about-slider__scrollbar" />
      </Swiper>
    </div>
  </div>
  <template v-else>
    <AboutMission />
    <AboutBrand />
    <AboutHistory />
    <AboutStyle />
    <AboutQuality />
    <AboutCommunity />
  </template>
</template>

<style scoped lang="scss">
@import 'about-eazyway';
</style>

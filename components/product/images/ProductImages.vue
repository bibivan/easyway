<script setup lang="ts">
defineProps<{ images: string[] }>()

const { isMobile } = storeToRefs(useDeviceTypeStore())
</script>

<template>
  <div class="product__images">
    <Swiper
      v-if="isMobile"
      class="base-swiper product__swiper"
      :draggable="true"
      :grab-cursor="true"
      :loop="true"
      :modules="[SwiperPagination, SwiperAutoplay]"
      :space-between="20"
      :initial-slide="0"
      :autoplay="{
        delay: 250000,
        disableOnInteraction: false
      }"
      :pagination="{
        el: '.product__swiper-pagination',
        clickable: true
      }"
    >
      <SwiperSlide
        v-for="(img, index) in images"
        :key="'product-image-' + index"
      >
        <img
          :src="img"
          alt="product-image"
          class="product__img"
        />
      </SwiperSlide>

      <div class="product__swiper-pagination swiper-pagination base-swiper__pagination" />
    </Swiper>
    <template v-else>
      <img
        v-for="(img, index) in images"
        :key="'product-image-' + index"
        :src="img"
        alt="product-image"
        class="product__img"
      />
    </template>
  </div>
</template>

<style scoped lang="scss">
@import 'product-images';
</style>

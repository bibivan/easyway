<script setup lang="ts">
defineProps<{ images: string[] }>()

const { isMobile } = useDeviceTypeStore()
</script>

<template>
  <div class="product-images">
    <Swiper
      v-if="isMobile"
      class="base-swiper product-images__swiper"
      :draggable="true"
      :grab-cursor="true"
      :modules="[SwiperPagination]"
      :space-between="20"
      :initial-slide="0"
      :pagination="{
        el: '.product-images__swiper-pagination',
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
          class="product-images__img"
        />
      </SwiperSlide>

      <div class="product-images__swiper-pagination swiper-pagination base-swiper__pagination" />
    </Swiper>
    <template v-else>
      <img
        v-for="(img, index) in images"
        :key="'product-image-' + index"
        :class="{
          'product-images__img_w_full': index === 0,
          'product-images__img_row_2': index === 1,
          'product-images__img_row_3': index === 2,
          'product-images__img_span_row_2': index === 3
        }"
        :src="img"
        alt="product-image"
        class="product-images__img"
      />
    </template>
  </div>
</template>

<style scoped lang="scss">
@import 'product-images';
</style>

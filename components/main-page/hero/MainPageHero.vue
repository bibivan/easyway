<script setup lang="ts">
const { isMobile } = storeToRefs(useDeviceTypeStore())
</script>

<template>
  <section class="hero section">
    <Swiper
      class="base-swiper hero__swiper"
      :draggable="true"
      :grab-cursor="true"
      :loop="true"
      :modules="[SwiperPagination, SwiperAutoplay]"
      :space-between="20"
      :initial-slide="0"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      :pagination="{
        el: '.hero__swiper-pagination',
        clickable: true
      }"
    >
      <SwiperSlide
        ><MainPageHeroBanner
          class="hero__banner"
          :images="[
            'https://place-hold.it/600x600/#23232/#fff',
            'https://place-hold.it/600x600/#23232/#fff',
            'https://place-hold.it/600x600/#23232/#fff'
          ]"
      /></SwiperSlide>

      <SwiperSlide
        ><MainPageHeroBanner
          class="hero__banner"
          :images="[
            'https://place-hold.it/600x600/#23232/#fff',
            'https://place-hold.it/600x600/#23232/#fff',
            'https://place-hold.it/600x600/#23232/#fff'
          ]"
      /></SwiperSlide>

      <SwiperSlide
        ><MainPageHeroBanner
          class="hero__banner"
          :images="[
            'https://place-hold.it/600x600/#23232/#fff',
            'https://place-hold.it/600x600/#23232/#fff',
            'https://place-hold.it/600x600/#23232/#fff'
          ]"
      /></SwiperSlide>

      <div class="hero__swiper-pagination swiper-pagination base-swiper__pagination" />
    </Swiper>

    <div class="container">
      <div class="hero__content">
        <div class="hero__text">
          <p class="hero__note">feel the energy of summer with new sportswear<br />collection</p>
          <p class="hero__heading">New&nbsp;in <br v-if="isMobile" />sport</p>
        </div>
        <button class="btn hero__btn">Купить</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'main-page-hero';
</style>

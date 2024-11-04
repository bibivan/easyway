<script setup lang="ts">
const { isDesktop } = storeToRefs(useDeviceTypeStore())
</script>

<template>
  <section
    class="our-mission typographic-about"
    :class="{ section: !isDesktop }"
  >
    <div :class="{ container: !isDesktop }">
      <div class="our-mission__content">
        <div class="our-mission__circles">
          <img
            v-if="!isDesktop"
            class="our-mission__circle our-mission__circle_with_img"
            src="public/img/about/about-our-mission-circle.png"
            alt="Девушка-атлет"
          />

          <span class="our-mission__circle our-mission__circle_with_icon"><SvgKettlebell /></span>
          <span class="our-mission__circle our-mission__circle_bg_light" />
          <span
            v-if="isDesktop"
            class="our-mission__circle"
          />
        </div>
        <h2 class="our-mission__heading typographic-about__heading">Наша миссия:</h2>
        <p class="our-mission__description typographic-about__text">
          Мы создаем комфортную, функциональную и стильную спортивную одежду. Она вдохновляет наших девушек на занятия спортом.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'about-mission';
</style>
<script setup lang="ts"></script>

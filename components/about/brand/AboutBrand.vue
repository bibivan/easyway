<script setup lang="ts">
const { isDesktop } = storeToRefs(useDeviceTypeStore())
</script>

<template>
  <section class="about-brand typographic-about">
    <div :class="{ container: !isDesktop }">
      <div class="about-brand__content">
        <div class="about-brand__text">
          <h2 class="about-brand__heading typographic-about__heading">О бренде</h2>
          <div class="typographic-about__description">
            <p class="typographic-about__text">
              <span class="typographic-about__text typographic-about__text_strong">EAZYWAY</span>
              &mdash; современный российский бренд спортивной одежды, история создания которого
              началась в
              <span class="typographic-about__text typographic-about__text_strong"
                >2019&nbsp;г.</span
              >
            </p>
            <p class="typographic-about__text">
              Мы&nbsp;создаем не&nbsp;просто одежду, а&nbsp;качество жизни, образ мышления
              современного, стильного, уверенного в&nbsp;себе и&nbsp;развивающегося человека.
            </p>
            <p class="typographic-about__text">
              Уделяя внимание каждой детали, мы&nbsp;стремимся, чтобы наша одежда сочетала
              в&nbsp;себе красоту, комфорт и&nbsp;функциональность.
            </p>
            <p class="typographic-about__text">
              Всегда рады вдохновлять вас на&nbsp;новые результаты в&nbsp;спорте и&nbsp;жизни!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'about-brand';
</style>

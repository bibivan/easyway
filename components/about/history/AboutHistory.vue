<script setup lang="ts">
const historyEventsData = useHistoryEvents()
const { isDesktop } = useDeviceTypeStore()
</script>

<template>
  <section class="about-history typographic-about">
    <div class="about-history__wrapper">
      <div class="about-history__content">
        <div class="about-history__head">
          <h2 class="about-history__heading typographic-about__heading">История создания</h2>
          <div
            v-if="isDesktop"
            class="about-history__figure"
          >
            <img
              class="about-history__img"
              src="public/img/about/about-history-2.jpg"
              alt="girl-image"
            />
          </div>
        </div>
        <div class="about-history__body">
          <AboutHistoryEvent
            v-for="(event, idx) in historyEventsData"
            :key="'history-event-' + idx"
            class="about-history__event"
            :class="{
              'about-history__event_xl': idx === 0,
              'about-history__event_lg': idx === 2,
              'about-history__event_md': idx === 1 || idx === 4,
              'about-history__event_sm': idx === 3 || idx === 5
            }"
            :event-data="event"
            :is-first-item="idx === 0"
            :is-last-item="idx === historyEventsData.length - 1"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'about-history';
</style>

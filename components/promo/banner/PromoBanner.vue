<script setup lang="ts">
defineProps<{
  btnContent: string
  description: string
  image: string
  overlayText?: string
  rotated?: boolean
  title: string
}>()
</script>

<template>
  <section class="section">
    <div class="promo">
      <div class="container">
        <div class="promo__content">
          <img
            class="promo__banner"
            :class="{
              promo__banner_rotated: rotated
            }"
            :src="image"
            :alt="title"
          />
          <p
            v-if="overlayText"
            class="promo__overlay-text"
          >
            {{ overlayText }}
          </p>
          <div class="promo__text">
            <h2 class="promo__heading">{{ title }}</h2>
            <p class="promo__description">{{ description }}</p>
            <button class="btn btn_light">{{ btnContent }}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'promo-banner';
</style>

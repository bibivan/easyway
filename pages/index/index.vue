<script lang="ts" setup>
import { EBrand, EGender, EProductFilters } from '~/types/index.js'
// const collaborators = useCollaboratorsMock()
const community = useCommunityMock()
</script>

<template>
  <Swiper
    class="base-swiper hero-swiper"
    :draggable="true"
    :grab-cursor="true"
    :loop="true"
    :modules="[SwiperPagination, SwiperAutoplay]"
    :initial-slide="0"
    :autoplay="{
      delay: 10000,
      disableOnInteraction: false
    }"
    :pagination="{
      el: '.hero-swiper__pagination',
      clickable: true
    }"
  >
    <SwiperSlide>
      <MainPageHero
        title="EAZYWAY"
        :to="{
          name: 'catalog',
          query: { [EProductFilters.BRAND]: EBrand.EAZYWAY }
        }"
        :images="['./img/hero/main/3.jpg', './img/hero/main/4.jpg']"
      />
    </SwiperSlide>
    <SwiperSlide>
      <MainPageHero
        title="easyfit"
        note="Бренд-линейка easyfit"
        :images-top="true"
        :to="{
          name: 'catalog',
          query: { [EProductFilters.BRAND]: EBrand.EASYFIT }
        }"
        :images="['./img/hero/main/1.jpg', './img/hero/main/2.jpg']"
      />
    </SwiperSlide>

    <div class="hero-swiper__pagination swiper-pagination base-swiper__pagination" />
  </Swiper>
  <ProductSuggestions
    suggestions-name="New"
    suggestions-label="Новинки"
    :with-slider="true"
    no-mobile-slider
    :limit="4"
    :query="{
      [EProductFilters.NEW]: 'YES'
    }"
  />
  <!--      query: { [EProductFilters.BRAND]: EBrand.EAZYWAY }-->
  <CatalogBanner
    class="eazyway-banner"
    btn-content="купить"
    description="Создай свой образ"
    image="/img/promo-banner-eazyway.jpg"
    title="TOTAL BLACK"
    :to="{
      name: 'catalog',
      query: { [EProductFilters.BRAND]: EBrand.EAZYWAY }
    }"
  />

  <CatalogBanner
    class="easyfit-banner"
    btn-content="купить"
    description="Создай свой образ"
    title="EASYFIT"
    :with-overlay-text="true"
    :to="{
      name: 'catalog',
      query: { [EProductFilters.BRAND]: EBrand.EASYFIT }
    }"
  />

  <!--  <section class="section">-->
  <!--    <div class="container">-->
  <!--      <div class="collaborators">-->
  <!--        <CommonHeading-->
  <!--          class="collaborators__heading"-->
  <!--          title="Образы"-->
  <!--          :to="{-->
  <!--            name: 'catalog',-->
  <!--            query: { [EProductFilters.GENDER]: EGender.FEMALE }-->
  <!--          }"-->
  <!--        />-->
  <!--        <ul class="collaborators__list">-->
  <!--          <li-->
  <!--            v-for="(collaborator, index) in collaborators"-->
  <!--            :key="'imagery-' + index"-->
  <!--            class="collaborators__item"-->
  <!--          >-->
  <!--            <ProductCollaboratorCard-->
  <!--              :img="collaborator.img"-->
  <!--              :name="collaborator.name"-->
  <!--            >-->
  <!--              <ProductMiniCard :product-group-id="index" />-->
  <!--            </ProductCollaboratorCard>-->
  <!--          </li>-->
  <!--        </ul>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </section>-->
  <section class="section">
    <div class="container">
      <div class="collaborators">
        <CommonHeading
          class="collaborators__heading"
          title="Коммьюнити #eazyladies"
        />
        <ul class="collaborators__list">
          <li
            v-for="(collaborator, index) in community"
            :key="'imagery-' + index"
            class="collaborators__item"
          >
            <ProductCollaboratorCard
              :img="collaborator.img"
              :name="collaborator.name"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section v-show="false" class="section">
    <div class="container">
      <CommonSubscriptionForm />
    </div>
  </section>
</template>
<style scoped lang="scss">
@import 'index';
</style>

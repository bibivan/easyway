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
      delay: 5000,
      disableOnInteraction: false
    }"
    :pagination="{
      el: '.hero-swiper__pagination',
      clickable: true
    }"
  >
    <SwiperSlide>
      <MainPageHerobf
        title="BLACK FRIDAY"
        :to="{
          name: 'catalog',
          query: { [EProductFilters.BRAND]: EBrand.EAZYWAY, ['erid'] : '2VtzqxcQKA5' }
        }"
        :images="['./img/hero/main/main-bf-1-desk.jpg', './img/hero/main/main-bf-1-tablet.jpg', './img/hero/main/main-bf-1-mob.jpg']"
      />
    </SwiperSlide>
    <SwiperSlide>
      <MainPageHerobf
        title="BLACK FRIDAY"
        note="Бренд-линейка easyfit"
        :images-top="true"
        :to="{
          name: 'catalog',
          query: { [EProductFilters.BRAND]: EBrand.EASYFIT, ['erid'] : '2VtzqxEBAtm' }
        }"
        :images="['./img/hero/main/main-bf-2-desk.jpg', './img/hero/main/main-bf-2-tablet.jpg', './img/hero/main/main-bf-2-mob.jpg']"
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
    title="easyfit"
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
          title="Комьюнити #eazyladies"
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

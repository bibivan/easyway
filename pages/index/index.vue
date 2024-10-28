<script lang="ts" setup>
import { EBrand, EGender, EProductFilters } from '~/types/index.js'
const collaborators = useCollaboratorsMock()
const community = useCommunityMock()
const { isMobile } = useDeviceTypeStore()
</script>

<template>
  <Swiper
    class="base-swiper hero-swiper"
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
      el: '.hero-swiper__pagination',
      clickable: true
    }"
  >
    <SwiperSlide>
      <MainPageHero
        :title="`New\u00A0in ${isMobile ? '\n' : ''}sport`"
        :note="'feel the energy of summer with new sportswear\ncollection'"
        :to="{
          name: 'catalog',
          query: { [EProductFilters.BRAND]: EBrand.EASYWAY }
        }"
        :images="['./img/hero/main/3.jpg', './img/hero/main/4.jpg']"
      />
    </SwiperSlide>
    <SwiperSlide>
      <MainPageHero
        title="easyfit"
        note="Бренд-линейка easyfit"
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
    :query="{ gender: EGender.FEMALE }"
    :to="{
      name: 'catalog',
      query: { [EProductFilters.GENDER]: EGender.FEMALE }
    }"
  />
  <CatalogBanner
    btn-content="купить"
    description="Создай свой образ"
    image="/img/promo-banner-easyfit-2.jfif"
    title="TOTAL BLACK"
    :to="{
      name: 'catalog',
      query: { [EProductFilters.GENDER]: EGender.FEMALE }
    }"
  />

  <CatalogBanner
    btn-content="купить"
    description="Создай свой образ"
    image="/img/promo-banner-easyfit-1.png"
    overlay-text="EASYFIT"
    title="EASYFIT"
    :to="{
      name: 'catalog',
      query: { [EProductFilters.GENDER]: EGender.FEMALE }
    }"
  />

  <section class="section">
    <div class="container">
      <div class="collaborators">
        <CommonHeading
          class="collaborators__heading"
          title="Образы"
          :to="{
            name: 'catalog',
            query: { [EProductFilters.GENDER]: EGender.FEMALE }
          }"
        />
        <ul class="collaborators__list">
          <li
            v-for="(collaborator, index) in collaborators"
            :key="'imagery-' + index"
            class="collaborators__item"
          >
            <ProductCollaboratorCard
              :img="collaborator.img"
              :name="collaborator.name"
            >
              <ProductMiniCard :product-group-id="index" />
            </ProductCollaboratorCard>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="collaborators">
        <CommonHeading
          class="collaborators__heading"
          title="Амбассадоры"
          :to="{
            name: 'catalog',
            query: { [EProductFilters.GENDER]: EGender.FEMALE }
          }"
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
</template>
<style scoped lang="scss">
@import 'index';
</style>

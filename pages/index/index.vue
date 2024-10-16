<script lang="ts" setup>
import { EGender, EProductFilters } from '~/types/index.js'
const collaborators = useCollaboratorsMock()
</script>

<template>
  <MainPageHero />
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
    image="https://s3-alpha-sig.figma.com/img/eb29/4b75/1566dec526060dfa98f1048c62038a59?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NNnsOJKuAsBeANfv-Fg86XetxYevicZ8F46ZWh3XDmdD~JJJTTRSdlT9PEDATkj-HmEi9xCnPt9jN4ZmTfOZjqkBMGIaMYssPD-UwWvUjDqNTgfNM8f7~RRNnqCC3hZI2w7U4ubbrBgwopaShgRTSJ8zyW50EA9464QxgKrxlhaNfQ8BxgXNJb7NM8WHcJADQcMLYixUYwUeivnM1dj63x3SkNt7C48lejZ8RSgAWRjqJcHquF2CQKFUGb~ywDmi7Y0tJAH8QRtR1XABl2XZ0dGn5~NgfgyOaPwI4bpbHgplRATFI~QQYsQvPw2DIpwlQ3Oxldk4F6rN3T3bG4cdkQ__"
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
            v-for="(collaborator, index) in collaborators"
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

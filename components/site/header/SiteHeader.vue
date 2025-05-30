<script setup lang="ts">
import { EBrand, EGender, EProductFilters } from '~/types'

const { isDesktop } = storeToRefs(useDeviceTypeStore())
const { handleShowCart } = useCartOpening()
const state = reactive({
  menuIsOpened: false,
  categoriesIsOpened: false
})

const { setToken } = useAuthorizationStore()
setToken()

const { initFavorites } = useFavoritesStore()
initFavorites()

const { getMaleCategories, getFemaleCategories } = useProductCategoriesStore()
await Promise.all([getMaleCategories(), getFemaleCategories()])
</script>

<template>
  <header
    id="header"
    class="header header_position_fixed"
  >
    <div class="container">
      <div class="header__content">
        <div class="header__logo-wrapper">
          <button
            v-if="isDesktop"
            class="header__categories-btn"
            @click="state.categoriesIsOpened = true"
          >
            <SvgBurger />
          </button>
          <NuxtLink
            class="header__logo logo"
            to="/"
          >
            <SvgLogo />
          </NuxtLink>
        </div>
        <nav class="header__nav">
          <NuxtLink
            class="header__link easyfit-link"
            :to="{
              name: 'catalog',
              query: { [EProductFilters.BRAND]: EBrand.EASYFIT }
            }"
          >
            Бренд-линейка easyfit
          </NuxtLink>
          <NuxtLink
            class="header__link"
            :to="{
              name: 'catalog',
              query: {
                [EProductFilters.GENDER]: EGender.MALE
              }
            }"
            >Мужское</NuxtLink
          >
          <NuxtLink
            class="header__link"
            :to="{
              name: 'catalog',
              query: {
                [EProductFilters.GENDER]: EGender.FEMALE
                // [EProductFilters.BRAND]: EBrand.EAZYWAY
              }
            }"
            >Женское</NuxtLink
          >
          <NuxtLink
            class="header__link"
            :to="{
              name: 'catalog',
              query: {
                [EProductFilters.CATEGORY]: 'Новая коллекция'
                // [EProductFilters.BRAND]: EBrand.EAZYWAY
              }
            }"
            >Новая коллекция</NuxtLink
          >

                    <a
                      class="header__link"
                      href="#"
                      data-giftery-widget="25735"
                      data-giftery-widget-color="000000"
                      >Подарочные сертификаты</a
                    >
        </nav>
        <div class="header__actions">
          <NuxtLink
            class="header__action header__action_favorites"
            :to="{ name: 'profile-favorites' }"
          >
            <SvgHeart />
          </NuxtLink>
          <NuxtLink
            v-if="isDesktop"
            class="header__action header__action_auth"
            :to="{ name: 'profile-user' }"
          >
            <SvgProfile />
          </NuxtLink>
          <button
            class="header__action header__action_cart"
            @click="handleShowCart"
          >
            <CartItemsAmount />
          </button>

          <button
            v-show="!isDesktop && !state.menuIsOpened"
            class="header__action header__action_burger"
            @click="state.menuIsOpened = true"
          >
            <SvgBurger />
          </button>
          <button
            v-show="!isDesktop && state.menuIsOpened"
            class="header__action"
            @click="state.menuIsOpened = false"
          >
            <SvgCross />
          </button>
        </div>
      </div>
    </div>
    <transition name="slide-right">
      <SiteMenu
        v-show="state.menuIsOpened"
        @on-close-menu="state.menuIsOpened = false"
      />
    </transition>
    <transition name="slide-left">
      <SiteCategoriesMenu
        v-show="state.categoriesIsOpened"
        :is-opened="state.categoriesIsOpened"
        @on-close-menu="state.categoriesIsOpened = false"
      />
    </transition>
  </header>
</template>

<style scoped lang="scss">
@import 'site-header';
.easyfit-link:hover {
  color: #00adbb;
}
.easyfit-link::before {
  background-color: #00adbb;
}
</style>

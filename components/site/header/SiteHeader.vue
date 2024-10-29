<script setup lang="ts">
import { EBrand, EGender, EProductFilters } from '~/types'

const { handleShowCart } = useCartOpening()
const { isDesktop } = useDeviceTypeStore()

const state = reactive({
  menuIsOpened: false,
  categoriesIsOpened: false
})
</script>

<template>
  <header class="header header_easynutrition header_position_fixed">
    <div class="container">
      <div class="header__content">
        <div class="header__logo-wrapper">
          <button
            v-if="isDesktop && $route.name !== 'catalog' && false"
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
            class="header__link"
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
              query: { [EProductFilters.GENDER]: EGender.MALE }
            }"
            >Мужское</NuxtLink
          >
          <NuxtLink
            class="header__link"
            :to="{
              name: 'catalog',
              query: { [EProductFilters.GENDER]: EGender.FEMALE }
            }"
            >Женское</NuxtLink
          >

          <!--          <NuxtLink-->
          <!--            class="header__link"-->
          <!--            :to="{ name: 'gift-cards' }"-->
          <!--            >Подарочные карты</NuxtLink-->
          <!--          >-->
        </nav>
        <div class="header__actions">
          <!--          <NuxtLink-->
          <!--            class="header__action header__action_favorites"-->
          <!--            to="/favorites"-->
          <!--          >-->
          <!--            <SvgHeart />-->
          <!--          </NuxtLink>-->
          <!--          <NuxtLink-->
          <!--            class="header__action header__action_auth"-->
          <!--            to="/favorites"-->
          <!--          >-->
          <!--            <SvgProfile />-->
          <!--          </NuxtLink>-->
          <button
            class="header__action header__action_cart"
            @click="handleShowCart"
          >
            <CartItemsAmount />
          </button>

          <template v-if="!isDesktop">
            <button
              v-if="!state.menuIsOpened"
              class="header__action header__action_burger"
              @click="state.menuIsOpened = true"
            >
              <SvgBurger />
            </button>
            <button
              v-if="state.menuIsOpened"
              class="header__action"
              @click="state.menuIsOpened = false"
            >
              <SvgCross />
            </button>
          </template>
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
</style>

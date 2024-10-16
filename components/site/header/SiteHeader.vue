<script setup lang="ts">
import { EBrand, EGender, EProductFilters } from '~/types'

const { handleShowCart } = useCartOpening()

const state = reactive({
  menuIsOpened: false
})
</script>

<template>
  <header class="header header_easynutrition header_position_fixed">
    <div class="container">
      <div class="header__content">
        <NuxtLink
          class="header__logo logo"
          to="/"
        >
          <SvgLogo />
        </NuxtLink>
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

          <NuxtLink
            class="header__link"
            :to="{ name: 'gift-cards' }"
            >Подарочные карты</NuxtLink
          >
        </nav>
        <div class="header__actions">
          <NuxtLink
            class="header__action header__action_favorites"
            to="/favorites"
          >
            <SvgHeart />
          </NuxtLink>
          <NuxtLink
            class="header__action header__action_auth"
            to="/favorites"
          >
            <SvgProfile />
          </NuxtLink>
          <button
            class="header__action header__action_cart"
            @click="handleShowCart"
          >
            <CartItemsAmount />
          </button>

          <button class="header__action header__action_burger">
            <SvgBurger
              v-if="!state.menuIsOpened"
              @click="state.menuIsOpened = true"
            />
            <SvgCross
              v-if="state.menuIsOpened"
              @click="state.menuIsOpened = false"
            />
          </button>
        </div>
      </div>
    </div>
    <transition name="slide-right">
      <SiteMenu v-show="state.menuIsOpened" />
    </transition>
  </header>
</template>

<style scoped lang="scss">
@import 'site-header';
</style>

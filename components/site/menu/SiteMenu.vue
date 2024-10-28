<script setup lang="ts">
import { EGender } from '~/types'

const submenusState = reactive({
  maleIsOpened: false,
  femaleIsOpened: false
})
</script>

<template>
  <ul class="menu">
    <li class="menu__item">
      <NuxtLink class="menu__link">Профиль</NuxtLink>
    </li>
    <li class="menu__item">
      <NuxtLink class="menu__link">Новинки</NuxtLink>
    </li>
    <li class="menu__item">
      <div class="submenu__head">
        <NuxtLink class="menu__link">Женщинам</NuxtLink>
        <button
          class="menu__btn"
          :class="{ menu__btn_active: submenusState.femaleIsOpened }"
          @click="submenusState.femaleIsOpened = !submenusState.femaleIsOpened"
        >
          <SvgChevronBottom />
        </button>
      </div>
      <transition name="slide-vertical">
        <ProductCategories
          v-show="submenusState.femaleIsOpened"
          class="submenu__body"
          :gender="EGender.FEMALE"
        />
      </transition>
    </li>
    <li
      class="menu__item submenu"
      :class="{ menu__item_active: submenusState.maleIsOpened }"
    >
      <div class="submenu__head">
        <NuxtLink class="menu__link">Мужчинам</NuxtLink>
        <button
          class="menu__btn"
          :class="{ menu__btn_active: submenusState.maleIsOpened }"
          @click="submenusState.maleIsOpened = !submenusState.maleIsOpened"
        >
          <SvgChevronBottom />
        </button>
      </div>
      <transition name="slide-vertical">
        <ProductCategories
          v-show="submenusState.maleIsOpened"
          class="submenu__body"
          :gender="EGender.MALE"
        />
      </transition>
    </li>
    <li
      class="menu__item"
      :class="{ menu__item_active: submenusState.femaleIsOpened }"
    >
      <NuxtLink class="menu__link">Подарочные карты</NuxtLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import 'site-menu';
</style>

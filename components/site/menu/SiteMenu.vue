<script setup lang="ts">
import { EBrand, EGender, EProductFilters } from '~/types'

const emit = defineEmits<{ onCloseMenu: [void] }>()

const route = useRoute()
const submenusState = reactive({
  maleIsOpened: false,
  femaleIsOpened: false
})

watch(
  computed(() => [route.name, route.query]),
  () => emit('onCloseMenu')
)
</script>

<template>
  <ul class="menu">
    <!--    <li class="menu__item">-->
    <!--      <NuxtLink class="menu__link">Профиль</NuxtLink>-->
    <!--    </li>-->
    <li class="menu__item">
      <div class="submenu__head">
        <NuxtLink
          class="menu__link"
          :to="{
            name: 'catalog',
            query: { [EProductFilters.GENDER]: EGender.FEMALE }
          }"
          >Женщинам</NuxtLink
        >
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
        <NuxtLink
          class="menu__link"
          :to="{
            name: 'catalog',
            query: { [EProductFilters.GENDER]: EGender.MALE }
          }"
          >Мужчинам</NuxtLink
        >
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
    <!--    <li-->
    <!--      class="menu__item"-->
    <!--      :class="{ menu__item_active: submenusState.femaleIsOpened }"-->
    <!--    >-->
    <!--      <NuxtLink class="menu__link">Подарочные карты</NuxtLink>-->
    <!--    </li>-->

    <li class="menu__item">
      <NuxtLink
        class="menu__link"
        :to="{
          name: 'catalog',
          query: { [EProductFilters.BRAND]: EBrand.EASYFIT }
        }"
        >Брэнд-линейка easyfit</NuxtLink
      >
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import 'site-menu';
</style>

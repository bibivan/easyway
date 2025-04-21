<script setup lang="ts">
import { EBrand, EGender, EProductFilters } from '~/types'

const emit = defineEmits<{ onCloseMenu: [void] }>()

const route = useRoute()
const { maleCategories, femaleCategories } = storeToRefs(useProductCategoriesStore())
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
    <li
      class="menu__item submenu"
      :class="{ menu__item_active: submenusState.femaleIsOpened }"
    >
      <div class="submenu__head">
        <NuxtLink
          class="menu__link"
          :to="{
            name: 'catalog',
            query: {
              [EProductFilters.GENDER]: EGender.FEMALE,
              [EProductFilters.BRAND]: EBrand.EAZYWAY
            }
          }"
          >Женщинам</NuxtLink
        >
        <button
          class="menu__btn"
          :class="{ menu__btn_active: submenusState.femaleIsOpened }"
          @click="submenusState.femaleIsOpened = !submenusState.femaleIsOpened"
        >
          <SvgChevronDown />
        </button>
      </div>
      <transition name="slide-vertical">
        <ProductCategories
          v-show="submenusState.femaleIsOpened"
          class="submenu__body"
          :gender="EGender.FEMALE"
          :data="femaleCategories"
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
          <SvgChevronDown />
        </button>
      </div>
      <transition name="slide-vertical">
        <ProductCategories
          v-show="submenusState.maleIsOpened"
          class="submenu__body"
          :gender="EGender.MALE"
          :data="maleCategories"
        />
      </transition>
    </li>

    <li class="menu__item">
      <NuxtLink
        class="menu__link easyfit-link"
        :to="{
          name: 'catalog',
          query: { [EProductFilters.BRAND]: EBrand.EASYFIT }
        }"
        >Бренд-линейка easyfit</NuxtLink
      >
    </li>

    <li class="menu__item menu__item_with_divider">
      <NuxtLink
        class="menu__link"
        :to="{ name: 'profile-user' }"
      >
        Профиль
      </NuxtLink>
    </li>
    <li class="menu__item">
      <NuxtLink
        class="menu__link"
        :to="{ name: 'profile-orders' }"
      >
        Заказы
      </NuxtLink>
    </li>
    <li class="menu__item">
      <NuxtLink
        class="menu__link"
        :to="{ name: 'profile-favorites' }"
      >
        Избранное
      </NuxtLink>
    </li>
    <li class="menu__item">
      <NuxtLink
        class="menu__link"
        :to="{ name: 'profile-loyalty' }"
      >
        Карта лояльности
      </NuxtLink>
    </li>
    <li class="menu__item">
      <a
        class="menu__link"
        href="#"
        data-giftery-widget="25735"
        data-giftery-widget-color="000000"
      >
        Подарочные сертификаты
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import 'site-menu';
.easyfit-link:hover {
  color: #00adbb;
}
</style>

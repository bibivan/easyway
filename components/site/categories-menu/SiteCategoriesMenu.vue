<script setup lang="ts">
import { EGender } from '~/types'

defineProps<{
  isOpened: boolean
}>()

const emit = defineEmits<{ onCloseMenu: [void] }>()
const query = computed(() => useRoute().query)
const selectedGender = ref<EGender>(EGender.FEMALE)
const { categoriesState } = useProductCategoriesStore()

const categories = computed(() => {
  if (selectedGender.value === EGender.FEMALE) return categoriesState.data.female
  if (selectedGender.value === EGender.MALE) return categoriesState.data.male
})

watch(query, () => emit('onCloseMenu'))
</script>

<template>
  <div class="categories-menu">
    <div
      v-if="isOpened"
      class="categories-menu__overlay"
      @click="$emit('onCloseMenu')"
    />
    <div class="categories-menu__dialog">
      <div class="categories-menu__head">
        <button
          class="categories-menu__tab-btn"
          :class="{ 'categories-menu__tab-btn_active': selectedGender === EGender.FEMALE }"
          @click="selectedGender = EGender.FEMALE"
        >
          Женщинам
        </button>
        <button
          class="categories-menu__tab-btn"
          :class="{ 'categories-menu__tab-btn_active': selectedGender === EGender.MALE }"
          @click="selectedGender = EGender.MALE"
        >
          Мужчинам
        </button>
        <button
          class="categories-menu__close-btn"
          @click="$emit('onCloseMenu')"
        >
          <SvgCross />
        </button>
      </div>
      <div class="categories-menu__body">
        <ProductCategories
          v-if="categories"
          class="categories-menu__list"
          :gender="selectedGender"
          :data="categories"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'site-categories-menu';
</style>

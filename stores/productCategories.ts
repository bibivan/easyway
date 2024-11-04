import {
  EBrand,
  EGender,
  EProductFilters,
  type IProductCategoriesState,
  type TDefaultState,
  type TNullable
} from '~/types'

export const useProductCategoriesStore = defineStore('product_categories_store', () => {
  const route = useRoute()

  // data
  const categoriesState = reactive<TDefaultState<IProductCategoriesState>>({
    data: {
      male: null,
      female: null,
      current: null
    },
    error: null,
    loading: false
  })

  // getters
  const maleCategories = computed(() => categoriesState.data.male)
  const femaleCategories = computed(() => categoriesState.data.female)
  const currentCategories = computed(() => categoriesState.data.current)
  const query = computed(() => ({
    [EProductFilters.GENDER]: route.query[EProductFilters.GENDER],
    ...(route.query[EProductFilters.GENDER] !== EGender.MALE && {
      [EProductFilters.BRAND]: route.query[EProductFilters.BRAND]
    })
  }))

  // actions
  const maleCategoriesFetch = useApiFetch('categories', {
    query: { [EProductFilters.GENDER]: EGender.MALE },
    immediate: false,
    onResponse({ response }) {
      if (categoriesState.data) categoriesState.data.male = response._data.categories
    }
  })

  const femaleCategoriesFetch = useApiFetch('categories', {
    query: {
      [EProductFilters.GENDER]: EGender.FEMALE,
      [EProductFilters.BRAND]: EBrand.EAZYWAY
    },
    immediate: false,
    onResponse({ response }) {
      if (categoriesState.data) categoriesState.data.female = response._data.categories
    }
  })

  const currentCategoriesFetch = useApiFetch('categories', {
    query,
    watch: [query],
    onResponse({ response }) {
      if (categoriesState.data) categoriesState.data.current = response._data.categories
    }
  })

  return {
    categoriesState,

    maleCategories,
    femaleCategories,
    currentCategories,
    getMaleCategories: maleCategoriesFetch.refresh,
    getFemaleCategories: femaleCategoriesFetch.refresh,
    getCurrentCategories: currentCategoriesFetch.refresh
  }
})

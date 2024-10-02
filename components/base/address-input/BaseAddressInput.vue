<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { helpers, required } from '@vuelidate/validators'
import {
  EErrorPosition,
  type IAddressInputState,
  type IAddressSuggestion,
  type ILocationRestrictionItem,
  type TNullable
} from '~/types'

const props = withDefaults(
  defineProps<{
    addressData: TNullable<IAddressSuggestion>
    addressQuery?: TNullable<string>
    checkFullAddress?: TNullable<boolean>
    disabled?: boolean
    errorPosition?: EErrorPosition
    id: string
    locationRestrictions?: ILocationRestrictionItem[]
    placeholder?: string
    theme?: string
  }>(),
  { placeholder: 'Адрес' }
)

const emit = defineEmits<{
  'update:addressData': [IAddressSuggestion]
}>()

const indexOfFirstAddressInList = 0
const indexOfHiddenAddressInList = -1
const inputRef = ref<HTMLInputElement>()
const state = reactive<IAddressInputState>({
  dropdownIsOpened: false,
  addressIsSelected: false,
  requestTimeout: null,
  inputValue: '',
  addressSuggestions: [] as IAddressSuggestion[],
  highlightItemIndex: indexOfHiddenAddressInList
})

const validationRules = computed(() => ({
  inputValue: {
    required: helpers.withMessage('Введите адрес', required),
    addressSelected: helpers.withMessage(
      'Выберите адрес из выпадающего списка',
      () => !!state.addressIsSelected
    ),
    fullAddress: helpers.withMessage('Для доставки курьером введите полный адрес', () => {
      return props.checkFullAddress ? !!props.addressData?.data?.house : true
    })
  }
}))

const v$ = useVuelidate(validationRules, state)
const { isValid, hasError, isFocused, errorMessage } = useInputValidation(v$)

const handleBlur = () => {
  isFocused.value = false
  v$.value.$reset()
}

const handleSetCurrentAddress = (addressItem: IAddressSuggestion) => {
  state.highlightItemIndex = indexOfHiddenAddressInList
  state.dropdownIsOpened = false
  state.addressIsSelected = true
  state.inputValue = addressItem.value
  emit('update:addressData', addressItem)
  v$.value.$touch()
}

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  state.addressIsSelected = false
  state.dropdownIsOpened = true
  getSuggestions(target.value)
}

const fetchSuggestion = async (val: string) => {
  return await useDadataFetch<{ suggestions: IAddressSuggestion[] }>('suggest/address', {
    body: {
      query: val,
      locations: props.locationRestrictions
    }
  })
}

const getSuggestions = (val: string) => {
  clearTimeout(state.requestTimeout as ReturnType<typeof setTimeout>)
  state.requestTimeout = setTimeout(async () => {
    const { suggestions } = await fetchSuggestion(val)

    state.addressSuggestions = suggestions
  }, 500)
}

const onMoveFocus = (e: KeyboardEvent) => {
  if (e.code === 'ArrowUp' && state.highlightItemIndex > indexOfFirstAddressInList) {
    --state.highlightItemIndex
  }
  if (e.code === 'ArrowDown' && state.highlightItemIndex < state.addressSuggestions?.length - 1) {
    ++state.highlightItemIndex
  }
  if (e.code === 'Enter') {
    handleSetCurrentAddress(state.addressSuggestions[state.highlightItemIndex])
    inputRef.value?.blur()
  }
}

watch(
  () => props.addressQuery,
  async (val) => {
    if (val) {
      const { suggestions } = await fetchSuggestion(val)

      state.inputValue = val
      handleSetCurrentAddress(suggestions[0])
    }
  },
  { immediate: true }
)
</script>

<template>
  <div
    class="address-input input-block"
    :class="[
      'address-input',
      {
        ['input-block_' + theme]: theme,
        'input-block_valid': isValid && !!state.inputValue,
        'input-block_invalid': hasError
      }
    ]"
  >
    <div class="address-input__block">
      <SvgCheckmark class="input-block__checkmark" />
      <input
        :id="id"
        ref="inputRef"
        v-model="state.inputValue"
        class="input-block__input"
        type="text"
        :disabled="disabled"
        :placeholder="placeholder ? placeholder : ''"
        @input="handleInput"
        @focus="isFocused = true"
        @blur="handleBlur"
        @keydown="onMoveFocus"
      />
      <BaseErrorMessage
        v-if="hasError"
        class="input-block__error"
        :message="errorMessage"
        :error-position="errorPosition"
      />
    </div>

    <ClientOnly>
      <ul
        v-if="!isEmpty(state.addressSuggestions) && state.dropdownIsOpened"
        class="address-input__list address-list"
      >
        <li
          v-for="(address, index) in state.addressSuggestions"
          :key="(address.data.fias_id || '') + index"
          class="address-list__item"
          :class="{ 'address-list__item_focused': state.highlightItemIndex === index }"
          @click.prevent.stop="handleSetCurrentAddress(address)"
        >
          {{ address.value }}
        </li>
      </ul>
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss">
@import 'base-address-input.vue';
</style>

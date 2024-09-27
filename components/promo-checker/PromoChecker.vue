<script setup lang="ts">
import { helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

defineProps<{ totalSum: number }>()

const { isMobile } = storeToRefs(useDeviceTypeStore())
const { promo, initPromoData, checkPromoCode, cancelPromo } = usePromoStore()
const promoInputValue = ref<string>('')
const $externalResults = ref()
const validationTriggered = ref(false)

const validationRules = computed(() => ({
  data: helpers.withMessage('Ошибка', () => !!promo.error || validationTriggered.value)
}))

const v$ = useVuelidate(validationRules, promo, { $externalResults })

const handleSubmit = async () => {
  v$.value.$reset()
  validationTriggered.value = true
  await checkPromoCode(promoInputValue.value)
  $externalResults.value = promo.error ? promo.error : ''
  v$.value.$touch()
}

const handleCancelPromo = () => {
  promoInputValue.value = ''
  validationTriggered.value = false
  cancelPromo()
  v$.value.$reset()
}

const handleResetValidation = () => {
  if (!promoInputValue.value) v$.value.$reset()
}

onMounted(() => {
  initPromoData()
  if (promo.data) validationTriggered.value = true
})

watch(
  () => promo.data,
  (val) => {
    promoInputValue.value = val?.name ? val.name : ''
  }
)
</script>

<template>
  <div class="promo-checker">
    <form
      action="#"
      class="promo-checker__form"
      @submit.prevent
    >
      <BaseInput
        id="promo_checker_input"
        v-model="promoInputValue"
        class="promo-checker__input"
        placeholder="Промокод"
        type="text"
        :disabled="!!promo.data"
        :error-instance="v$"
        @change="handleResetValidation"
      />
      <button
        v-if="(promoInputValue || !isMobile) && !promo.data"
        class="btn promo-checker__btn"
        @click="handleSubmit"
      >
        Применить
      </button>

      <button
        v-if="promo.data"
        class="btn promo-checker__btn"
        @click="handleCancelPromo"
      >
        Отменить
      </button>
    </form>

    <p class="promo-checker__info label-value-info">
      <span class="label-value-info__label">Общий</span>
      <span class="label-value-info__value">{{ formatNumberWithSpaces(totalSum) }} ₽</span>
    </p>
    <div
      v-if="promo.data"
      class="promo-checker__info label-value-info"
    >
      <span class="label-value-info__label">Скидка</span>
      <span class="label-value-info__value">-{{ promo.data.value }}%</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'promo-checker';
</style>

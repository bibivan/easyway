<script setup lang="ts">
import { helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

defineProps<{ totalSum: number }>()

const { isMobile } = storeToRefs(useDeviceTypeStore())
const { promoState, initPromoData, checkPromoCode, cancelPromo } = usePromoStore()
const $externalResults = ref()
const validationTriggered = ref(false)

const validationRules = computed(() => ({
  value: helpers.withMessage('Ошибка', () => !!promoState.error || validationTriggered.value)
}))

const v$ = useVuelidate(validationRules, promoState.data, { $externalResults })

const handleSubmit = async () => {
  if (promoState.data.code) {
    v$.value.$reset()
    validationTriggered.value = true
    await checkPromoCode(promoState.data.code)
    $externalResults.value = promoState.error ? promoState.error : ''
    v$.value.$touch()
  }
}

const handleCancelPromo = () => {
  validationTriggered.value = false
  cancelPromo()
  v$.value.$reset()
}

const handleResetValidation = () => v$.value.$reset()

onMounted(() => {
  initPromoData()
  if (promoState.data.value) validationTriggered.value = true
})
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
        v-model="promoState.data.code"
        class="promo-checker__input"
        placeholder="Промокод"
        type="text"
        :disabled="!!promoState.data.value"
        :error-instance="v$"
        @blur="handleResetValidation"
      />
      <button
        v-if="(promoState.data.code || !isMobile) && !promoState.data.value"
        class="btn promo-checker__btn"
        @click="handleSubmit"
      >
        <BaseSpinner
          v-if="promoState.loading"
          class="promo-checker__loading"
        />
        <template v-else> Применить </template>
      </button>

      <button
        v-if="promoState.data.value"
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
      v-if="promoState.data.value"
      class="promo-checker__info label-value-info"
    >
      <span class="label-value-info__label">Скидка</span>
      <span class="label-value-info__value">-{{ promoState.data.value }}%</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'promo-checker';
</style>

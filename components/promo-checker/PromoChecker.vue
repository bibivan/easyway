<script setup lang="ts">
import { helpers, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

defineProps<{ totalSum: number }>()

const { isMobile } = storeToRefs(useDeviceTypeStore())
const { promoState, initPromoData, checkPromoCode, cancelPromo } = usePromoStore()
const $externalResults = ref({ code: '' })

const validationRules = computed(() => ({
  code: {
    required: helpers.withMessage('Введите промокод', required)
  }
}))

const v$ = useVuelidate(validationRules, promoState.data, { $externalResults })
const { isValid, hasError, errorMessage } = useValidationInfo(v$)

const handleSubmit = async () => {
  if (promoState.data.code) {
    await checkPromoCode(promoState.data.code)
    if (promoState.error) $externalResults.value.code = promoState.error
    else $externalResults.value.code = ''
  }
  v$.value.$touch()
}

const handleCancelPromo = () => {
  cancelPromo()
  v$.value.$reset()
}

onMounted(() => initPromoData())
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
        :class="{
          'input-block_valid': isValid && !!promoState.data.value,
          'input-block_invalid': hasError
        }"
        placeholder="Промокод"
        type="text"
        :no-error-message="true"
        :disabled="!!promoState.data.value"
        @focus="v$.$reset()"
      >
        <BaseErrorMessage :message="errorMessage" />
      </BaseInput>
      <button
        v-if="!promoState.data.value"
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

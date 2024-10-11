<script setup lang="ts">
import { helpers, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

defineProps<{ totalSum: number }>()

const { promo, error, loading, initPromoData, checkPromoCode, cancelPromo } = usePromoStore()
const $externalResults = ref({ code: '' })

const validationRules = computed(() => ({
  code: {
    required: helpers.withMessage('Введите промокод', required)
  }
}))

const v$ = useVuelidate(validationRules, promo.value, { $externalResults })
const { isValid, hasError, errorMessage } = useValidationInfo(v$)

const handleSubmit = async () => {
  if (promo.value.code) {
    await checkPromoCode()
    if (error.value) $externalResults.value.code = error.value
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
        v-model="promo.code"
        class="promo-checker__input"
        :class="{
          'input-block_valid': isValid && !!promo.amount,
          'input-block_invalid': hasError
        }"
        placeholder="Промокод"
        type="text"
        :no-error-message="true"
        :disabled="!!promo.amount"
        @focus="v$.$reset()"
      >
        <BaseErrorMessage :message="errorMessage" />
      </BaseInput>
      <button
        v-if="!promo.amount"
        class="btn promo-checker__btn"
        @click="handleSubmit"
      >
        <BaseSpinner
          v-if="loading"
          class="promo-checker__loading"
        />
        <template v-else> Применить </template>
      </button>

      <button
        v-if="promo.amount"
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
      v-if="promo.amount"
      class="promo-checker__info label-value-info"
    >
      <span class="label-value-info__label">Скидка</span>
      <span class="label-value-info__value">-{{ promo.amount }}%</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'promo-checker';
</style>

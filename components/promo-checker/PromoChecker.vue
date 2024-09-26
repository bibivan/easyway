<script setup lang="ts">
import { helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

const { promo, checkPromoCode } = usePromoStore()
const promoInputValue = ref<string>('')

const validationRules = computed(() => ({
  data: helpers.withMessage(promo.error || '', () => !!promo.data)
}))

const v$ = useVuelidate(validationRules, promo)

const handleSubmit = async () => {
  v$.value.$reset()
  await checkPromoCode(promoInputValue.value)
  v$.value.$touch()
}

const handleResetValidation = () => {
  if (!promoInputValue.value) v$.value.$reset()
}
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
        :error-instance="v$"
        @change="handleResetValidation"
      />
      <button
        v-if="promoInputValue"
        class="btn"
        @click="handleSubmit"
      >
        Применить
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import 'promo-checker';
</style>

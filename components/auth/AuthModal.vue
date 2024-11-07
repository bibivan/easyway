<script setup lang="ts">
import type { IAuthDataState } from '~/types'
import { useVuelidate } from '@vuelidate/core'

const authDataState = reactive<IAuthDataState>({
  phone: null,
  code: null,
  privacyDataConsent: false,
  emailMarketing: false
})
const { closeAuthModal: handleCloseModal, getCode } = useAuthorizationStore()
const v$ = useVuelidate()

const handleSubmitForm = async () => {
  const result = await v$.value.$validate()
  if (result && authDataState.phone) {
    await getCode(authDataState.phone)
  }
}
</script>

<template>
  <div
    class="auth-modal"
    @click.self="handleCloseModal"
  >
    <div class="auth-modal__dialog">
      <div class="auth-modal__content">
        <h2 class="auth-modal__heading">Вход или регистрация</h2>

        <form
          class="auth-modal__form"
          action="/public"
          @submit.prevent="handleSubmitForm"
        >
          <BasePhoneInput
            id="auth_phone_id"
            v-model="authDataState.phone"
            :required-val="true"
          />
          <BaseCodeVerifier
            v-model="authDataState.code"
            :code-length="4"
          />
          <button class="btn">Далее</button>

          <BaseCheckbox
            id="personal_data_consent"
            v-model="authDataState.privacyDataConsent"
            :required-val="true"
          >
            <template #label> Даю согласие на обработку персональных данных </template>
          </BaseCheckbox>
          <BaseCheckbox
            id="personal_data_consent"
            v-model="authDataState.emailMarketing"
            :required-val="true"
          >
            <template #label>
              Я согласен получать информацию от компании «Капитал-Инвест» через электронную почту и
              SMS.
            </template>
          </BaseCheckbox>
        </form>

        <button
          class="auth-modal__close-btn"
          @click="handleCloseModal"
        >
          <SvgChevronUp />
          <span>назад</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'auth-modal';
</style>

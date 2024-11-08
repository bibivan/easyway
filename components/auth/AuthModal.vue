<script setup lang="ts">
import type { IAuthDataState } from '~/types'
import { useVuelidate } from '@vuelidate/core'
import VOtpInput from 'vue3-otp-input'

const authDataState = reactive<IAuthDataState>({
  phone: null,
  code: null,
  privacyDataConsent: false,
  emailMarketing: false
})
const authStore = useAuthorizationStore()
const { closeAuthModal, getCode, checkCode } = authStore
const { token } = storeToRefs(authStore)
const v$ = useVuelidate()

const handleSubmitPhone = async () => {
  const result = await v$.value.$validate()
  if (result && authDataState.phone) {
    await getCode(authDataState.phone)
  }
}

const handleCloseModal = () => closeAuthModal()

const handleSubmitCode = async () => {
  if (authDataState.code) await checkCode(authDataState.code)
  if (token.value) {
    closeAuthModal()
    await navigateTo({ name: 'profile-data' })
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
          @submit.prevent="handleSubmitPhone"
        >
          <BasePhoneInput
            id="auth_phone_id"
            v-model="authDataState.phone"
            :required-val="true"
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
            id="personal_data_marketing"
            v-model="authDataState.emailMarketing"
            :required-val="true"
          >
            <template #label>
              Я согласен получать информацию от компании «Капитал-Инвест» через электронную почту и
              SMS.
            </template>
          </BaseCheckbox>
        </form>

        <form
          class="auth-modal__form"
          action="/"
          @submit.prevent="handleSubmitCode"
        >
          <v-otp-input
            v-model="authDataState.code"
            class="auth-modal__otp"
            input-classes="auth-modal__input-otp"
            separator=" "
            :num-inputs="4"
            :should-auto-focus="true"
            :should-focus-order="true"
            :placeholder="['', '', '', '']"
            @on-complete="handleSubmitCode"
          />
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

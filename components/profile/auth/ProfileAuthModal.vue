<script setup lang="ts">
import { IAuthDataState, ICodeCheckingResponse } from '~/types'
import { useVuelidate } from '@vuelidate/core'
import VOtpInput from 'vue3-otp-input'
import { FetchResponse } from 'ofetch'

const authDataState = reactive<IAuthDataState>({
  phone: null,
  code: '',
  privacyDataConsent: false,
  emailMarketing: false,
  codeCheckingIsShown: false,
  errorMessage: null
})

const authStore = useAuthorizationStore()
const { closeAuthModal, getCode, checkCode } = authStore
const { token } = storeToRefs(authStore)
const { ticker, initTimer } = useTimer()
const v$ = useVuelidate()

const refreshCode = () => {
  authDataState.errorMessage = null
  authDataState.code = ''
  initTimer()
}

const handleSubmitPhone = async () => {
  const result = await v$.value.$validate()

  if (result && authDataState.phone) {
    try {
      const { success } = await getCode(authDataState.phone)

      if (success) {
        authDataState.codeCheckingIsShown = true
        refreshCode()
      }
    } catch (e) {
      console.error(e)
    }
  }
}

const handleSubmitCode = async () => {
  authDataState.errorMessage = null
  if (!authDataState.code || !authDataState.phone) return

  let res
  try {
    res = await checkCode(authDataState.code, authDataState.phone)

    if (token.value) {
      closeAuthModal()
      await navigateTo({ name: 'profile-user' })
    }
  } catch (e) {
    if (e instanceof Error) authDataState.errorMessage = e.message
  }
}

const handleCloseModal = () => closeAuthModal()
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
          v-if="!authDataState.codeCheckingIsShown"
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
          v-if="authDataState.codeCheckingIsShown"
          class="auth-modal__form"
          action="/public"
          @submit.prevent
        >
          <p class="auth-modal__info">
            Введите код, который отправлен на&nbsp;номер +7{{ authDataState.phone }}
          </p>
          <div class="auth-modal__otp-wrapper">
            <v-otp-input
              v-model:value="authDataState.code"
              class="auth-modal__otp"
              input-classes="auth-modal__input-otp"
              separator=" "
              :num-inputs="4"
              :should-auto-focus="true"
              :should-focus-order="true"
              :placeholder="['', '', '', '']"
              @on-complete="handleSubmitCode"
            />
            <BaseErrorMessage
              v-if="authDataState.errorMessage"
              :message="authDataState.errorMessage"
            />
          </div>
          <p
            v-if="ticker"
            class="auth-modal__info"
          >
            Повторная отправка через {{ ticker }} сек
          </p>
          <button
            v-if="!ticker"
            class="btn"
            @click="handleSubmitPhone"
          >
            отправить смс еще раз
          </button>
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
@import 'profile-auth-modal';
</style>

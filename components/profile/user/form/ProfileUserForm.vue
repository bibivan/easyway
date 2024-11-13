<script setup lang="ts">
import { EFetchStatus, ESize, type IUserData } from '~/types'
import { transformSizeString } from '~/utils/products'
import { useVuelidate } from '@vuelidate/core'

const props = defineProps<{ user: IUserData }>()
const emit = defineEmits<{ onUpdateUser: [IUserData] }>()

const payload = reactive<IUserData>({ ...props.user })

const { error, status, refresh } = useAuthFetch<IUserData, IUserData>('user', {
  method: 'POST',
  body: payload,
  immediate: false,
  watch: false
})

// const { error, status, refresh } = useMockFetch(
//   'userSendData',
//   { success: true },
//   {
//     immediate: false
//   }
// )

const v$ = useVuelidate()

//  хендлеры
const handleSubmitUserData = async () => {
  const result = await v$.value.$validate()
  if (!result) return

  await refresh()

  if (status.value === EFetchStatus.SUCCESS) {
    emit('onUpdateUser', payload)
    useNuxtApp().$toast('Данные успешно обновлены', {
      theme: 'dark'
    })
  }
}
</script>

<template>
  <form
    class="user-form"
    action="/"
    @submit.prevent="handleSubmitUserData"
  >
    <div class="user-form__item">
      <label
        class="user-form__label"
        for="user_phone_input"
        >Телефон</label
      >
      <BasePhoneInput
        id="user_phone_input"
        v-model="payload.phone"
        :required-val="true"
      />
    </div>
    <div class="user-form__item">
      <label
        class="user-form__label"
        for="user_name_input"
        >Имя</label
      >
      <BaseInput
        id="user_name_input"
        v-model.trim="payload.name"
        type="text"
        :required-val="true"
      />
    </div>
    <div class="user-form__item">
      <label
        class="user-form__label"
        for="user_surname_input"
        >Фамилия</label
      >
      <BaseInput
        id="user_surname_input"
        v-model.trim="payload.surname"
        type="text"
        :required-val="true"
      />
    </div>
    <div class="user-form__item">
      <label
        class="user-form__label"
        for="user_email_input"
        >E-mail</label
      >
      <BaseInput
        id="user_email_input"
        v-model="payload.email"
        type="text"
        :is-email="true"
        :required-val="true"
      />
    </div>
    <div class="user-form__item">
      <label
        class="user-form__label"
        for="user_birthdate_input"
        >Дата рождения</label
      >
      <BaseDateInput
        id="user_birthdate_input"
        v-model="payload.birthDate"
        type="date"
        :required-val="true"
        :max-age="100"
        :min-age="18"
      />
    </div>
    <div class="user-form__item">
      <div class="user-form__label">Размер</div>

      <div class="user-form__sizes">
        <BaseSizeInput
          v-for="(size, idx) in ESize"
          :id="'size_input_' + size + idx"
          :key="'size-input-' + size"
          v-model="payload.size"
          :value="size"
          :label="transformSizeString(size)"
          type="radio"
        />
      </div>
    </div>

    <BaseCheckbox
      id="user_email_marketing_checkbox_id"
      v-model="payload.emailMarketing"
      class="user-form__checkbox"
    >
      <template #label>
        Я согласен получать информацию от компании «название вашей компании» через электронную почту
        и SMS.
      </template>
    </BaseCheckbox>

    <div class="user-form__controls">
      <button class="btn user-form__btn">
        <BaseSpinner v-if="status === EFetchStatus.PENDING" />
        <template v-else> {{ error ? 'повторить' : 'сохранить' }} </template>
      </button>
      <BaseErrorMessage
        v-if="error"
        :message="error?.message"
      />
    </div>
  </form>
</template>

<style scoped lang="scss">
@import 'profile-user-form';
</style>

<script setup lang="ts">
import { ESize } from '~/types'

definePageMeta({
  layout: 'authenticated',
  currentBreadcrumb: 'Личные данные'
})

// const { data: userData } = useAuthFetch('user')
const { userMock: userData } = useUserMock()

const userFormIsShown = ref<boolean>(false)
</script>

<template>
  <div class="user">
    <div class="user__props">
      <p class="user__prop">Имя: {{ userData.name }}</p>
      <p class="user__prop">Фамилия: {{ userData.surname }}</p>
      <p class="user__prop">Телефон: {{ userData.phone }}</p>
      <p class="user__prop">E-mail: {{ userData.email }}</p>
      <p class="user__prop">Дата рождения: {{ userData.birthDate }}</p>
    </div>
    <div class="user__size user-size">
      <p class="user-size__label">Размер одежды:</p>
      <ul class="user-size__list">
        <li
          v-for="size in ESize"
          :key="'size-key-' + size"
          class="user-size__value"
          :class="{ 'user-size__value_active': size === userData.size }"
        >
          {{ size }}
        </li>
      </ul>
    </div>
    <BaseCheckbox
      id="user_email_marketing_checkbox_id"
      v-model="userData.emailMarketing"
      class="user__email-marketing"
    >
      <template #label>
        Я согласен получать информацию от компании «название вашей компании» через электронную почту
        и SMS.
      </template>
    </BaseCheckbox>
    <button
      class="btn btn_light"
      @click="userFormIsShown = true"
    >
      редактировать
    </button>
  </div>

  <Teleport to="body">
    <BaseModal
      v-model="userFormIsShown"
      dialog-class="update-user-modal"
    >
      <ProfileUserForm :user="userData" />
    </BaseModal>
  </Teleport>
</template>

<style scoped lang="scss">
@import 'profile-user';
</style>

<script setup lang="ts">
import { EFetchStatus, ESize, type IUserData } from '~/types'

definePageMeta({
  layout: 'authenticated',
  currentBreadcrumb: 'Личные данные'
})

const { data, error, refresh: handleGetUser, status } = useAuthFetch<IUserData, IUserData>('user')
// const { data, error, refresh: handleGetUser, status } = useUserMock()
const userFormIsShown = ref<boolean>(false)

const handleUpdateUserData = (user: IUserData) => {
  data.value = user
  userFormIsShown.value = false
}
</script>

<template>
  <div class="user">
    <BaseLoading
      v-if="status === EFetchStatus.PENDING"
      color="#232323"
    />
    <template v-if="data && status === EFetchStatus.SUCCESS">
      <div class="user__props">
        <p class="user__prop">Имя: {{ data.name }}</p>
        <p class="user__prop">Фамилия: {{ data.surname }}</p>
        <p class="user__prop">Телефон: {{ '+7' + data.phone.slice(-10) }}</p>
        <p class="user__prop">E-mail: {{ data.email }}</p>
        <p class="user__prop">Дата рождения: {{ data.birthDate }}</p>
      </div>
      <div class="user__size user-size">
        <p class="user-size__label">Размер одежды:</p>
        <ul class="user-size__list">
          <li
            v-for="size in ESize"
            :key="'size-key-' + size"
            class="user-size__value"
            :class="{ 'user-size__value_active': size === data.size }"
          >
            {{ size }}
          </li>
        </ul>
      </div>
      <BaseCheckbox
        id="user_email_marketing_info"
        v-model="data.emailMarketing"
        class="user__email-marketing"
      >
        <template #label>
          Я согласен получать информацию от компании «название вашей компании» через электронную
          почту и SMS.
        </template>
      </BaseCheckbox>
      <button
        class="btn btn_light"
        @click="userFormIsShown = true"
      >
        редактировать
      </button>

      <Teleport to="body">
        <BaseModal
          v-model="userFormIsShown"
          dialog-class="update-user-modal"
        >
          <ProfileUserForm
            v-if="data"
            :user="data"
            @on-update-user="handleUpdateUserData"
          />
        </BaseModal>
      </Teleport>
    </template>
  </div>

  <CommonErrorView
    :error="error"
    :title="error?.message"
    :loading="status === EFetchStatus.PENDING"
    @on-refresh="handleGetUser"
  />
</template>

<style scoped lang="scss">
@import 'profile-user';
</style>

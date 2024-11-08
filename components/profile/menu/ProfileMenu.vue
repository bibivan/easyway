<script setup lang="ts">
const emit = defineEmits<{
  onClose: [void]
}>()

const { logOut } = useAuthorizationStore()

const handleLogOut = () => {
  logOut()
  emit('onClose')
}
</script>

<template>
  <ul class="profile-menu">
    <!--    <li class="profile-menu__item">-->
    <!--      <NuxtLink-->
    <!--        class="profile-menu__link"-->
    <!--        :to="{ name: 'profile-orders' }"-->
    <!--        @click="$emit('onClose')"-->
    <!--        >Заказы</NuxtLink-->
    <!--      >-->
    <!--    </li>-->
    <li class="profile-menu__item">
      <NuxtLink
        class="profile-menu__link"
        :to="{ name: 'profile-favorites' }"
        @click="$emit('onClose')"
        >Избранное</NuxtLink
      >
    </li>
    <!--    <li class="profile-menu__item">-->
    <!--      <NuxtLink-->
    <!--        class="profile-menu__link"-->
    <!--        :to="{ name: 'profile-loyalty' }"-->
    <!--        @click="$emit('onClose')"-->
    <!--        >Карта лояльности</NuxtLink-->
    <!--      >-->
    <!--    </li>-->
    <!--    <li class="profile-menu__item">-->
    <!--      <NuxtLink-->
    <!--        class="profile-menu__link"-->
    <!--        :to="{ name: 'profile-user' }"-->
    <!--        @click="$emit('onClose')"-->
    <!--        >Личные данные</NuxtLink-->
    <!--      >-->
    <!--    </li>-->
    <!--    <li class="profile-menu__item">-->
    <!--      <button-->
    <!--        class="profile-menu__link"-->
    <!--        @click="handleLogOut"-->
    <!--      >-->
    <!--        Выход-->
    <!--      </button>-->
    <!--    </li>-->
  </ul>
</template>

<style scoped lang="scss">
@import 'profile-menu';
</style>

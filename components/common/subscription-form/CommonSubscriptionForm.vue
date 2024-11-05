<script setup lang="ts">
const email = ref()
const handleSubscribe = () => {
  useApiFetch('subscribe', {
    method: 'POST',
    body: {
      email
    }
  })
}
</script>

<template>
  <div class="subscription">
    <h2 class="subscription__heading">Хотите узнавать о новинках и акциях?</h2>
    <p class="subscription__description">
      Подпишитесь на нашу рассылку, чтобы быть в курсе последних коллекций и специальных предложений
    </p>
    <div class="subscription__form">
      <BaseInput
        id="subscription_email"
        v-model="email"
        placeholder="Email"
        :is-email="true"
        type="text"
        class="subscription__input"
      />
      <button
        class="subscription__btn btn"
        @click="handleSubscribe"
      >
        хочу
      </button>
    </div>
    <p class="subscription__consent">
      Нажимая на кнопку, я даю согласие на обработку персональных данных
    </p>

    <div class="subscription__socials">
      <NuxtLink
        class="subscription__link"
        target="_blank"
        external
        to="https://vk.com/eazywayofficial"
      >
        <SvgVkLight />
      </NuxtLink>
      <NuxtLink
        class="subscription__link"
        target="_blank"
        external
        to="https://t.me/eazywayofficial"
      >
        <SvgTgLight />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'common-subscription-form';
</style>

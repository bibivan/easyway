<script setup lang="ts">
const { order } = useOrderStore()
</script>

<template>
  <fieldset class="form__fieldset checkout-delivery">
    <legend class="form__legend">Получатель</legend>

    <div class="form__inputs">
      <BaseInput
        id="checkout_surname_input"
        v-model="order.surname"
        :required-val="true"
        placeholder="Фамилия"
        type="text"
      />
      <BaseInput
        id="checkout_name_input"
        v-model="order.name"
        :required-val="true"
        placeholder="Имя"
        type="text"
      />
      <BaseInput
        id="checkout_middle_name_input"
        v-model="order.middleName"
        :required-val="true"
        placeholder="Отчество"
        type="text"
      />
      <BaseInput
        id="checkout_email_input"
        v-model="order.email"
        :required-val="true"
        placeholder="Email"
        :is-email="true"
        type="text"
      />
      <BasePhoneInput
        id="checkout_phone_input"
        v-model="order.phone"
        :required-val="true"
      />
      <BaseTextarea
        id="checkout_comment_textarea"
        v-model="order.comment"
      />
    </div>
  </fieldset>
</template>

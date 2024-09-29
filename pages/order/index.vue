<script setup lang="ts"></script>

<template>
  <section class="section">
    <div class="container">
      <div class="order">
        <h1 class="order__title">Оформить заказ</h1>
        <div class="order__content">
          <CheckoutForm class="order__form" />
          <CheckoutCart class="order__cart" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'order';
</style>

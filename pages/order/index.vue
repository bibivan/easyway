<script setup lang="ts">
const breadcrumbsData = [{ to: '/', label: 'Главная' }, { label: 'Оформление заказа' }]
</script>

<template>
  <section class="section section_pb_0">
    <div class="container">
      <SiteBreadcrumbs
        class="catalog-head__breadcrumbs"
        :data="breadcrumbsData"
      />
    </div>
  </section>
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

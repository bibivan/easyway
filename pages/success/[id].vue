<script setup lang="ts">
const { isMobile } = useDeviceTypeStore()
const { params } = useRoute()
const breadcrumbsData = [{ to: '/', label: 'Главная' }, { label: 'Спасибо за покупку' }]
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
  <section class="section success">
    <div class="container">
      <div class="success__content">
        <CommonMessageFrame
          title="Спасибо за&nbsp;покупку!"
          :description="`Заказ №&nbsp;${params.id}&nbsp;оформлен. Ожидайте подтверждения заказа. Мы&nbsp;свяжемся с&nbsp;вами в&nbsp;ближайшее время.`"
          btn-content="На главную"
          to="/"
        />
        <div
          v-if="!isMobile"
          class="success__socials"
        >
          <p class="success__subscribe">Подпишись и следи за новостями</p>

          <SiteSocials
            tg-route="https://t.me/eazywayofficial"
            vk-route="https://vk.com/eazywayofficial"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import 'success';
</style>

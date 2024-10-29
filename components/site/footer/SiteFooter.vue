<script setup lang="ts">
import { EBrand, EGender, EProductFilters } from '~/types'

const { isMobile } = storeToRefs(useDeviceTypeStore())
</script>

<template>
  <footer class="footer section">
    <div class="container">
      <div class="footer__content">
        <div class="footer__about">
          <div class="footer__socials">
            <SiteSocials
              class="footer__social footer__social_easyway"
              logo-route="/"
              tg-route="https://t.me/eazywayofficial"
              vk-route="https://vk.com/eazywayofficial"
            >
              <SvgLogo />
            </SiteSocials>
            <SiteSocials
              class="footer__social footer__social_easyfit"
              :logo-route="{ name: 'catalog', query: { [EProductFilters.BRAND]: EBrand.EASYFIT } }"
              tg-route="https://t.me/easyfit4u"
              vk-route="https://vk.com/easyfit4u"
            >
              <SvgEasyfit />
            </SiteSocials>
          </div>

          <template v-if="!isMobile">
            <SiteLegalInfo class="footer__legal-info" />
            <SitePaymentsInfo class="footer__payments" />
          </template>
        </div>
        <div class="footer__menus">
          <div class="footer__menu footer-menu">
            <p class="footer-menu__headline">О бренде</p>
            <div class="footer-menu__items">
              <NuxtLink
                class="footer-menu__item"
                :to="{
                  name: 'about-easyway'
                }"
                >EASYWAY</NuxtLink
              >
              <NuxtLink
                class="footer-menu__item"
                :to="{
                  name: 'about-easyfit'
                }"
                >Бренд-линейка easyfit</NuxtLink
              >
            </div>
          </div>
          <div class="footer__menu footer-menu">
            <p class="footer-menu__headline">Каталог</p>
            <div class="footer-menu__items">
              <NuxtLink
                class="footer-menu__item"
                :to="{
                  name: 'catalog',
                  query: {
                    [EProductFilters.GENDER]: EGender.MALE
                  }
                }"
              >
                Мужское
              </NuxtLink>
              <NuxtLink
                class="footer-menu__item"
                :to="{
                  name: 'catalog',
                  query: {
                    [EProductFilters.GENDER]: EGender.FEMALE
                  }
                }"
              >
                Женское
              </NuxtLink>
            </div>
          </div>
          <div class="footer__menu footer-menu">
            <p class="footer-menu__headline">Покупателям</p>
            <div class="footer-menu__items">
              <NuxtLink
                class="footer-menu__item"
                :to="{ path: '/customer-information', hash: '#delivery' }"
                >Доставка</NuxtLink
              >
              <NuxtLink
                class="footer-menu__item"
                :to="{ path: '/customer-information', hash: '#payment' }"
                >Оплата</NuxtLink
              >
              <NuxtLink
                class="footer-menu__item"
                :to="{ path: '/customer-information', hash: '#return_product' }"
                >Возврат</NuxtLink
              >
              <NuxtLink
                class="footer-menu__item"
                :to="{ path: '/customer-information', hash: '#guarantee' }"
                >Гарантия</NuxtLink
              >
              <NuxtLink
                class="footer-menu__item"
                to="/pdf/privacy-policy-1.pdf"
                download="privacy-policy-1.pdf"
                external
                >Политика<br />конфиденциальности</NuxtLink
              >
              <NuxtLink
                class="footer-menu__item"
                to="/pdf/offer-1.pdf"
                download="offer-1.pdf"
                external
                >Оферта</NuxtLink
              >
            </div>
          </div>
          <div
            id="contacts"
            class="footer__menu footer-menu"
          >
            <p class="footer-menu__headline">Контакты</p>
            <div class="footer-menu__items">
              <NuxtLink
                class="footer-menu__item"
                to="mailto:info@ci.ru.com"
                >info@ci.ru.com</NuxtLink
              >
            </div>
          </div>
        </div>

        <template v-if="isMobile">
          <SitePaymentsInfo class="footer__payments" />
          <SiteLegalInfo class="footer__legal-info" />
        </template>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import 'site-footer';
</style>

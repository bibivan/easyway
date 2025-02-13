<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'body'
  },
  script: [
    {
      src: "https://launcher.giftery.cards/js/index.js",
      async: true
    }
  ]
})

const { globalScrollIsHidden } = storeToRefs(useGlobalScrollbarStore())
const { isDesktop } = storeToRefs(useDeviceTypeStore())
const { authFormIsShown } = storeToRefs(useAuthorizationStore())
</script>

<template>
  <PerfectScrollbar
    v-if="isDesktop"
    class="global-ps"
    :options="{
      suppressScrollY: globalScrollIsHidden,
      swipeEasing: true,
      wheelPropagation: false
    }"
  >
    <SiteHeader />
    <main class="main">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
    <SiteFooter />
  </PerfectScrollbar>
  <template v-else>
    <SiteHeader />
    <main class="main">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
    <SiteFooter />
  </template>
  <CartModal />
  <ProfileAuthModal v-if="authFormIsShown" />
</template>

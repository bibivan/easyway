<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'body'
  }
})

const { globalScrollIsHidden } = storeToRefs(useGlobalScrollbarStore())
const { isDesktop } = storeToRefs(useDeviceTypeStore())
const { authFormIsShown } = storeToRefs(useAuthorizationStore())
</script>

<template>
  <NuxtLayout>
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
        <NuxtPage />
      </main>
      <SiteFooter />
    </PerfectScrollbar>
    <template v-else>
      <SiteHeader />
      <main class="main">
        <NuxtPage />
      </main>
      <SiteFooter />
    </template>
    <CartModal />
    <ProfileAuth v-if="false" />
  </NuxtLayout>
</template>

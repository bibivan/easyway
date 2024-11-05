<script lang="ts" setup>
const { globalScrollIsHidden } = storeToRefs(useGlobalScrollbarStore())
const { isDesktop } = storeToRefs(useDeviceTypeStore())
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
    <!--    <SiteHeader />-->
    <main class="main">
      <slot />
    </main>
    <SiteFooter />
    <CartModal />
  </PerfectScrollbar>
  <template v-else>
    <!--    <SiteHeader />-->
    <main class="main">
      <slot />
    </main>
    <SiteFooter />
    <CartModal />
  </template>
</template>

<script setup lang="ts">
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
    <main class="main">
      <slot />
    </main>
    <SiteFooter />
    <CartModal />
  </PerfectScrollbar>
  <template v-else>
    <main class="main">
      <slot />
    </main>
    <SiteFooter />
    <CartModal />
  </template>
</template>

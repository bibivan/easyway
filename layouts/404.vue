<script lang="ts" setup>
const { globalScrollIsHidden } = storeToRefs(useGlobalScrollbarStore())
</script>

<template>
  <PerfectScrollbar :suppress-scroll-y="globalScrollIsHidden">
    <SiteHeader />
    <main class="main">
      <slot />
      <CartModal />
    </main>
    <SiteFooter />
  </PerfectScrollbar>
</template>
<script setup lang="ts"></script>

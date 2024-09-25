<script lang="ts" setup>
const { globalScrollbarState } = useGlobalScrollbarStore()
</script>

<template>
  <PerfectScrollbar :suppress-scroll-y="globalScrollbarState.hidden">
    <SiteHeader />
    <main class="main">
      <slot />
      <CartModal />
    </main>
  </PerfectScrollbar>
</template>
<script setup lang="ts"></script>

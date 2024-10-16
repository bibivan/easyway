<script lang="ts" setup>
const { globalScrollIsHidden } = storeToRefs(useGlobalScrollbarStore())
</script>

<template>
  <PerfectScrollbar
    class="global-ps"
    :options="{ suppressScrollY: globalScrollIsHidden }"
  >
    <SiteHeader />
    <main class="main">
      <slot />
    </main>
    <SiteFooter />
    <CartModal />
  </PerfectScrollbar>
</template>

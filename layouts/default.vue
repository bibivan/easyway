<script lang="ts" setup>
const { globalScrollbarState } = useGlobalScrollbarStore()
</script>

<template>
  <PerfectScrollbar
    class="global-ps"
    :options="{ suppressScrollY: globalScrollbarState.hidden }"
  >
    <SiteHeader />
    <main class="main">
      <slot />
    </main>
    <CartModal />
  </PerfectScrollbar>
</template>

<script setup lang="ts"></script>

<template>
  <NuxtLayout name="404">
    <GlobalMessageFrame
      title="Упс! страница не&nbsp;найдена("
      description="Похоже, запрашиваемая вами страница не&nbsp;найдена. Но&nbsp;на&nbsp;нашем сайте много
              другой интересной информации"
      btn-content="На главную"
      to="/"
    >
      <Svg404 class="status" />
    </GlobalMessageFrame>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.status {
  color: $color-bg-section-darker;
}
</style>

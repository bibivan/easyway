<script setup lang="ts"></script>

<template>
  <NuxtLayout name="404">
    <CommonMessageFrame
      title="Упс! страница не&nbsp;найдена("
      description="Похоже, запрашиваемая вами страница не&nbsp;найдена. Но&nbsp;на&nbsp;нашем сайте много другой интересной информации"
      btn-content="На главную"
      to="/"
    >
      <SvgNotFoundStatus class="status" />
    </CommonMessageFrame>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.status {
  color: $color-bg-section-darker;
}
</style>

<script setup lang="ts">
const { isMobile } = storeToRefs(useDeviceTypeStore())

const currentBreadcrumb = computed<string>(() => {
  const name = useRoute().meta.currentBreadcrumb
  return isString(name) ? name : ''
})

const breadcrumbsData = computed(() => [
  { to: '/', label: 'Главная' },
  { label: 'Профиль' },
  { label: currentBreadcrumb.value }
])

const profileMenuIsShown = ref<boolean>(false)
</script>

<template>
  <section class="section section_pb_0">
    <div class="container">
      <SiteBreadcrumbs :data="breadcrumbsData" />
    </div>
  </section>

  <section class="section authenticated">
    <div class="container">
      <div class="authenticated__content">
        <aside
          v-if="!isMobile"
          class="authenticated__menu-wrapper"
        >
          <h2 class="authenticated__heading">Профиль</h2>
          <ProfileMenu />
        </aside>
        <div
          v-else
          class="authenticated__menu-wrapper"
        >
          <h2 class="authenticated__heading">Профиль</h2>
          <button
            class="authenticated__open-menu"
            @click="profileMenuIsShown = true"
          >
            {{ currentBreadcrumb }} <SvgChevronDown />
          </button>
          <CommonSettingsModal
            v-model="profileMenuIsShown"
            settings-name="Профиль"
            class="authenticated__modal"
          >
            <ProfileMenu @on-close="profileMenuIsShown = false" />
          </CommonSettingsModal>
        </div>

        <slot />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import 'authenticated';
</style>

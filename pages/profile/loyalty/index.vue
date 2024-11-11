<script setup lang="ts">
import { EFetchStatus } from '~/types'

definePageMeta({
  layout: 'authenticated',
  currentBreadcrumb: 'Карта лояльности'
})

// const { data, error, refresh: handleGetLoyalty, status } = useAuthFetch('loyalty')
const { isMobile } = storeToRefs(useDeviceTypeStore())
const { data, error, refresh: handleGetLoyalty, status } = useLoyaltyMock()
const rulesAreShown = ref<boolean>(false)
</script>

<template>
  <BaseLoading
    v-if="status === EFetchStatus.PENDING"
    color="#232323"
  />
  <div
    v-if="data && status === EFetchStatus.SUCCESS"
    class="loyalty"
  >
    <ProfileLoyaltyText
      class="loyalty__text"
      :points-count="data.pointsCount"
    >
      <button
        v-if="!isMobile"
        class="loyalty__btn loyalty__btn_mt"
        @click="rulesAreShown = true"
      >
        Правила бонусной программы <SvgChevronRight />
      </button>
    </ProfileLoyaltyText>
    <ProfileLoyaltyCard
      class="loyalty__card"
      :points-count="data.pointsCount"
    />

    <button
      v-show="isMobile"
      class="loyalty__btn"
      @click="rulesAreShown = true"
    >
      Правила бонусной программы <SvgChevronRight />
    </button>
  </div>

  <BaseModal
    v-if="data && status === EFetchStatus.SUCCESS"
    v-model="rulesAreShown"
    dialog-class="loyalty__rules"
  >
    <ProfileLoyaltyRules />
  </BaseModal>
  <CommonErrorView
    :error="error"
    :title="error?.message"
    :loading="status === EFetchStatus.PENDING"
    @on-refresh="handleGetLoyalty"
  />
</template>

<style scoped lang="scss">
@import 'profile-loyalty';
</style>

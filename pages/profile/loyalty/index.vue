<script setup lang="ts">
definePageMeta({
  layout: 'authenticated',
  currentBreadcrumb: 'Карта лояльности'
})

// const { data: loyaltyData } = useAuthFetch('loyalty')
const { isMobile } = storeToRefs(useDeviceTypeStore())
const { loyaltyMock: loyaltyData } = useLoyaltyMock()
const rulesAreShown = ref<boolean>(false)
</script>

<template>
  <div class="loyalty">
    <ProfileLoyaltyText
      class="loyalty__text"
      :points-count="loyaltyData.pointsCount"
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
      :points-count="loyaltyData.pointsCount"
    />

    <button
      v-show="isMobile"
      class="loyalty__btn"
      @click="rulesAreShown = true"
    >
      Правила бонусной программы <SvgChevronRight />
    </button>

    <BaseModal
      v-model="rulesAreShown"
      dialog-class="loyalty__rules"
    >
      <ProfileLoyaltyRules />
    </BaseModal>
  </div>
</template>

<style scoped lang="scss">
@import 'profile-loyalty';
</style>

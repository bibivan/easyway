import { AboutMission } from '#components'
import { AboutBrand } from '#components'
import { AboutHistory } from '#components'
import { AboutStyle } from '#components'
import { AboutQuality } from '#components'
import { AboutCommunity } from '#components'

import type { Component } from 'vue'

export const useAboutTabsMock = (): { label: string; component: Component }[] => {
  return [
    { label: 'Наша миссия', component: AboutMission },
    { label: 'О бренде', component: AboutBrand },
    { label: 'История создания', component: AboutHistory },
    { label: 'Стиль', component: AboutStyle },
    { label: 'Качество и функциональность', component: AboutQuality },
    { label: 'Комьюнити', component: AboutCommunity }
  ]
}

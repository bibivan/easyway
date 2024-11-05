<script setup lang="ts">
import type { TNullable } from '~/types'

const props = defineProps<{
  min: number
  max: number
  minValue: number
  maxValue: number
  normalizeFact: number
  step: number
}>()

const emit = defineEmits<{
  'update:minValue': [number]
  'update:maxValue': [number]
}>()

const slider = ref<TNullable<HTMLElement>>(null)
const touchLeft = ref<TNullable<HTMLElement>>(null)
const touchRight = ref<TNullable<HTMLElement>>(null)
const lineSpan = ref<TNullable<HTMLElement>>(null)
const defaultMinValue = ref<number>(props.minValue)
const defaultMaxValue = ref<number>(props.maxValue)
const propsStep = ref<number>(Math.abs(props.step))
const startX = ref<number>(0)
const x = ref<number>(0)
const maxX = ref<TNullable<number>>(null)
const initialValue = ref<TNullable<number>>(null)

const selectedTouch = ref<TNullable<EventTarget | HTMLElement>>(null)

const onChange = (minValue: number, maxValue: number) => {
  emit('update:minValue', minValue)
  emit('update:maxValue', maxValue)
}

const reset = () => {
  if (touchLeft.value && touchRight.value && slider.value && lineSpan.value) {
    touchLeft.value.style.left = '0px'
    touchRight.value.style.left = slider.value.offsetWidth - touchLeft.value.offsetWidth + 'px'
    lineSpan.value.style.marginLeft = '0px'
    lineSpan.value.style.width = slider.value.offsetWidth - touchLeft.value.offsetWidth + 'px'
    startX.value = 0
    x.value = 0
  }
}

const setMinValue = (minValue: number) => {
  if (touchLeft.value && touchRight.value && slider.value && lineSpan.value) {
    const ratio = (minValue - props.min) / (props.max - props.min)
    touchLeft.value.style.left =
      Math.ceil(
        ratio * (slider.value.offsetWidth - (touchLeft.value.offsetWidth + props.normalizeFact))
      ) + 'px'
    lineSpan.value.style.marginLeft = touchLeft.value.offsetLeft + 'px'
    lineSpan.value.style.width = touchRight.value.offsetLeft - touchLeft.value.offsetLeft + 'px'
    emit('update:minValue', minValue)
  }
}

const setMaxValue = (maxValue: number) => {
  if (touchLeft.value && touchRight.value && slider.value && lineSpan.value) {
    const ratio = (maxValue - props.min) / (props.max - props.min)
    touchRight.value.style.left =
      Math.ceil(
        ratio * (slider.value.offsetWidth - (touchLeft.value.offsetWidth + props.normalizeFact)) +
          props.normalizeFact
      ) + 'px'
    lineSpan.value.style.marginLeft = touchLeft.value.offsetLeft + 'px'
    lineSpan.value.style.width = touchRight.value.offsetLeft - touchLeft.value.offsetLeft + 'px'
    emit('update:maxValue', maxValue)
  }
}

// setup touch/click events
const onStart = (event: TouchEvent | MouseEvent) => {
  // Prevent default dragging of selected content
  event.preventDefault()
  let eventTouch: MouseEvent | Touch = event as MouseEvent

  if ('touches' in event) {
    eventTouch = event.touches[0] as Touch
  }
  if (event.currentTarget === touchLeft.value && touchLeft.value) {
    x.value = touchLeft.value.offsetLeft
  }
  if (event.currentTarget === touchRight.value && touchRight.value) {
    x.value = touchRight.value.offsetLeft
  }

  startX.value = eventTouch.pageX - x.value
  selectedTouch.value = event.currentTarget as HTMLElement
  document.addEventListener('mousemove', onMove)
  document.addEventListener('mouseup', onStop)
  document.addEventListener('touchmove', onMove)
  document.addEventListener('touchend', onStop)
}

const onMove = (event: TouchEvent | MouseEvent) => {
  let eventTouch: MouseEvent | Touch = event as MouseEvent

  if ('touches' in event) {
    eventTouch = event.touches[0]
  }

  x.value = eventTouch.pageX - startX.value

  if (
    selectedTouch.value === touchLeft.value &&
    touchRight.value &&
    selectedTouch.value &&
    'offsetWidth' in selectedTouch.value
  ) {
    if (x.value > touchRight.value.offsetLeft - selectedTouch.value.offsetWidth + 10) {
      x.value = touchRight.value.offsetLeft - selectedTouch.value.offsetWidth + 10
    } else if (x.value < 0) {
      x.value = 0
    }

    selectedTouch.value.style.left = x.value + 'px'
  } else if (selectedTouch.value === touchRight.value && touchLeft.value) {
    if (x.value < touchLeft.value.offsetLeft + touchLeft.value.offsetWidth - 10) {
      x.value = touchLeft.value.offsetLeft + touchLeft.value.offsetWidth - 10
    } else if (maxX.value) {
      x.value = x.value > maxX.value ? maxX.value : x.value
    }
    if (selectedTouch.value && 'style' in selectedTouch.value) {
      selectedTouch.value.style.left = x.value + 'px'
    }
  }

  // update line span
  if (lineSpan.value && touchLeft.value && touchRight.value) {
    lineSpan.value.style.marginLeft = touchLeft.value.offsetLeft + 'px'
    lineSpan.value.style.width = touchRight.value.offsetLeft - touchLeft.value.offsetLeft + 'px'
  }

  // write new value
  calculateValue()

  // onChange(props.minValue, props.maxValue)
}

const onStop = () => {
  document.removeEventListener('mousemove', onMove)
  document.removeEventListener('mouseup', onStop)
  document.removeEventListener('touchmove', onMove)
  document.removeEventListener('touchend', onStop)

  selectedTouch.value = null
  calculateValue()
}

const calculateValue = () => {
  if (lineSpan.value && initialValue.value) {
    const newValue = (lineSpan.value.offsetWidth - props.normalizeFact) / initialValue.value
    let minValue = lineSpan.value.offsetLeft / initialValue.value
    let maxValue = minValue + newValue

    minValue = minValue * (props.max - props.min) + props.min
    maxValue = maxValue * (props.max - props.min) + props.min

    if (propsStep.value !== 0) {
      let multi = Math.floor(minValue / propsStep.value)
      minValue = propsStep.value * multi

      multi = Math.floor(maxValue / propsStep.value)
      maxValue = propsStep.value * multi
    }

    onChange(minValue, maxValue)
  }
}

const initSlider = () => {
  reset()
  if (touchLeft.value && touchRight.value && slider.value && lineSpan.value) {
    // check values are correct
    if (defaultMinValue.value < props.min) {
      defaultMinValue.value = props.min
    }

    if (defaultMaxValue.value > props.max) {
      defaultMaxValue.value = props.max
    }

    if (defaultMinValue.value > defaultMaxValue.value) {
      defaultMinValue.value = defaultMaxValue.value
    }

    // useful values, min, max, normalize fact is the width of both touch buttons
    maxX.value = slider.value.offsetWidth - touchRight.value.offsetWidth
    initialValue.value = lineSpan.value.offsetWidth - props.normalizeFact

    // set default values
    setMinValue(defaultMinValue.value)
    setMaxValue(defaultMaxValue.value)
  }
}

onMounted(() => initSlider())

watch([() => props.min, () => props.max, () => props.step], () => initSlider())

watch(
  () => props.minValue,
  (val) => setMinValue(val)
)
watch(
  () => props.maxValue,
  (val) => setMaxValue(val)
)
</script>

<template>
  <div
    ref="slider"
    class="range-slider"
  >
    <div
      ref="touchLeft"
      class="range-slider__touch-left"
      @mousedown="onStart"
      @touchstart="onStart"
    >
      <span></span>
    </div>
    <div
      ref="touchRight"
      class="range-slider__touch-right"
      @mousedown="onStart"
      @touchstart="onStart"
    >
      <span></span>
    </div>
    <div class="range-slider__line">
      <span ref="lineSpan"></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'common-range-slider';
</style>

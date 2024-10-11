import type { TNullable } from '~/types'

export const useDeviceTypeStore = () => {
  const windowWidth = useState<TNullable<number>>('device_type_store', () => null)

  const handleResize = debounce(() => {
    windowWidth.value = window.innerWidth
  }, 200)

  onMounted(() => {
    if (typeof window !== 'undefined') {
      windowWidth.value = window.innerWidth
      window.addEventListener('resize', handleResize)
    }
  })

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', handleResize)
    }
  })

  const isMobile = computed(() => windowWidth.value !== null && windowWidth.value < 768)
  const isTablet = computed(
    () => windowWidth.value !== null && windowWidth.value > 767 && windowWidth.value < 1025
  )
  const isDesktop = computed(() => windowWidth.value !== null && windowWidth.value > 1024)

  return {
    isMobile,
    isTablet,
    isDesktop
  }
}

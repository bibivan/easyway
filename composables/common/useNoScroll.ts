export const useNoScroll = () => {
  const { isDesktop } = storeToRefs(useDeviceTypeStore())
  const { globalScrollIsHidden } = storeToRefs(useGlobalScrollbarStore())

  const setNoScroll = (value: boolean) => {
    if (isDesktop.value) {
      return value ? (globalScrollIsHidden.value = true) : (globalScrollIsHidden.value = false)
    } else {
      return value
        ? document.body.classList.add('body_no-scroll')
        : document.body.classList.remove('body_no-scroll')
    }
  }

  return {
    setNoScroll
  }
}

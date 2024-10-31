export const useCartOpening = () => {
  const { cartState } = useCartStore()
  const { globalScrollIsHidden } = storeToRefs(useGlobalScrollbarStore())
  const { isDesktop } = storeToRefs(useDeviceTypeStore())
  const handleShowCart = () => {
    cartState.isShown = true
    if (isDesktop.value) globalScrollIsHidden.value = true
    if (!isDesktop.value) {
      document.body.classList.add('body_no-scroll')
    }
  }

  return {
    handleShowCart
  }
}

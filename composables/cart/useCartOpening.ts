export const useCartOpening = () => {
  const { cartState } = useCartStore()
  const { globalScrollIsHidden } = storeToRefs(useGlobalScrollbarStore())
  const { isDesktop } = storeToRefs(useDeviceTypeStore())
  const handleShowCart = () => {
    console.log('in func', isDesktop.value)
    cartState.isShown = true
    if (isDesktop.value) globalScrollIsHidden.value = true
    if (!isDesktop.value) {
      console.log('here')
      document.body.classList.add('body_no-scroll')
    }
  }

  return {
    handleShowCart
  }
}

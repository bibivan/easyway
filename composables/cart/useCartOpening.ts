export const useCartOpening = () => {
  const { cartIsShown } = useCartStore()
  const { globalScrollIsHidden } = useGlobalScrollbarStore()

  const handleShowCart = () => {
    cartIsShown.value = true
    globalScrollIsHidden.value = true
  }

  return {
    handleShowCart
  }
}

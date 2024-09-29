export const useCartOpening = () => {
  const { cartState } = useCartStore()
  const { globalScrollbarState } = useGlobalScrollbarStore()

  const handleShowCart = () => {
    cartState.isShown = true
    globalScrollbarState.hidden = true
  }

  return {
    handleShowCart
  }
}

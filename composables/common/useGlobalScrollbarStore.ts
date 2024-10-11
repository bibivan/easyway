export const useGlobalScrollbarStore = () => {
  // Data
  const globalScrollIsHidden = useState<boolean>('global_scrollbar_store', () => false)

  return { globalScrollIsHidden }
}

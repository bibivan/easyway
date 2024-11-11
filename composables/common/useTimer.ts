import { ref } from 'vue'

export const useTimer = (initialTime: number = 60) => {
  const ticker = ref(initialTime)

  let intervalId: ReturnType<typeof setInterval>

  const initTimer = () => {
    stopTimer()
    ticker.value = initialTime
    intervalId = setInterval(() => {
      ticker.value = ticker.value - 1
      if (ticker.value === 0) clearInterval(intervalId)
    }, 1000)
  }

  const stopTimer = () => clearInterval(intervalId)

  return { ticker, initTimer, stopTimer }
}

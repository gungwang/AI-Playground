export function createGenerationIdleWatchdog(timeoutMs: number, onTimeout: () => void) {
  let timer: ReturnType<typeof setTimeout> | null = null

  const stop = () => {
    if (timer !== null) {
      clearTimeout(timer)
      timer = null
    }
  }

  const recordActivity = () => {
    stop()
    timer = setTimeout(() => {
      timer = null
      onTimeout()
    }, timeoutMs)
  }

  return { recordActivity, stop }
}

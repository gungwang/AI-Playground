import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createGenerationIdleWatchdog } from './generationWatchdog'

describe('createGenerationIdleWatchdog', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('resets its timeout when generation activity is reported', () => {
    const onTimeout = vi.fn()
    const watchdog = createGenerationIdleWatchdog(1_000, onTimeout)

    watchdog.recordActivity()
    vi.advanceTimersByTime(900)
    watchdog.recordActivity()
    vi.advanceTimersByTime(900)

    expect(onTimeout).not.toHaveBeenCalled()

    vi.advanceTimersByTime(100)

    expect(onTimeout).toHaveBeenCalledTimes(1)
  })
})

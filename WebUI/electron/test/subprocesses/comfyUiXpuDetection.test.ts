import { describe, expect, it, vi } from 'vitest'

vi.mock('electron', () => ({
  app: { isPackaged: false },
}))

import { probeXpuDevicesWithRetries } from '../../subprocesses/comfyUIBackendService'

describe('probeXpuDevicesWithRetries', () => {
  it('accepts a device that becomes available after a transient empty probe', async () => {
    const probe = vi.fn().mockResolvedValueOnce(false).mockResolvedValueOnce(true)
    const wait = vi.fn().mockResolvedValue(undefined)

    await expect(probeXpuDevicesWithRetries(probe, wait)).resolves.toBe(true)

    expect(probe).toHaveBeenCalledTimes(2)
    expect(wait).toHaveBeenCalledTimes(1)
  })

  it('stops after the retry limit when no XPU device becomes available', async () => {
    const probe = vi.fn().mockResolvedValue(false)
    const wait = vi.fn().mockResolvedValue(undefined)

    await expect(probeXpuDevicesWithRetries(probe, wait)).resolves.toBe(false)

    expect(probe).toHaveBeenCalledTimes(3)
    expect(wait).toHaveBeenCalledTimes(2)
  })
})

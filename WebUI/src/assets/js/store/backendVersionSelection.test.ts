import { describe, expect, it } from 'vitest'
import { selectBackendVersionForInstall } from './backendVersionSelection'

describe('selectBackendVersionForInstall', () => {
  it('prefers the resolved target over an older installed version', () => {
    expect(
      selectBackendVersionForInstall({
        installed: { version: 'v0.17.0' },
        target: { version: 'v0.25.1' },
      }),
    ).toEqual({ version: 'v0.25.1' })
  })
})

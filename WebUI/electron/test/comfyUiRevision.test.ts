import { describe, expect, it } from 'vitest'
import {
  COMFYUI_LOCKED_DEPS_VERSION,
  isComfyUiDepsMarkerCurrent,
  normalizeComfyUiRef,
  useLockedComfyUiDeps,
} from '../subprocesses/comfyUiRevision'

describe('normalizeComfyUiRef', () => {
  it('trims and lowercases version tags', () => {
    expect(normalizeComfyUiRef('  V0.17.0  ')).toBe('v0.17.0')
  })

  it('lowercases hex commit hashes', () => {
    expect(normalizeComfyUiRef('ABCD1234')).toBe('abcd1234')
  })
})

describe('useLockedComfyUiDeps', () => {
  it('is true when requested ref matches bundled ref (case-insensitive tag)', () => {
    expect(useLockedComfyUiDeps('v0.10.0', 'v0.10.0')).toBe(true)
    expect(useLockedComfyUiDeps('V0.10.0', 'v0.10.0')).toBe(true)
  })

  it('is false when refs differ', () => {
    expect(useLockedComfyUiDeps('v0.17.0', 'v0.10.0')).toBe(false)
  })
})

describe('isComfyUiDepsMarkerCurrent', () => {
  it('requires a dependency contract version for locked installs', () => {
    expect(
      isComfyUiDepsMarkerCurrent({
        mode: 'locked',
        revision: 'v0.25.1',
      }),
    ).toBe(false)
  })

  it('accepts the current locked dependency contract', () => {
    expect(
      isComfyUiDepsMarkerCurrent({
        dependencyVersion: COMFYUI_LOCKED_DEPS_VERSION,
        mode: 'locked',
        revision: 'v0.25.1',
      }),
    ).toBe(true)
  })

  it('rejects an earlier locked dependency contract', () => {
    expect(
      isComfyUiDepsMarkerCurrent({
        dependencyVersion: COMFYUI_LOCKED_DEPS_VERSION - 1,
        mode: 'locked',
        revision: 'v0.25.1',
      }),
    ).toBe(false)
  })
})

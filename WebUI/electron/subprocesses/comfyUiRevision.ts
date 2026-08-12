/** Written under ComfyUI install dir after a successful dependency install. */
export const COMFYUI_DEPS_MARKER_FILENAME = '.aipg-comfyui-deps.json'
export const COMFYUI_LOCKED_DEPS_VERSION = 3

export type ComfyUiDepsMarker = {
  /** Bundled dependency contract used for a locked install. */
  dependencyVersion?: number
  mode: 'locked' | 'flexible'
  /** Normalized ref (tag or short hash) used for this install */
  revision: string
}

/**
 * Normalize a user or git ref for comparison (trim, lowercase hex hashes).
 */
export function normalizeComfyUiRef(ref: string): string {
  return ref.trim().toLowerCase()
}

/**
 * Use bundled `uv.lock` when the requested ref matches the shipped ComfyUI ref
 * (from `getBundledComfyUiGitRefSync()` in remoteUpdates — same as backend-versions.json).
 */
export function useLockedComfyUiDeps(revision: string, bundledComfyUiRef: string): boolean {
  return normalizeComfyUiRef(revision) === normalizeComfyUiRef(bundledComfyUiRef)
}

export function isComfyUiDepsMarkerCurrent(marker: ComfyUiDepsMarker): boolean {
  return marker.mode !== 'locked' || marker.dependencyVersion === COMFYUI_LOCKED_DEPS_VERSION
}

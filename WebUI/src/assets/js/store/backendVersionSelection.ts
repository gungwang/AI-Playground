type BackendVersion = {
  releaseTag?: string
  version: string
}

type BackendVersionState = {
  installed?: BackendVersion
  target?: BackendVersion
  uiOverride?: BackendVersion
}

export function selectBackendVersionForInstall(
  versionState: BackendVersionState,
  versionToInstall?: BackendVersion,
) {
  return (
    versionToInstall ?? versionState.uiOverride ?? versionState.target ?? versionState.installed
  )
}

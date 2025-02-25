import { PackageSnapshot } from '@pnpm/lockfile-types'
import { Resolution } from '@pnpm/resolver-base'
import { Registries } from '@pnpm/types'
import * as dp from 'dependency-path'
import getNpmTarballUrl from 'get-npm-tarball-url'
import url = require('url')
import nameVerFromPkgSnapshot from './nameVerFromPkgSnapshot'

export default (
  depPath: string,
  pkgSnapshot: PackageSnapshot,
  registries: Registries
): Resolution => {
  // tslint:disable:no-string-literal
  if (pkgSnapshot.resolution['type']) {
    return pkgSnapshot.resolution as Resolution
  }
  if (!pkgSnapshot.resolution['tarball']) {
    const { name } = nameVerFromPkgSnapshot(depPath, pkgSnapshot)
    const registry = name[0] === '@' && registries[name.split('/')[0]] || registries.default
    return {
      ...pkgSnapshot.resolution,
      registry,
      tarball: getTarball(registry),
    } as Resolution
  }
  if (pkgSnapshot.resolution['tarball'].startsWith('file:')) {
    return pkgSnapshot.resolution as Resolution
  }
  const { name } = nameVerFromPkgSnapshot(depPath, pkgSnapshot)
  const registry = name[0] === '@' && registries[name.split('/')[0]] || registries.default
  return {
    ...pkgSnapshot.resolution,
    registry,
    tarball: url.resolve(registry, pkgSnapshot.resolution['tarball']),
  } as Resolution

  function getTarball (registry: string) {
    const { name, version } = dp.parse(depPath)
    if (!name || !version) {
      throw new Error(`Couldn't get tarball URL from dependency path ${depPath}`)
    }
    return getNpmTarballUrl(name, version, { registry })
  }
  // tslint:enable:no-string-literal
}

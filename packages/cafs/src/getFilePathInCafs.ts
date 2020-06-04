import base32Encode = require('base32-encode')
import path = require('path')
import { Hash } from 'ssri'
import ssri = require('ssri')

export const modeIsExecutable = (mode: number) => (mode & 0o111) === 0o111

export type FileType = 'exec' | 'nonexec' | 'index'

export function getFilePathByModeInCafs (
  cafsDir: string,
  integrity: string | Hash,
  mode: number
) {
  const fileType = modeIsExecutable(mode) ? 'exec' : 'nonexec'
  return path.join(cafsDir, contentPathFromIntegrity(integrity, fileType))
}

export default function getFilePathInCafs (
  cafsDir: string,
  integrity: string | Hash,
  fileType: FileType
) {
  return path.join(cafsDir, contentPathFromIntegrity(integrity, fileType))
}

function contentPathFromIntegrity (
  integrity: string | Hash,
  fileType: FileType
) {
  const sri = ssri.parse(integrity, { single: true })
  const base32 = base32Encode(Buffer.from(sri.digest, 'base64'), 'Crockford', { padding: false })
  return contentPathFromHex(fileType, base32)
}

export function contentPathFromHex (fileType: FileType, hex: string) {
  const p = path.join(hex.slice(0, 2), hex.slice(2))
  switch (fileType) {
    case 'exec':
      return `${p}-exec`
    case 'nonexec':
      return p
    case 'index':
      return `${p}-index.json`
  }
}

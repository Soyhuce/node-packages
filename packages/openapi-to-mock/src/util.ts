import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'

// Extract schema name
const getSchemaName = (ref: string): string | null => {
  const re = /#\/components\/schemas\/(.*)/
  const matches = ref.match(re)
  const found = matches
  if (found) {
    return found[1]
  }
  return null
}

// Replace `{}, /` charactors with `_`
const normalizePath = (path: string): string => {
  const replaced = path.replace(/^\/|{|}/g, '')
  return replaced.replace(/\//g, '_')
}

const normalizeName = (name: string): string => {
  return name.toLowerCase().replace(/ /g, '_').replace(/,/g, '')
}

// Write each response to JSON files.
const writeFiles = (
  data: { [file: string]: any },
  path: string,
  log: (message: any) => void
): void => {
  Object.keys(data).forEach((key) => {
    const val = data[key]
    const fileName = `${key}.json`
    const pathWithoutFolder = fileName
      .split('_')
      .filter((_, k) => k > 0)
      .join('_')
    if (!existsSync(path)) {
      mkdirSync(path, { recursive: true })
    }
    log(pathWithoutFolder)
    const formatted = JSON.stringify(val, null, 2)
    writeFileSync(join(path, pathWithoutFolder), formatted)
  })
}
export { writeFiles, normalizeName, normalizePath, getSchemaName }

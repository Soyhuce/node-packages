import { APPLICATION_JSON } from './response'
import { normalizeName, normalizePath, getSchemaName } from './util'
import { REF, parseObject, parseArray } from './parse'
import { isObject, isArray } from './dataType'

import { PathsObject } from 'openapi3-ts'

type MockData = {
  [path: string]: any
}

// Compose mock data
const composeMockData = (responses: PathsObject, schemas: any): MockData => {
  const ret: any = {}
  Object.keys(responses).forEach((path) => {
    const res: any = responses[path]
    const pathKey = normalizePath(path)
    if (res) {
      const val = res[APPLICATION_JSON]
      if ('example' in val) {
        ret[pathKey] = val.example
      } else if ('examples' in val) {
        if (Object.keys(val.examples).length <= 1) {
          ret[pathKey] = val.examples
        } else {
          for (const [key, example] of Object.entries<any>(val.examples)) {
            const extendedPathKey = pathKey + '_' + normalizeName(key)
            ret[extendedPathKey] = example['value']
          }
        }
      } else if ('schema' in val) {
        const { schema } = val
        const ref = schema[REF]
        if (ref) {
          const schemaName = getSchemaName(ref)
          if (schemaName) {
            ret[pathKey] = schemas[schemaName]
          }
        } else {
          if (isObject(schema)) {
            ret[pathKey] = parseObject(schema, schemas)
          } else if (isArray(schema)) {
            ret[pathKey] = parseArray(schema, schemas)
          } else {
            ret[pathKey] = val.schema.properties
          }
        }
      }
    }
  })
  return ret
}

export type { MockData }

export { composeMockData }

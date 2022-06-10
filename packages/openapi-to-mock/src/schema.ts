import { OpenAPIObject } from 'openapi3-ts'
import { getSchemaData } from './parse'

const extractSchemas = (obj: OpenAPIObject) => {
  const { components } = obj
  const schemas = components && components.schemas ? components.schemas : {}
  return Object.keys(schemas).reduce((acc: any, name: string) => {
    acc[name] = getSchemaData(schemas, name)
    return acc
  }, {})
}

export { extractSchemas }

import { SchemaObject, ReferenceObject } from 'openapi3-ts'
import {
  isObject,
  isArray,
  isAllOf,
  isOneOf,
  isAnyOf,
  isReferenceObject,
  defaultValue
} from './dataType'
import { getSchemaName } from './util'
import { faker } from '@faker-js/faker'

const REF = '$ref'
type Schemas = {
  [schema: string]: SchemaObject
}
type Obj = Record<string, unknown> | Obj[]

const mergeAllOf = (properties: (SchemaObject | ReferenceObject)[], schemas: Schemas): any => {
  let ret: any = {}
  properties.forEach((property) => {
    if (isReferenceObject(property)) {
      const schemaName = getSchemaName(property[REF])
      if (schemaName) {
        const schemaData = getSchemaData(schemas, schemaName)
        ret = Object.assign({}, ret, schemaData)
      }
    } else {
      const parsed = parseObject(property, schemas)
      ret = Object.assign({}, ret, parsed)
    }
  })
  return ret
}

const pickOneOf = (properties: (SchemaObject | ReferenceObject)[], schemas: Schemas): any => {
  const int = faker.datatype.number(properties.length - 1)
  const property = properties[int]
  if (isReferenceObject(property)) {
    const schemaName = getSchemaName(property[REF])
    if (schemaName) {
      const schemaData = getSchemaData(schemas, schemaName)
      return Object.assign({}, schemaData)
    }
  }
  return parseObject(property, schemas)
}

// Retrieve mock data of schema.
const getSchemaData = (schemas: Schemas, name: string): Obj => {
  const schema = schemas[name]
  if (isReferenceObject(schema)) {
    const schemaName = getSchemaName(schema[REF])
    return schemaName ? getSchemaData(schemas, schemaName) : {}
  }

  if (isAllOf(schema)) {
    return mergeAllOf(schema['allOf'], schemas)
  } else if (isArray(schema)) {
    return parseArray(schema, schemas)
  } else if (isObject(schema)) {
    return parseObject(schema, schemas)
  }
  return schema
}

const parseObject = (obj: SchemaObject, schemas: Schemas): any => {
  if (obj.example) return obj.example
  if (obj.type === 'null') {
    return null
  }
  if (obj.type === 'string') {
    return defaultValue(obj)
  }
  if (!obj.properties) {
    return {}
  }
  return Object.keys(obj.properties).reduce((acc: any, key: string) => {
    const property = obj.properties![key]
    if (isReferenceObject(property)) {
      const schemaName = getSchemaName(property[REF])
      if (schemaName) {
        const schema = getSchemaData(schemas, schemaName)
        acc[key] = Object.assign({}, schema)
      }
      return acc
    }
    if (isAllOf(property)) {
      acc[key] = mergeAllOf(property['allOf'], schemas)
    } else if (isOneOf(property)) {
      acc[key] = pickOneOf(property.oneOf, schemas)
    } else if (isAnyOf(property)) {
      acc[key] = pickOneOf(property.anyOf, schemas)
    } else if (isObject(property)) {
      acc[key] = parseObject(property, schemas)
    } else if (isArray(property)) {
      acc[key] = parseArray(property, schemas)
    } else if (property.type) {
      acc[key] = defaultValue(property)
    }
    return acc
  }, {})
}

const parseArray = (
  arr: SchemaObject & { items: SchemaObject | ReferenceObject },
  schemas: Schemas
): Obj[] => {
  if (isReferenceObject(arr.items)) {
    const schemaName = getSchemaName(arr.items[REF])
    if (schemaName) {
      const schema = getSchemaData(schemas, schemaName)
      return [schema]
    }
    return []
  } else if (arr.example) {
    return arr.example
  } else if (arr.items.type) {
    return Array.from({ length: 10 }, () => parseObject(arr.items, schemas))
  }
  return []
}
export { REF, parseArray, parseObject, mergeAllOf, pickOneOf, getSchemaData }

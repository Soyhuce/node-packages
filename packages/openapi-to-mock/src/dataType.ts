import { SchemaObject, ReferenceObject } from 'openapi3-ts'
import { faker } from '@faker-js/faker'
import { format } from 'date-fns'

enum DataType {
  string = 'string',
  number = 'number',
  integer = 'integer',
  boolean = 'boolean',
  array = 'array',
  object = 'object',
  null = 'null'
}

type SchemaType = 'integer' | 'number' | 'string' | 'boolean' | 'object' | 'null' | 'array'

const defaultValue = (schema: SchemaObject) => {
  if (schema.example) {
    return schema.example
  }
  if ((schema.type as unknown as SchemaType[]) instanceof Array) {
    const type = (schema.type as unknown as SchemaType[])[0]
    return defaultValue({ ...schema, type })
  }
  switch (schema.type) {
    case DataType.null:
      return null
    case DataType.string:
      return getStringValue(schema)
    case DataType.number:
      return faker.datatype.number(9999)
    case DataType.integer:
      return faker.datatype.number(99)
    case DataType.boolean:
      return faker.datatype.boolean()
    case DataType.array:
      return []
    case DataType.object:
      return {}
    default:
      return `undefined type value => ${schema.type}`
  }
}

const getStringValue = (schema: SchemaObject): string => {
  if (schema.format) {
    switch (schema.format) {
      case 'date':
        return faker.date.recent(3, new Date()).toDateString()
      case 'date-time':
        if (!schema.pattern) {
          console.warn('Missing date-time pattern')
          return 'date-time'
        } else {
          return format(faker.date.recent(3, new Date()), schema.pattern)
        }
      case 'password':
        return 'password'
      case 'byte':
        return 'U3dhZ2dlciByb2Nrcw=='
      case 'uri':
        return faker.internet.url()
      case 'binary':
        return 'binary'
      default:
        return faker.lorem.word(6)
    }
  }
  if (schema.enum) {
    return faker.helpers.arrayElement(schema.enum)
  }
  return faker.lorem.word(6)
}

const isArray = (
  property: SchemaObject
): property is SchemaObject & { items: SchemaObject | ReferenceObject } => {
  return property.type === DataType.array
}

const isObject = (schema: SchemaObject): schema is SchemaObject & { type: 'object' } => {
  return schema.type === DataType.object || schema.properties !== undefined
}

const isAllOf = (
  schema: SchemaObject
): schema is SchemaObject & { allOf: (SchemaObject | ReferenceObject)[] } => {
  return schema.allOf !== undefined
}

const isOneOf = (
  schema: SchemaObject
): schema is SchemaObject & { oneOf: (SchemaObject | ReferenceObject)[] } => {
  return schema.oneOf !== undefined
}

const isAnyOf = (
  schema: SchemaObject
): schema is SchemaObject & { anyOf: (SchemaObject | ReferenceObject)[] } => {
  return schema.anyOf !== undefined
}

const isReferenceObject = (schema: SchemaObject | ReferenceObject): schema is ReferenceObject => {
  return '$ref' in schema
}

export {
  DataType,
  defaultValue,
  getStringValue,
  isReferenceObject,
  isAllOf,
  isAnyOf,
  isArray,
  isOneOf,
  isObject
}

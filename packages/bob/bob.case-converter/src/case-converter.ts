import {
  CamelToKebabCase,
  CamelToKebabCaseNested,
  CamelToSnakeCase,
  CamelToSnakeCaseNested,
  Cases,
  KebabToCamelCase,
  KebabToCamelCaseNested,
  SnakeToCamelCase,
  SnakeToCamelCaseNested
} from './case-converter.types'

/**
 * Converti une chaine de caractère par une autre en snake_case
 * @param camelCaseString
 */
const _camelToSnake = <T extends string>(camelCaseString: T): CamelToSnakeCase<T> => {
  const match = camelCaseString.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
  )
  return (match || []).map((x) => x.toLowerCase()).join('_') as CamelToSnakeCase<T>
}

/**
 * Converti une chaine de caractère par une autre en kebab-case
 * @param camelCaseString
 */
const _camelToKebab = <T extends string>(camelCaseString: T): CamelToKebabCase<T> => {
  const match = camelCaseString.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
  )
  return (match || []).map((x) => x.toLowerCase()).join('-') as CamelToKebabCase<T>
}

/**
 * Converti une chaine de caractère par une autre en CamelCase
 * @param snakeCaseString
 */
const _snakeToCamel = <T extends string>(snakeCaseString: T): SnakeToCamelCase<T> => {
  return snakeCaseString.replace(/([-_][a-z])/gi, (word) =>
    word.toUpperCase().replace('_', '')
  ) as SnakeToCamelCase<T>
}

/**
 * Converti une chaine de caractère par une autre en CamelCase
 * @param kebabCaseString
 */
const _kebabToCamel = <T extends string>(kebabCaseString: T): KebabToCamelCase<T> => {
  return kebabCaseString.replace(/([-_][a-z])/gi, (word) =>
    word.toUpperCase().replace('-', '')
  ) as KebabToCamelCase<T>
}

/**
 * Conversion d'un object en un autre object avec une fonction de transformation en paramètre
 * @param object
 * @param fn
 */
const _objectTransformation = (
  object: Record<string, unknown>,
  fn: (string: string) => string
): Record<string, unknown> => {
  const ret: Record<string, unknown> = {}
  Object.keys(object).forEach((key: string) => {
    const isObject = object[key] === Object(object[key])
    ret[fn(key)] = isObject
      ? _objectOrArrayTransformation(object[key] as Record<string, unknown>, fn)
      : object[key]
  })
  return ret
}

/**
 * Conversion d'un object ou array
 * @param item
 * @param fn
 */
const _objectOrArrayTransformation = (
  item: Record<string, unknown> | Record<string, unknown>[],
  fn: (string: string) => string
): Record<string, unknown> | Record<string, unknown>[] => {
  return item instanceof Array ? _arrayTransformation(item, fn) : _objectTransformation(item, fn)
}

/**
 * Conversion d'un array d'object
 * @param array
 * @param fn
 */
const _arrayTransformation = (
  array: Record<string, unknown>[],
  fn: (string: string) => string
): Record<string, unknown>[] => {
  return array.map((o) => _objectTransformation(o, fn))
}

/**
 * Conversion d'un object en un autre object avec les clefs transformées
 * @param object
 * @param to
 * @param from
 */
function objectCaseConverter<O extends Record<string, unknown>>(
  object: O,
  to: Cases.KEBAB_CASE,
  from: Cases.CAMEL_CASE
): KebabToCamelCaseNested<O>
function objectCaseConverter<O extends Record<string, unknown>>(
  object: O,
  to: Cases.SNAKE_CASE,
  from: Cases.CAMEL_CASE
): SnakeToCamelCaseNested<O>
function objectCaseConverter<O extends Record<string, unknown>>(
  object: O,
  to: Cases.CAMEL_CASE,
  from: Cases.SNAKE_CASE
): CamelToSnakeCaseNested<O>
function objectCaseConverter<O extends Record<string, unknown>>(
  object: O,
  to: Cases.CAMEL_CASE,
  from: Cases.KEBAB_CASE
): CamelToKebabCaseNested<O>
function objectCaseConverter<O extends Record<string, unknown>>(object: O, from: Cases, to: Cases) {
  if (from === Cases.SNAKE_CASE && to === Cases.CAMEL_CASE) {
    return _objectTransformation(object, _snakeToCamel)
  } else if (from === Cases.KEBAB_CASE && to === Cases.CAMEL_CASE) {
    return _objectTransformation(object, _kebabToCamel)
  } else if (from === Cases.CAMEL_CASE && to === Cases.SNAKE_CASE) {
    return _objectTransformation(object, _camelToSnake)
  } else if (from === Cases.CAMEL_CASE && to === Cases.KEBAB_CASE) {
    return _objectTransformation(object, _camelToKebab)
  } else {
    return ''
  }
}

/**
 * Conversion d'une chaine de caractères
 * @param string
 * @param from
 * @param to
 */
function stringCaseConverter<S extends string>(
  string: S,
  from: Cases.CAMEL_CASE,
  to: Cases.KEBAB_CASE
): CamelToKebabCase<S>
function stringCaseConverter<S extends string>(
  string: S,
  from: Cases.CAMEL_CASE,
  to: Cases.SNAKE_CASE
): CamelToSnakeCase<S>
function stringCaseConverter<S extends string>(
  string: S,
  from: Cases.SNAKE_CASE,
  to: Cases.CAMEL_CASE
): SnakeToCamelCase<S>
function stringCaseConverter<S extends string>(
  string: S,
  from: Cases.KEBAB_CASE,
  to: Cases.CAMEL_CASE
): KebabToCamelCase<S>
function stringCaseConverter<S extends string>(string: S, from: Cases, to: Cases) {
  if (from === Cases.SNAKE_CASE && to === Cases.CAMEL_CASE) {
    return _snakeToCamel(string)
  } else if (from === Cases.KEBAB_CASE && to === Cases.CAMEL_CASE) {
    return _kebabToCamel(string)
  } else if (from === Cases.CAMEL_CASE && to === Cases.SNAKE_CASE) {
    return _camelToSnake(string)
  } else if (from === Cases.CAMEL_CASE && to === Cases.KEBAB_CASE) {
    return _camelToKebab(string)
  } else {
    return ''
  }
}

export { stringCaseConverter, objectCaseConverter, Cases }

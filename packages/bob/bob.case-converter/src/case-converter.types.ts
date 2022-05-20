enum Cases {
  CAMEL_CASE = 'CAMEL_CASE',
  SNAKE_CASE = 'SNAKE_CASE',
  KEBAB_CASE = 'KEBAB_CASE'
}

type KebabToCamelCase<S extends string> = S extends `${infer T}-${infer U}`
  ? `${T}${Capitalize<KebabToCamelCase<U>>}`
  : S

type KebabToCamelCaseNested<T> = T extends Record<string, unknown>
  ? {
      [K in keyof T as KebabToCamelCase<K & string>]: KebabToCamelCaseNested<T[K]>
    }
  : T

type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<SnakeToCamelCase<U>>}`
  : S

type SnakeToCamelCaseNested<T> = T extends Record<string, unknown>
  ? {
      [K in keyof T as SnakeToCamelCase<K & string>]: SnakeToCamelCaseNested<T[K]>
    }
  : T

type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? '_' : ''}${Lowercase<T>}${CamelToSnakeCase<U>}`
  : S

type CamelToSnakeCaseNested<T> = T extends Record<string, unknown>
  ? {
      [K in keyof T as CamelToSnakeCase<K & string>]: CamelToSnakeCaseNested<T[K]>
    }
  : T

type CamelToKebabCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? '-' : ''}${Lowercase<T>}${CamelToKebabCase<U>}`
  : S

type CamelToKebabCaseNested<T> = T extends Record<string, unknown>
  ? {
      [K in keyof T as CamelToKebabCase<K & string>]: CamelToKebabCaseNested<T[K]>
    }
  : T

export {
  Cases,
  KebabToCamelCase,
  KebabToCamelCaseNested,
  SnakeToCamelCase,
  SnakeToCamelCaseNested,
  CamelToSnakeCase,
  CamelToSnakeCaseNested,
  CamelToKebabCase,
  CamelToKebabCaseNested
}

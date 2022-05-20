/* eslint-disable jest/no-identical-title */
import { objectCaseConverter, stringCaseConverter } from './case-converter'
import { Cases } from './case-converter.types'

const camelCaseNestedObject = {
  testStringKey: 'testValue',
  testBooleanKey: true,
  testNumberKey: 0,
  testNestedObject: {
    testStringKey: 'testValue',
    testBooleanKey: true,
    testNumberKey: 0,
    testNestedObject: {
      testStringKey: 'testValue',
      testBooleanKey: true,
      testNumberKey: 0
    }
  }
}

const snakeCaseNestedObject = {
  test_string_key: 'testValue',
  test_boolean_key: true,
  test_number_key: 0,
  test_nested_object: {
    test_string_key: 'testValue',
    test_boolean_key: true,
    test_number_key: 0,
    test_nested_object: {
      test_string_key: 'testValue',
      test_boolean_key: true,
      test_number_key: 0
    }
  }
}

const kebabCaseNestedObject = {
  'test-string-key': 'testValue',
  'test-boolean-key': true,
  'test-number-key': 0,
  'test-nested-object': {
    'test-string-key': 'testValue',
    'test-boolean-key': true,
    'test-number-key': 0,
    'test-nested-object': {
      'test-string-key': 'testValue',
      'test-boolean-key': true,
      'test-number-key': 0
    }
  }
}

const camelCaseFlatObject = {
  testStringKey: 'testValue',
  testBooleanKey: true,
  testNumberKey: 0,
  testNullKey: null
}

const snakeCaseFlatObject = {
  test_string_key: 'testValue',
  test_boolean_key: true,
  test_number_key: 0,
  test_null_key: null
}
const kebabCaseFlatObject = {
  'test-string-key': 'testValue',
  'test-boolean-key': true,
  'test-number-key': 0,
  'test-null-key': null
}

const SNAKE_CASE = 'my_case'
const CAMEL_CASE = 'myCase'
const KEBAB_CASE = 'my-case'

const test = [camelCaseNestedObject, camelCaseNestedObject]

describe('CaseConverter', () => {
  it('array transformation', () => {
    expect(
      test.map((i) => objectCaseConverter(i, Cases.CAMEL_CASE, Cases.SNAKE_CASE))
    ).toStrictEqual([snakeCaseNestedObject, snakeCaseNestedObject])
  })

  describe('Object transformation', () => {
    it('return snake case keyed object', () => {
      expect(
        objectCaseConverter(camelCaseFlatObject, Cases.CAMEL_CASE, Cases.SNAKE_CASE)
      ).toStrictEqual(snakeCaseFlatObject)
    })

    it('return kebab case keyed object', () => {
      expect(
        objectCaseConverter(camelCaseFlatObject, Cases.CAMEL_CASE, Cases.KEBAB_CASE)
      ).toStrictEqual(kebabCaseFlatObject)
    })

    it('return camel case keyed object', () => {
      expect(
        objectCaseConverter(snakeCaseFlatObject, Cases.SNAKE_CASE, Cases.CAMEL_CASE)
      ).toStrictEqual(camelCaseFlatObject)
    })

    it('return camel case keyed object', () => {
      expect(
        objectCaseConverter(kebabCaseFlatObject, Cases.KEBAB_CASE, Cases.CAMEL_CASE)
      ).toStrictEqual(camelCaseFlatObject)
    })
  })

  describe('Nested object transformation', () => {
    it('return snake case keyed nested object', () => {
      expect(
        objectCaseConverter(camelCaseNestedObject, Cases.CAMEL_CASE, Cases.SNAKE_CASE)
      ).toStrictEqual(snakeCaseNestedObject)
    })

    it('return kebab case keyed nested object', () => {
      expect(
        objectCaseConverter(camelCaseNestedObject, Cases.CAMEL_CASE, Cases.KEBAB_CASE)
      ).toStrictEqual(kebabCaseNestedObject)
    })

    it('return camel case keyed nested object', () => {
      expect(
        objectCaseConverter(snakeCaseNestedObject, Cases.SNAKE_CASE, Cases.CAMEL_CASE)
      ).toStrictEqual(camelCaseNestedObject)
    })

    it('return camel case keyed nested object', () => {
      expect(
        objectCaseConverter(kebabCaseNestedObject, Cases.KEBAB_CASE, Cases.CAMEL_CASE)
      ).toStrictEqual(camelCaseNestedObject)
    })
  })

  describe('String transformation', () => {
    it('snake case returns camel case string', () => {
      expect(stringCaseConverter(SNAKE_CASE, Cases.SNAKE_CASE, Cases.CAMEL_CASE)).toStrictEqual(
        CAMEL_CASE
      )
    })

    it('kebab case returns camel case string', () => {
      expect(stringCaseConverter(KEBAB_CASE, Cases.KEBAB_CASE, Cases.CAMEL_CASE)).toStrictEqual(
        CAMEL_CASE
      )
    })

    it('camel case returns snake case string', () => {
      expect(stringCaseConverter(CAMEL_CASE, Cases.CAMEL_CASE, Cases.SNAKE_CASE)).toStrictEqual(
        SNAKE_CASE
      )
    })

    it('camel case returns kebab case string', () => {
      expect(stringCaseConverter(CAMEL_CASE, Cases.CAMEL_CASE, Cases.KEBAB_CASE)).toStrictEqual(
        KEBAB_CASE
      )
    })
  })
})

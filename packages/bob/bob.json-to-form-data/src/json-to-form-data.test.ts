import { toFormData } from './json-to-form-data'
import { caseConverterMockData } from './mocks'

const {
  flatObject,
  flatObjectFormData,
  nestedArray,
  nestedObject,
  nestedObjectFormData,
  nestedArrayFormData
} = caseConverterMockData

const compare = (fd1: FormData, fd2: FormData) => {
  for (const key of fd1.keys()) {
    if (fd1.get(key) !== fd2.get(key)) {
      return false
    }
  }
  return true
}

describe('toFormData', () => {
  it('should convert a flat object', () => {
    const result = toFormData(flatObject)
    expect(compare(result, flatObjectFormData())).toBeTruthy()
  })

  it('should convert nested an object', () => {
    const result = toFormData(nestedObject)
    expect(compare(result, nestedObjectFormData())).toBeTruthy()
  })

  it('should convert a nested array', () => {
    const result = toFormData(nestedArray)
    expect(compare(result, nestedArrayFormData())).toBeTruthy()
  })
})

const file = new File(['foo'], 'foo.txt', {
  type: 'text/plain'
})

const flatObject = {
  testStringKey: 'testValue',
  testBooleanKey: true,
  testNumberKey: 0,
  testNullKey: null,
  testFileKey: file
}

const nestedObject = {
  ...flatObject,
  testNestedObject: {
    ...flatObject,
    testNestedObject: {
      ...flatObject
    }
  }
}

const nestedArray = {
  testNestedArray: [flatObject, flatObject, flatObject],
  testEmptyArray: [],
  testStringArray: ['test'],
  testNumberArray: [12]
}

const flatObjectFormData = (): FormData => {
  const fd = new FormData()
  fd.append('testStringKey', 'testValue')
  fd.append('testBooleanKey', 'true')
  fd.append('testNumberKey', '0')
  fd.append('testNullKey', '')
  fd.append('testFileKey', file)
  return fd
}

const nestedObjectFormData = (): FormData => {
  const fd = new FormData()
  fd.append('testStringKey', 'testValue')
  fd.append('testBooleanKey', 'true')
  fd.append('testNumberKey', '0')
  fd.append('testNullKey', '')
  fd.append('testFileKey', file)
  fd.append('testNestedObject[testStringKey]', 'testValue')
  fd.append('testNestedObject[testBooleanKey]', 'true')
  fd.append('testNestedObject[testNumberKey]', '0')
  fd.append('testNestedObject[testNullKey]', '')
  fd.append('testNestedObject[testFileKey]', file)
  fd.append('testNestedObject[testNestedObject][testStringKey]', 'testValue')
  fd.append('testNestedObject[testNestedObject][testBooleanKey]', 'true')
  fd.append('testNestedObject[testNestedObject][testNumberKey]', '0')
  fd.append('testNestedObject[testNestedObject][testNullKey]', '')
  fd.append('testNestedObject[testNestedObject][testFileKey]', file)
  return fd
}

const nestedArrayFormData = (): FormData => {
  const fd = new FormData()
  fd.append('testNestedArray[0][testStringKey]', 'testValue')
  fd.append('testNestedArray[0][testBooleanKey]', 'true')
  fd.append('testNestedArray[0][testNumberKey]', '0')
  fd.append('testNestedArray[0][testNullKey]', '')
  fd.append('testNestedArray[0][testFileKey]', file)
  fd.append('testNestedArray[1][testStringKey]', 'testValue')
  fd.append('testNestedArray[1][testBooleanKey]', 'true')
  fd.append('testNestedArray[1][testNumberKey]', '0')
  fd.append('testNestedArray[1][testNullKey]', '')
  fd.append('testNestedArray[1][testFileKey]', file)
  fd.append('testNestedArray[2][testStringKey]', 'testValue')
  fd.append('testNestedArray[2][testBooleanKey]', 'true')
  fd.append('testNestedArray[2][testNumberKey]', '0')
  fd.append('testNestedArray[2][testNullKey]', '')
  fd.append('testNestedArray[2][testFileKey]', file)
  fd.append('testEmptyArray[0]', '')
  fd.append('testStringArray[0]', 'test')
  fd.append('testNumberArray[0]', '12')
  return fd
}

export {
  flatObject,
  nestedObject,
  nestedArray,
  flatObjectFormData,
  nestedObjectFormData,
  nestedArrayFormData
}

import { openAPIToMock } from './openapi-to-mock'

describe('Openapi to mock', () => {
  it('should mock', () => {
    const mock = openAPIToMock('entry-file.yaml', 'output-file.json')
    console.log(mock)
    expect(mock).toBeTruthy()
  })
})

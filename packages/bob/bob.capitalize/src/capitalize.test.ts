import { capitalize } from './capitalize'

describe('Capitalize', () => {
  it('should capitalize', () => {
    expect(capitalize('hello world !')).toStrictEqual('Hello world !')
  })
})

import { sumObjectsByKey } from './sum-objects-by-key'

describe('sumObjectsByKey', () => {
  it('should sum object by key', () => {
    expect(sumObjectsByKey({ first: 4, second: 6 }, { first: 7, second: 5 })).toStrictEqual({
      first: 11,
      second: 11
    })
  })
})

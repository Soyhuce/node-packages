import { laravelRequestWrapper, Methods } from './laravel-request-wrapper'
import { fakerApiMock } from './mocks'

interface Datum {
  street: string
  streetName: string
  buildingNumber: string
  city: string
  zipcode: string
  country: string
  countyCode: string
  latitude: number
  longitude: number
}

describe('laravelRequestWrapper', () => {
  // it("should match complete object ", async () => {
  //   try {
  //     const response = await laravelRequestWrapper<RootObject>(
  //       "https://swapi.dev/api/starships/",
  //       Methods.GET
  //     );
  //     expect(response).toMatchObject(SWApiMock);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // });
  it('should match data', async () => {
    try {
      const response = await laravelRequestWrapper<Datum[]>(
        'https://fakerapi.it/api/v1/addresses?_quantity=2&_seed=12456',
        Methods.GET
      )
      expect(response.data).toStrictEqual(fakerApiMock.data)
    } catch (e) {
      console.error(e)
    }
  })
})

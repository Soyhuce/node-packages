import { toFormData } from './json-to-form-data'

console.log(
  toFormData({
    my_property1: false,
    my_property2: 'hello world',
    my_property3: ['hello', 'world']
  })
)

export { toFormData }
export default toFormData

# @soyhuce/bob.capitalize

> Case converter function from [Bob library](../bob).

## Installation

```bash
pnpm add @soyhuce/bob.case-converter
```

## Usage

```ts
import caseConverter from '@soyhuce/bob.case-converter'

console.log(
    caseConverter.stringCaseConverter<string>(
        'helloWorld',
        Cases.CAMEL_CASE,
        Cases.KEBAB_CASE
    )
)
/*

 Output:

'hello-world'

*/

interface MyObject extends Record<string, unknown> {
    'my_property1': boolean
    'my_property2': string
    'my_property3': number
}

console.log(caseConverter.objectCaseConverter<MyObject>({
    'my_property1': false,
    'my_property2': 'hello world',
    'my_property3': 14000
}, Cases.SNAKE_CASE, Cases.CAMEL_CASE))
/*

Output:

{
  'myProperty1': false,
  'myProperty2': 'hello world'
  'myProperty3': 14000
}

*/
```

## License
MIT



# @soyhuce/bob.sum-objects-by-key

> Sum Objects By Key function from [Bob library](../bob).

## Installation

```bash
pnpm add @soyhuce/bob.sum-objects-by-key
```

## Usage

```ts
import sumObjectsByKey from '@soyhuce/bob.sum-objects-by-key'

console.log(
  sumObjectsByKey(
    { first: 4, second: 6 },
    { first: 7, second: 5 }
  )
)

/*
Output:

{
  first: 11,
  second: 11
}

*/
```

## License
MIT

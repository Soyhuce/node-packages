
# @soyhuce/bob.laravel-request-wrapper

> Laravel Request Wrapper function from [Bob library](../bob).

## Installation

```bash
pnpm add @soyhuce/bob.laravel-request-wrapper
```

## Usage

```ts
import laravelRequestWrapper, { Methods } from '@soyhuce/bob.laravel-request-wrapper'

;(async () => {
  await laravelRequestWrapper(
    'path/to/api',
    Methods.GET,
  )
})()
```

## License
MIT

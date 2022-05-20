# @soyhuce/prettier-config

> Prettier [shareable config](https://prettier.io/docs/en/configuration.html#sharing-configurations) for code style.

## Installation

```bash
pnpm add -D @soyhuce/prettier-config

# with Prettier
pnpm add -D prettier @soyhuce/prettier-config
```

## Usage

In order to use this config, choose the one you want and add this configuration to your `package.json`:

```diff
{
+  "prettier": "@soyhuce/prettier-config"
}
```

Or add a `.prettierrc.js` file to your project root containing:

```diff
module.exports = {
+  ...require('@soyhuce/prettier-config')
}
```

## License
MIT

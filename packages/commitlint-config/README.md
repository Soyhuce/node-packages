# @soyhuce/commitlint-config

> CommitLint [shareable config](https://commitlint.js.org/#/concepts-shareable-config) for commit message style.

## Installation

```bash
pnpm add -D @soyhuce/commitlint-config

# with CommitLint
pnpm add -D @commitlint/cli @soyhuce/commitlint-config
```

## Usage

In order to use this config, choose the one you want and add this configuration to your `.commitlintrc.js` file to your project root containing:

```diff
module.exports = {
  extends: [
+   '@soyhuce/commitlint-config'
  ]
}
```

## License
MIT

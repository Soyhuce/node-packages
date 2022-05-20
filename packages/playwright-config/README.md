# @soyhuce/playwright-config

> Playwright [shareable config](https://playwright.dev/docs/intro#configuration-file) for end-to-end testing.

## Installation

```bash
pnpm add -D @soyhuce/playwright-config

# with pPaywright
pnpm add -D @playwright/test @soyhuce/playwright-config
```

## Usage

In order to use this config, choose the one you want and add this configuration to your `playwright.config.js`:

```diff
module.exports = {
+  ...require('@soyhuce/playwright-config')
}
```

## License
MIT

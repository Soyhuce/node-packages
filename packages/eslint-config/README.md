# @ soyhuce/eslint-config

> ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for Javascript/Typescript code style.

## Installation

```bash
pnpm add -D @soyhuce/eslint-config

# with ESLint
pnpm add -D eslint @soyhuce/eslint-config
```

## Usage

In order to use this config, choose the one you want and add this configuration to your `package.json`:

```diff
{
 "eslintConfig": {
   "extends": [
+    "@soyhuce/eslint-config"
   ]
 }
}
```

Or add a `.eslintrc.js` file to your project root containing:

```diff
module.exports = {
  extends: [
+   '@soyhuce/eslint-config'
  ]
}
```

## VSCode integration
We recommend turning on VSCode settings to automatically run `eslint --fix` on save.

```diff
"editor.codeActionsOnSave": {
+  "source.fixAll.eslint": true
}
```

This will automatically format your code once you save. You don't need VSCode prettier extension enabled or running on save as eslint will automatically run `prettier` for you.

## License
MIT

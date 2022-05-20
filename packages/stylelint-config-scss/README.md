# @soyhuce/stylelint-config-scss

> StyleLint [shareable config](https://stylelint.io/#features) for SCSS style.

## Installation

```bash
pnpm add -D @soyhuce/stylelint-config-scss

# with standard config and StyleLint
pnpm add -D stylelint @soyhuce/stylelint-config @soyhuce/stylelint-config-scss
```

## Usage

In order to use this config, choose the one you want and add this configuration to your `package.json`:

```diff
{
 "stylelint": {
   "extends": [
     "@soyhuce/stylelint-config",
+    "@soyhuce/stylelint-config-scss"
   ]
 }
}
```

Or add a `.stylelintrc.js` file to your project root containing:

```diff
module.exports = {
  extends: [
    '@soyhuce/stylelint-config',
+   '@soyhuce/stylelint-config-scss'
  ]
}
```

## VSCode integration
We recommend turning on VSCode settings to automatically run `stylelint --fix` on save.

```diff
"editor.codeActionsOnSave": {
+  "source.fixAll.stylelint": true
}
```

This will automatically format your code once you save.

## License
MIT

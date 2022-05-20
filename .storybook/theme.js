import { create } from '@storybook/theming'

const soyhuce = create({
  base: 'light',

  // Brand
  brandTitle: 'Soyhuce',
  brandUrl: 'https://soyhuce.fr',
  brandImage: 'https://soyhuce.fr/wp-content/themes/soyhuce/img/logo-soyhuce.png',

  colorPrimary: '#004682',
  colorSecondary: '#004682',

  // Typography
  fontBase: '"Fira Sans", sans-serif',
  fontCode: '"Fira Code", monospace',

  // UI
  appBg: '#FAFBFC',
  appContentBg: '#FFF',
  appBorderColor: '#dfe5eb',
  appBorderRadius: 4
})

export { soyhuce }
export default soyhuce

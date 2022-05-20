import { soyhuce } from './theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: { theme: soyhuce },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

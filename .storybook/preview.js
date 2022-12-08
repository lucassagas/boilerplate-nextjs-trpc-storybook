import GlobalStyles from '../src/styles/GlobalStyles'

export const decorators = [
  (Story) => (
    <>
      <Story />
      <GlobalStyles />
    </>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  docs: {
    theme: themes.dark,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

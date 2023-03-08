import 'styled-components'

export const theme = {
  colors: {
    background: '#232528',
  },
}

declare module 'styled-components' {
  type themeType = typeof theme
  export interface DefaultTheme extends themeType {}
}

import 'styled-components'
import theme from '../../themes'

themeType = typeof theme
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends themeType {}
}
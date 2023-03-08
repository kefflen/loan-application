import 'styled-components'

export const theme = {
	colors: {
		background: '#232528',
	},
}

declare module 'styled-components' {
  export type themeType = typeof theme
}

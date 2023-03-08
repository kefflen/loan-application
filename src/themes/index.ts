import 'styled-components'

export const theme = {
	colors: {
		background: '#22212C',
		text: 'white'
	},
}

declare module 'styled-components' {
  export type themeType = typeof theme
}

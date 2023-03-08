import 'styled-components'

export const theme = {
	colors: {
		background: '#22212C',
		text: 'white',
		bgCard: '#302F3D',
	},
}

declare module 'styled-components' {
	export type themeType = typeof theme
}

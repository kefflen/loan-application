import 'styled-components'

export const theme = {
	colors: {
		background: '#22212C',
		text: 'white',
		bgCard: '#302F3D',
		// green: '#9bff68',
		// red: '#ff6868',
	},
}

declare module 'styled-components' {
	export type themeType = typeof theme
}

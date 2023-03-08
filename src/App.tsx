import { ThemeProvider } from 'styled-components'
import { Card } from './components/Card'
import { GlobalStyles } from './GlobalStyles'
import { theme } from './themes'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<div className="app">
				<Card>
          Card
				</Card>
			</div>
		</ThemeProvider>
	)
}

export default App

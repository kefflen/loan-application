import { ThemeProvider } from 'styled-components'
import { BalanceSection } from './components/BalanceSection'
import { GlobalStyles } from './GlobalStyles'
import { theme } from './themes'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<div className="app">
				<BalanceSection />
			</div>
		</ThemeProvider>
	)
}

export default App

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './GlobalStyles'
import { theme } from './themes'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<div className="App">
        Teste
			</div>
		</ThemeProvider>
	)
}

export default App

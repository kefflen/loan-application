import { ThemeProvider } from 'styled-components'
import { BalanceSection } from './components/BalanceSection'
import { TransactionList } from './components/TransactionList'
import { GlobalStyles } from './GlobalStyles'
import { TransactionMock } from './mocks'
import { theme } from './themes'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<div className="app">
				<BalanceSection />
				<TransactionList transactions={TransactionMock} />
			</div>
		</ThemeProvider>
	)
}

export default App

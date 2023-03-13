import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { getTransactions } from './api/TransactionApi'
import { BalanceSection } from './components/BalanceSection'
import { TransactionList } from './components/TransactionList'
import { UsersBalance } from './components/UsersBalance'
import { GlobalStyles } from './GlobalStyles'
import { theme } from './themes'
import { Transaction } from './types/Transaction'

function App() {
	const [transactions, setTransactions] = useState<Transaction[]>([])

	useEffect(() => {
		(async () => {
			const transactionsData = await getTransactions()
			setTransactions(transactionsData)
		})()
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<div className="app">
				<BalanceSection />
				<UsersBalance />
				<TransactionList transactions={transactions} />
			</div>
		</ThemeProvider>
	)
}

export default App

import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { getTransactions } from './api/TransactionApi'
import { BalanceSection } from './components/BalanceSection'
import { InputField } from './components/InputField'
import { TransactionDialogForm } from './components/TransactionDialogForm'
import { TransactionList } from './components/TransactionList'
import { UsersBalance } from './components/UsersBalance'
import { GlobalStyles } from './GlobalStyles'
import { theme } from './themes'
import { Transaction } from './types/Transaction'

function App() {
	const [transactions, setTransactions] = useState<Transaction[]>([])
	const [transactionDialogOpen, setTransactionDialogOpen] = useState(false)
	const [selectedTransactionUserId, setSelectedTransactionUserId] = useState('')

	useEffect(() => {
		(async () => {
			const transactionsData = await getTransactions()
			setTransactions(transactionsData)
		})()
	}, [])

	const handleCreateTransactionModal = (userId: string) => {
		setTransactionDialogOpen(true)
		setSelectedTransactionUserId(userId)
	}

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<div className="app">
				<BalanceSection />
				<UsersBalance
					openCreateTransactionModal={handleCreateTransactionModal}
				/>
				<TransactionList transactions={transactions} />
				<TransactionDialogForm
					selectedUserId={selectedTransactionUserId}
					open={transactionDialogOpen}
					onClose={() => setTransactionDialogOpen(false)}
				/>
			</div>
		</ThemeProvider>
	)
}

export default App

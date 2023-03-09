import { Transaction } from '../../types/Transaction'
import { Container } from './styled'
import { TransactionItem } from './TransactionItem'

type props = {
	transactions: Transaction[]
}
export function TransactionList({ transactions }: props) {
	return (
		<Container>
			{transactions.map((transaction) => (
				<TransactionItem key={transaction.id} transaction={transaction}/>
			))}
		</Container>
	)
}

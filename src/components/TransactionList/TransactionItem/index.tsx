import { Transaction } from '../../../types/Transaction'
import { formatDate } from '../../../utils/formatDate'
import { Arrow, Container, TransactionInfo, TransferInfo } from './styled'

type props = {
	transaction: Transaction
}

export function TransactionItem({ transaction }: props) {
	return (
		<Container>
			<TransferInfo>
				<div className="name">{transaction.sender}</div>
				<Arrow className={transaction.type === 'owed' ? 'reverse' : 'no-tip'} />
				<div className="value-wrapper">R$ {transaction.value}</div>
				<Arrow className={transaction.type === 'owed' ? 'no-tip' : ''} />
				<div className="name receiver">{transaction.receiver}</div>
			</TransferInfo>
			<TransactionInfo>
				{formatDate(transaction.createdAt)}
			</TransactionInfo>
		</Container>
	)
}

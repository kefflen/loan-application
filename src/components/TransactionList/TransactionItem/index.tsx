import { Transaction } from '../../../types/Transaction'
import { formatMoney } from '../../../utils'
import { formatDate } from '../../../utils/formatDate'
import { Arrow, Container, TransactionInfo, TransferInfo } from './styled'

type props = {
	transaction: Transaction
}

export function TransactionItem({ transaction }: props) {
	return (
		<Container>
			<TransferInfo>
				<div className="name">{transaction.sender.name}</div>
				<Arrow className={transaction.type === 'owed' ? 'reverse' : 'no-tip'} />
				<div className="value-wrapper">{formatMoney(transaction.value)}</div>
				<Arrow className={transaction.type === 'owed' ? 'no-tip' : ''} />
				<div className="name receiver">{transaction.receiver.name}</div>
			</TransferInfo>
			<TransactionInfo>
				{formatDate(transaction.createdAt)}
			</TransactionInfo>
		</Container>
	)
}

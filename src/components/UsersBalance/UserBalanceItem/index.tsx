import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OtherUser } from '../../../types/User'
import { formatMoney } from '../../../utils'
import {
	Container,
	UserName,
	NegativeValue,
	Info,
	MakeTransactionButton,
} from './styled'

type props = {
	user: OtherUser
}
export function UserBalanceItem({ user }: props) {
	const { name, balance } = user
	const owingMe = balance > 0

	return (
		<Container>
			<MakeTransactionButton>
				<FontAwesomeIcon icon={faMoneyBillTransfer} />
			</MakeTransactionButton>
			<UserName>{name}</UserName>
			{owingMe ? (
				<Info>
					<span>Me deve:</span>
					<span>{formatMoney(balance)}</span>
				</Info>
			) : (
				<Info>
					<span>Eu devo:</span>
					<NegativeValue>{formatMoney(Math.abs(balance))}</NegativeValue>
				</Info>
			)}
		</Container>
	)
}

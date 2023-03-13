import { OtherUser } from '../../../types/User'
import { formatMoney } from '../../../utils'
import { Container, UserName, NegativeValue, Info } from './styled'

type props = {
	user: OtherUser
}
export function UserBalanceItem({ user }: props) {
	const { name, balance } = user
	const owingMe = balance > 0

	return (
		<Container>
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

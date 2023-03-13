import { useEffect, useState } from 'react'
import { getDebts } from '../../api/UserApi'
import { OtherUser } from '../../types/User'
import { formatMoney } from '../../utils'
import { Container, Divider, TotalInfos, UserDebts } from './styled'
import { UserBalanceItem } from './UserBalanceItem'

export function UsersBalance() {
	const [debtsUsers, setDebtsUsers] = useState<OtherUser[]>([])
	const [totalBalances, setTotalBalances] = useState({ owingMe: 0, borrowed: 0 })
	const { borrowed, owingMe } = totalBalances

	useEffect(() => {
		(async () => {
			const debtUsersData = await getDebts()
			setDebtsUsers(debtUsersData)
		})()
	}, [])

	useEffect(() => {
		(async () => {
			let owingMe = 0
			let borrowed = 0
			for (const user of debtsUsers) {
				const { balance } = user
				if (balance > 0) {
					owingMe += balance
				} else {
					borrowed += balance
				}
			}
			setTotalBalances({ owingMe, borrowed })
		})()
	}, [debtsUsers])

	return (
		<Container>
			<UserDebts>
				{debtsUsers.map((user) => (
					<UserBalanceItem user={user} key={user.id} />
				))}
			</UserDebts>
			<Divider />
			<TotalInfos>
				<div>
					<span>Me devem: {formatMoney(owingMe)}</span>
				</div>
				<div>
					<span>Eu devo: {formatMoney(Math.abs(borrowed))}</span>
				</div>
			</TotalInfos>
		</Container>
	)
}

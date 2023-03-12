import { OtherUser, User } from './User'

export type Transaction = {
	id: string
	value: number
	createdAt: Date
	sender: User
	receiver: OtherUser
	type: 'borrowed' | 'owed'
	paid: boolean
}

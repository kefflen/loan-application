export type Transaction = {
	id: string
	value: number
	createdAt: Date
	sender: string
	receiver: string
	type: 'borrowed' | 'owed'
	paid: boolean
}

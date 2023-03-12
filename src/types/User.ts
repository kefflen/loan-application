
export type User = {
	id: string
	name: string
}

export type OtherUser = User & {
	balance: number
}
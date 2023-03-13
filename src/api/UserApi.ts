import { usersMock } from '../mocks/usersMock'
import { OtherUser } from '../types/User'

export const getDebts = async (): Promise<OtherUser[]> => {
	return usersMock
}
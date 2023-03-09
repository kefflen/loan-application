import { TransactionMock } from '../mocks'
import { Transaction } from '../types/Transaction'

export const getTransactions = async (): Promise<Transaction[]> => {
	return TransactionMock
}

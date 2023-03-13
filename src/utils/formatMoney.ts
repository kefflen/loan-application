export const formatMoney = (amount: number): string => {
	const result = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(amount)

	return result
}

import styled, { themeType } from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: .8rem;
	padding: 0.8rem;
	background-color: ${({ theme }) => theme.colors.background};
	border-radius: 0.8rem;
`
export const Info = styled.div`
	display: flex;
	gap: .8rem;
`
export const UserName = styled.h4``
export const NegativeValue = styled.span`
	color: ${({ theme }) => theme.colors.negativeValue};
`

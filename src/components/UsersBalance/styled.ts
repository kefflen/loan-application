import styled from 'styled-components'
import { Card } from '../Card'

export const Container = styled(Card)`
	width: 48rem;
	display: flex;
	flex-direction: column;
	padding: 0rem;
	gap: .8rem;
`

export const UserDebts = styled.div`
	display: flex;
	gap: 0.8rem;
	padding: 0.8rem .8rem 0 .8rem;
`

export const TotalInfos = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	padding: .8rem;
`

export const Divider = styled.div`
	height: .1rem;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.background};
`

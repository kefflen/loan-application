import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	padding: 1.2rem 0.8rem;
	
	& + & {
		border-top: 1px solid #837E9F;
	}
`

export const TransferInfo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	.name {
		flex: 1;
		text-transform: uppercase;
		font-weight: semibold;
		letter-spacing: 0.04rem;
	}

	.receiver {
		text-align: end;
	}

	.value-wrapper {
		display: flex;
		padding: 0 0.8rem;
		justify-content: center;
		font-weight: bold;
	}
`
export const TransactionInfo = styled.div`

`
export const Arrow = styled.div`
	position: relative;
	height: 1.6rem;
	flex: 1;
	::before {
		content: '';
		position: absolute;
		top: 50%;
		width: 100%;
		background-color: #837e9f;
		height: 2px;
	}

	::after {
		content: '';
		position: absolute;
		height: 1.6rem;
		width: 1.6rem;
		border-right: 2px solid #837e9f;
		border-top: 2px solid #837e9f;
		right: 0.2rem;
		transform: rotate(45deg);
	}
	&.no-tip {
		::after {
			border-right: none;
			border-top: none;
			border-left: none;
			border-bottom: none;
		}
	}
	&.reverse {
		::after {
			border-right: none;
			border-top: none;
			border-left: 2px solid #837e9f;
			border-bottom: 2px solid #837e9f;
			left: 0.2rem;
		}
	}
`

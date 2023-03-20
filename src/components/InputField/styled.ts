import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	display: flex;
	gap: 0.8rem;
`

export const InputContainer = styled.div`
	position: relative;
	display: flex;
	gap: 0.8rem;
	/* width: 250px; */
`

export const StyledInput = styled.input`
	position: relative;
	width: 100%;
	outline: none;
	border: none;
	color: white;
	box-shadow: none;
	font-size: 1.6rem;
	background-color: transparent;

	letter-spacing: 0.1em;
	padding: 10px 0 5px;
`

export const LabelText = styled.label`
	left: 0;
	position: absolute;
	padding: 10px 0 5px;
	color: rgba(255, 255, 255, 0.5);
	pointer-events: none;
	text-transform: uppercase;
	transition: 0.5s all, background 0s, color 0s;
	transition-delay: 0s, 0s, 0s;
	letter-spacing: 0.1em;

	${StyledInput}:valid ~ &,
  ${StyledInput}:focus ~ & {
		transition: 0.5s all, background 0.5s, color 0.5s;
		transition-delay: 0s, 0.5s, 0.5s;
		color: black;
		transform: translateY(-100%);
		font-size: 0.65em;
		padding: 0;
		padding: 0.2rem;
		background-color: #2196f3;
		border-radius: 0.3rem;
		font-weight: 600;
	}
`

export const StyledIcon = styled.i`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 0.2rem;
	background: #fff;
	overflow: hidden;
	::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		left: -100%;
		background: #2196f3;
		transition: 0.5s;
	}

	${StyledInput}:valid ~ &::before,
  ${StyledInput}:focus ~ &::before {
		left: 0;
	}
`

export const Icon = styled.i`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	width: 4rem;

	::after {
		content: '';
		position: absolute;
		height: 0.2rem;
		width: 100%;
		left: 0;
		bottom: 0;
		background-color: white;
	}

	::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 0.2rem;
		left: -100%;
		bottom: 0;
		background: #2196f3;
		transition: left 0.5s;
		z-index: 1;
	}
	
	&.valid-or-focus {
		::before {
			left: 0;
		}
	}
`

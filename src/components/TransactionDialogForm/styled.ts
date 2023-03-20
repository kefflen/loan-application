import styled from 'styled-components'
import DialogContent from '@mui/material/DialogContent'

export const Container = styled(DialogContent)`
	width: 52rem;
	padding: 1.6rem;
	color: ${({ theme }) => theme.colors.text};
	background-color: ${({ theme }) => theme.colors.background};
	box-shadow: 1rem 1rem 0.5rem rgba(0, 0, 0, 0.15);
`

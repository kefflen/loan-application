import { Dialog } from '@mui/material'
import { useTheme } from 'styled-components'
import { Container } from './styled'

type props = {
	open: boolean
	onClose: () => void
}
export function TransactionDialogForm({ open, onClose }: props) {
	return (
		<Dialog
			open={open}
			onClose={onClose}
			PaperProps= {{
				sx: {
					background: 'transparent'
				}
			}}
		>
			<Container>
				Modal
			</Container>
		</Dialog>
	)
}

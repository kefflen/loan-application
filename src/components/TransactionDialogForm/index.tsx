import { Dialog } from '@mui/material'
import { Container } from './styled'

type props = {
	open: boolean
	onClose: () => void
	selectedUserId: string
}

export function TransactionDialogForm({ open, onClose, selectedUserId }: props) {
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
				Modal: {selectedUserId}
			</Container>
		</Dialog>
	)
}

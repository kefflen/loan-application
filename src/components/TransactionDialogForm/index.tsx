import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dialog } from '@mui/material'
import { InputField } from '../InputField'
import { Container } from './styled'

type props = {
	open: boolean
	onClose: () => void
	selectedUserId: string
}

export function TransactionDialogForm({
	open,
	onClose,
	selectedUserId,
}: props) {
	return (
		<Dialog
			open={open}
			onClose={onClose}
			PaperProps={{
				sx: {
					background: 'transparent',
				},
			}}
		>
			<Container>
				<InputField
					label="Valor pago"
					icon={<FontAwesomeIcon icon={faMoneyBill} />}
				/>
			</Container>
		</Dialog>
	)
}

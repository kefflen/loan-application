import { Card } from '../Card'
import { Container, Title } from './styled'

export function BalanceSection() {
	return (
		<Container>
			<Card>
				<Title>Devendo</Title>
			</Card>
			<Card>
				<Title>A receber</Title>
			</Card>
		</Container>
	)
}

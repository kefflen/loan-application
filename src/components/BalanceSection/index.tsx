import {
	Container,
	InfoCard,
	Title,
	ValueInfo,
	ValueInfoWrapper,
} from './styled'

export function BalanceSection() {
	return (
		<Container>
			<InfoCard>
				<Title>Emprestado</Title>
				<ValueInfoWrapper>
					<ValueInfo>R$ 200,00</ValueInfo>
				</ValueInfoWrapper>
			</InfoCard>
			<InfoCard>
				<Title>Devendo</Title>
				<ValueInfoWrapper>
					<ValueInfo>R$ 200,00</ValueInfo>
				</ValueInfoWrapper>
			</InfoCard>
		</Container>
	)
}

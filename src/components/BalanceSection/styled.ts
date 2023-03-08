import styled, { DefaultTheme, themeType } from 'styled-components'
import { Card } from '../Card'

export const Container = styled.section`
	display: flex;
	gap: 0.8rem;
`

export const InfoCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`
export const ValueInfo = styled.span`
  font-weight: semibold;
  font-size: 2.4rem;
`
export const ValueInfoWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`

type TitleProps = {
	color?: keyof themeType['colors']
}
export const Title = styled.h3<TitleProps>`
	width: 16rem;
	color: ${({ theme, color }) =>
		color ? theme.colors[color] : theme.colors.text};
`

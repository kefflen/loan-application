import { RefObject, useEffect, useRef, useState } from 'react'
import {
	Container,
	Icon,
	InputContainer,
	LabelText,
	StyledIcon,
	StyledInput,
} from './styled'

// const SampleProps: React.FC<
// StyledComponentProps<"input", DefaultTheme, {}, never>
//  & {ref: React.RefObject<HTMLInputElement>}
//  > = () => null

type props = {
	icon: JSX.Element
	label: string
}
export function InputField({ icon, label }: props) {
	const [text, setText] = useState('')
	const [validOrFocus, setValidOrFocus] = useState(false)

	const inputRef: RefObject<HTMLInputElement> = useRef(null)

	const handleInputValid = () => {
		const inputElement = inputRef.current
		if (!inputElement) return
		setValidOrFocus(inputElement.validity.valid)
	}

	const handleInputFocus = () => {
		const inputElement = inputRef.current
		if (!inputElement) return
		setValidOrFocus(true)
	}

	const handleInputBlur = () => {
		const inputElement = inputRef.current
		if (!inputElement) return
		setValidOrFocus(inputElement.validity.valid)
	}

	useEffect(() => {
		const inputElement = inputRef.current
		if (!inputElement) return

		inputElement.addEventListener('change', handleInputValid)
		inputElement.addEventListener ('focus', handleInputFocus)
		inputElement.addEventListener('blur', handleInputBlur)
		return () => {
			inputElement.removeEventListener('change', handleInputValid)
			inputElement.removeEventListener('focus', handleInputFocus)
			inputElement.removeEventListener('blur', handleInputBlur)
		}
	}, [inputRef])

	return (
		<Container>
			<Icon className={validOrFocus ? 'valid-or-focus' : ''}>{icon}</Icon>
			<InputContainer>
				<StyledInput
					type={'text'}
					required
					value={text}
					onChange={(e) => setText(e.target.value)}
					ref={inputRef}
				/>
				<LabelText>{label}</LabelText>
				<StyledIcon />
			</InputContainer>
		</Container>
	)
}

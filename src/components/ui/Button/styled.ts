import styled, { css } from 'styled-components';
import type { ButtonStyleProps } from './types';
import { BUTTON_COLOR_VARIANTS, BUTTON_SIZES } from './constants';

export const ButtonDefault = styled.button`
	box-sizing: border-box;
	position: relative;
	padding: 0;
	margin: 0;
	border: none;
	outline: none;
	background: none;
	box-shadow: none;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: var(--base-transition-time);

	&:disabled {
		pointer-events: none;
		opacity: 0.8;
	}

	&:focus {
		outline: none;
		border: none;
	}
`;

export const ButtonWrap = styled(ButtonDefault)<ButtonStyleProps>`
	${({
		buttonColorVariant = 'dark',
		buttonWidth = 'fit-content',
		buttonSize = 'S',
		isFistLaterLowercase,
		isIconButton,
		isMultiline,
		isRoundButton,
		hidden,
	}) => {
		if (hidden) {
			return css`
				display: none;
			`;
		}

		const { height, borderRadius, paddingHorizontal, paddingVertical, gap } =
			BUTTON_SIZES[buttonSize];
		const {
			bg,
			color,
			bgHover,
			colorHover,
			bgFocus,
			colorFocus,
			borderFocus,
			bgActive,
			colorActive,
		} = BUTTON_COLOR_VARIANTS[buttonColorVariant];

		const isGhostButton =
			buttonColorVariant === 'ghostLight' || buttonColorVariant === 'ghostDark';

		return css`
			width: ${buttonWidth};
			height: ${isIconButton ? 'fit-content' : height};
			border-radius: ${isRoundButton ? '50%' : borderRadius};
			padding: ${isIconButton
				? 'opx'
				: `${paddingVertical} ${isGhostButton ? '0' : paddingHorizontal}`};
			gap: ${gap};
			background: ${bg};
			color: ${color};
			white-space: ${isMultiline ? 'normal' : 'nowrap'};

			& > span::first-letter {
				text-transform: ${isFistLaterLowercase ? 'lowercase' : 'uppercase'};
			}

			& > svg {
				fill: none;
			}

			&:hover {
				background: ${bgHover};
				color: ${colorHover};
				transform: scale(1.1);
			}

			&:focus {
				background: ${bgFocus};
				color: ${colorFocus};
				${buttonWidth === 'fit-content' || buttonWidth === 'auto'
					? `outline`
					: 'border'}: 2px solid ${borderFocus};

				${(buttonWidth === 'fit-content' || buttonWidth === 'auto') &&
				'outline-offset: -2px;'}
			}

			&:active {
				background: ${bgActive};
				color: ${colorActive};
				outline: none;
				border: none;
			}

			&:disabled {
				opacity: 0.4;
			}
		`;
	}}
`;

import { Link, type LinkProps } from 'react-router-dom';

import { Icon, Typography } from '~components';
import { S } from '~constants';

import { BUTTON_ICON_SIZE, BUTTON_TEXT_SIZE } from './constants';
import type { ButtonProps } from './types';

import * as Style from './styled';

export function Button({
	buttonText,
	buttonLeftNodeElement,
	buttonLeftIconName,
	buttonLeftIconRotate,
	buttonRightIconName,
	buttonRightIconRotate,
	buttonNodeElement,
	buttonSize = S,
	buttonNavigateTo,
	...rest
}: ButtonProps) {
	const buttonIconSize = BUTTON_ICON_SIZE[buttonSize ?? S];

	return (
		<Style.ButtonWrap
			buttonSize={buttonSize}
			isIconButton={!buttonText}
			{...rest}
		>
			{buttonNavigateTo && <Link to={buttonNavigateTo as LinkProps['to']} />}
			{buttonLeftNodeElement && buttonLeftNodeElement}
			{buttonLeftIconName && (
				<Icon
					iconName={buttonLeftIconName}
					size={buttonIconSize}
					rotate={buttonLeftIconRotate}
				/>
			)}
			{buttonText && (
				<Typography asTag="span" textView={BUTTON_TEXT_SIZE[buttonSize]}>
					{buttonText}
				</Typography>
			)}
			{buttonRightIconName && (
				<Icon
					iconName={buttonRightIconName}
					size={buttonIconSize}
					rotate={buttonRightIconRotate}
				/>
			)}
			{buttonNodeElement && buttonNodeElement}
		</Style.ButtonWrap>
	);
}

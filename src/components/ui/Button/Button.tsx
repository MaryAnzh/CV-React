import { Icon, Typography } from '~components';

import { BUTTON_ICON_SIZE, BUTTON_TEXT_SIZE } from './constants';
import type { ButtonProps } from './types';

import * as Style from './styled';
import { S } from '~constants';

export function Button({
	buttonText,
	buttonLeftNodeElement,
	buttonLeftIconName,
	buttonLeftIconRotate,
	buttonRightIconName,
	buttonRightIconRotate,
	buttonNodeElement,
	buttonSize = 'S',
	...rest
}: ButtonProps) {
	const buttonIconSize = BUTTON_ICON_SIZE[buttonSize ?? S];

	return (
		<Style.ButtonWrap
			buttonSize={buttonSize}
			isIconButton={!buttonText}
			{...rest}
		>
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

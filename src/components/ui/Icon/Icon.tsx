import { ICON_PICKER, M } from '~constants';

import type { IconProps } from './models';
import { ICON_SIZES } from './constants';
import * as S from './styled';

export function Icon({ iconName, iconSize, size, ...props }: IconProps) {
	return (
		<S.IconStyle
			as={ICON_PICKER[iconName]}
			size={size ?? ICON_SIZES[iconSize ?? M]}
			{...props}
		/>
	);
}

import { ICON_PICKER, M } from '~constants';

import { ICON_SIZES } from './constants';
import type { IconProps } from './types';

import * as S from './styled';

export const Icon = ({ iconName, iconSize, size, ...props }: IconProps) => (
	<S.IconStyle
		as={ICON_PICKER[iconName]}
		size={size ?? ICON_SIZES[iconSize ?? M]}
		{...props}
	/>
);

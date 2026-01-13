import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { IconType } from './types';

export const IconStyle = styled.svg<IconType>`
	max-width: 100%;
	max-height: 100%;
	flex-shrink: 0;
	color: var(--secondary-100);

	${({ rotate, size, width }) => css`
		${rotate &&
		css`
			transform: rotate(${rotate}deg);
		`};

		${size &&
		css`
			max-width: 100%;
			max-height: 100%;
			width: ${width ?? size}px;
			${!width && `height: ${size}px;`};
		`}
	`}
`;

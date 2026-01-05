import { Typography } from 'components/ui';
import * as S from './styled';
import { YEAR } from './constants';

export const Footer = () => {
	return (
		<S.FooterWrap>
			<Typography asTag='span' textView='bodySMedium'>
				{YEAR}
			</Typography>
		</S.FooterWrap>
	);
};

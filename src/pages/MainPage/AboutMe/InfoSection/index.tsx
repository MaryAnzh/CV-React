import { ABOUT_1, ABOUT_2, INFO } from '~constants';

import { Typography } from '~components';
import * as S from './styled';

export const AboutMeInfo = () => {
    return (
        <S.AboutMeWrap>
            <Typography>
                {INFO}
            </Typography>
            {[ABOUT_1, ABOUT_2].map((str) => (
                <Typography
                    key={str}
                    asTag='p'
                    textView='descriptionXSRegular'>
                    {str}
                </Typography>
            ))}

        </S.AboutMeWrap>
    );
}
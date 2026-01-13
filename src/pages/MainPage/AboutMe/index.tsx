import { ABOUT_ME } from '~constants';
import { Typography } from '~components';

import * as S from './styled';

export const AboutMePage = () => {
    return (
        <S.AboutMePageWrap>
            <Typography>
                {ABOUT_ME}
            </Typography>
        </S.AboutMePageWrap>
    );
}

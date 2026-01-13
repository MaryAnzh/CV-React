import { useNavigate } from 'react-router-dom';

import { AUTHOR, CV, MAIN_ROUTE } from '~constants';
import { Typography } from '~components';

import * as S from './styled';

export const Logo = ({ ...rest }) => {
    const navigate = useNavigate();
    const handleNavigateTo = () => {
        navigate(MAIN_ROUTE);
    }

    return (
        <S.LogoWrap
            onClick={handleNavigateTo}
            {...rest}>
            <Typography asTag="h2" textView="bodyMRegular">
                {CV}
            </Typography>
            <Typography asTag="h1" textView="bodySRegular">
                {AUTHOR}
            </Typography>
        </S.LogoWrap>
    )
}
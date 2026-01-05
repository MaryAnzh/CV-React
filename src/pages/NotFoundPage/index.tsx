import { useNavigate } from 'react-router-dom';

import { Button, Header, Typography } from '~components';
import { GO_HOME, MAIN_ROUTE } from '~constants';

import * as S from './styled';

export const NotFoundPage = () => {

    const navigate = useNavigate();
    const handleGoHome = () => {
        navigate(MAIN_ROUTE);
    }

    return (
        <S.NotFoundWrap>
            <Header />
            <S.NotFountContent>
                <Typography>404</Typography>
                <Button
                    buttonText={GO_HOME}
                    buttonColorVariant='grey'
                    onClick={handleGoHome}
                />
            </S.NotFountContent>
        </S.NotFoundWrap>);
};
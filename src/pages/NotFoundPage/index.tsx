import { Button, Header, Typography } from '~components';
import { GO_HOME, MAIN_ROUTE } from '~constants';

import * as S from './styled';

export const NotFoundPage = () => (
    <S.NotFoundWrap>
        <Header />
        <S.NotFountContent>
            <Typography>404</Typography>
            <Button
                buttonText={GO_HOME}
                buttonColorVariant='secondary'
                buttonNavigateTo={MAIN_ROUTE}
            />
        </S.NotFountContent>
    </S.NotFoundWrap>
);
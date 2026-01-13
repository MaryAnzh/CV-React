import { Footer, Header } from '~components';
import * as S from './styled';

export const GamesPage = () => {
    return (
        <S.GamesPageWrap>
            <Header isGamePage />
            <S.GamesWrapper />
            <Footer />
        </S.GamesPageWrap>);
};
import { InfoCard } from '~components';
import { AboutMeInfo } from './InfoSection';
import * as S from './styled';

export const AboutMePage = () => {
    return (
        <S.AboutMePageWrap>
            <AboutMeInfo />
            <InfoCard>
                2
            </InfoCard>
            <InfoCard>
                3
            </InfoCard>
            <InfoCard>
                4
            </InfoCard>
            <InfoCard>
                5
            </InfoCard>
        </S.AboutMePageWrap>
    );
}

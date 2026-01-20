import type { InfoCardProps } from './types';
import * as S from './styled';

export const InfoCard = ({ children, ...rest }: InfoCardProps) => (
    <S.InfoCardWrap {...rest}>
        {children}
    </S.InfoCardWrap>
);
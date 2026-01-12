import { useNavigate } from 'react-router-dom';
import type { SidebarProps } from './types';

import { Typography } from '~components';

import * as S from './styled';

export const SidebarItem = ({ name, path }: SidebarProps) => {
    const navigateTo = useNavigate();
    const handleNavigateTo = (url: string) => () => {
        navigateTo(url);
    }

    return (
        <S.SidebarItemWrap>
            <Typography callback={handleNavigateTo(path)}>
                {name}
            </Typography>
        </S.SidebarItemWrap>
    );
}
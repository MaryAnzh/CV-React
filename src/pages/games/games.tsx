import React from 'react';

import { Text } from '../../components/smart/text/text';
import { PageStyle, PageTitleStyle } from '../page.styled';

export const Games: React.FC = () => {
    return (
        <PageStyle>
            <PageStyle>
                <Text tid='NAV_GAMES' />
            </PageStyle>
            <Text tid='PROGRESS' />
        </PageStyle>
    );
}
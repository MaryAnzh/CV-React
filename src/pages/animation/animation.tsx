import React from 'react';

import { Text } from '../../components/smart/text/text';
import { PageStyle, PageTitleStyle } from '../page.styled';

export const Animation: React.FC = () => {
    return (
        <PageStyle>
            <PageTitleStyle>
                <Text tid='NAV_ANIMATION' />
            </PageTitleStyle>
            <Text tid='PROGRESS' />
        </PageStyle>
    );
}
import React from 'react';
import { PageTitle } from '../../AppStyle';
import { Text } from '../../components/smart/text/text';

import { AnimationStyle } from './animation.styled';

export const Animation = () => {
    return (
        <AnimationStyle>
            <PageTitle>
                <Text tid='NAV_ANIMATION' />
            </PageTitle>
            <Text tid='PROGRESS' />
        </AnimationStyle>
    );
}
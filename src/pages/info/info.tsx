import React from 'react';

import { Text } from '../../components/smart/text/text';
import { InfoCardStyle } from '../../components/common/info-card/info-card.styled';
import { PageStyle, PageTitleStyle } from '../page.styled';

export const Info: React.FC = () => {
    return (
        <PageStyle>
            <PageTitleStyle>
                <Text tid='NAV_INFO' />
            </PageTitleStyle>
            <InfoCardStyle align='flex-end'>
                <Text tid='EDUCATION_INFO' />
            </InfoCardStyle>
        </PageStyle>
    );
}
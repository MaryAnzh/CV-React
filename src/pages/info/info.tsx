import React from 'react';

import { Text } from '../../components/smart/text/text';
import { InfoCardStyle } from '../../components/common/info-card/info-card.styled';
import { PageTitle } from '../../AppStyle';

import { InfoStyle } from './info.styled';
import { EducationInfo } from '../../components/sections/education-info/education-info';

export const Info: React.FC = () => {
    return (
        <InfoStyle>
            <PageTitle>
                <Text tid='NAV_INFO' />
            </PageTitle>
            <InfoCardStyle align='flex-end'>
                <Text tid='EDUCATION_INFO' />
            </InfoCardStyle>
        </InfoStyle>
    );
}
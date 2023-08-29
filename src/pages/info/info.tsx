import React from 'react';
import { InfoStyle } from './info.styled';
import { PageTitle } from '../../AppStyle';
import { Text } from '../../components/smart/text/text';

export const Info = () => {
    return (
        <InfoStyle>
            <PageTitle>
                <Text tid='NAV_INFO' />
            </PageTitle>
            <Text tid='PROGRESS' />
        </InfoStyle>
    );
}
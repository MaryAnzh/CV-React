import React from 'react';

import { Text } from '../../components/smart/text/text';
import { PageStyle, PageTitleStyle } from '../page.styled';


export const Blog: React.FC = () => {
    return (
        <PageStyle>
            <PageTitleStyle>
                <Text tid='NAV_BLOG' />
            </PageTitleStyle>
            <Text tid='PROGRESS' />
        </PageStyle>
    );
}
import React from 'react';
import { BlogStyle } from './blog.styled';
import { PageTitle } from '../../AppStyle';
import { Text } from '../../components/smart/text/text';

export const Blog = () => {
    return (
        <BlogStyle>
            <PageTitle>
            <Text tid='NAV_BLOG'/>
            </PageTitle>
        </BlogStyle>
    );
}
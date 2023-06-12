import React from 'react';
import { PageTitle } from '../../AppStyle';
import { HomeStyle, AnimTest } from './home.styled';

export const Home = () => {
    return (
        <HomeStyle>
            <PageTitle>
                <AnimTest></AnimTest>
            </PageTitle>
        </HomeStyle>
    );
}
import React from 'react';

import { About } from '../../components/sections/about/about';
import { Banner } from '../../components/sections/banner/banner';
import { PageTitle } from '../../AppStyle';
import { HomeStyle } from './home.styled';

export const Home: React.FC = () => {
    return (
        <HomeStyle>
            <Banner />
            <PageTitle></PageTitle>
            <About />
        </HomeStyle>
    );
}
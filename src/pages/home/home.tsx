import React from 'react';

import { Banner } from '../../components/sections/banner/banner';
import { About } from '../../components/sections/about/about';
import { Skills } from '../../components/sections/skills/skills';

import { PageTitle } from '../../AppStyle';
import { HomeStyle } from './home.styled';


export const Home: React.FC = () => {
    return (
        <HomeStyle>
            <Banner />
            <PageTitle></PageTitle>
            <About />
            <Skills />
        </HomeStyle>
    );
}
import React from 'react';

import { PageStyle } from '../page.styled';

import { Banner } from '../../components/sections/banner/banner';
import { About } from '../../components/sections/about/about';
import { Skills } from '../../components/sections/skills/skills';

export const Home: React.FC = () => {
    return (
        <PageStyle>
            <Banner />
            <About />
            <Skills />
        </PageStyle>
    );
}
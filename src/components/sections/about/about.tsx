import React from "react";
import { Text } from "../../smart/text/text";

import { AboutStyle, AboutTitle } from "./about-styled";
import { MyCard } from "./my-card/my-card";

export const About = () => (
    <AboutStyle>
        <AboutTitle>
            <Text tid='ABOUT_TITLE' />
            <MyCard />
        </AboutTitle>
    </AboutStyle>
)
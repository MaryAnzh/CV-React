import React from "react";
import { Text } from "../../smart/text/text";

import {
    SectionStyle,
    SectionTitle
} from "../section.styled";
import { MyCard } from "./my-card/my-card";

export const About = () => (
    <SectionStyle>
        <SectionTitle align='left'>
            <Text tid='ABOUT_TITLE' />
        </SectionTitle>
        <MyCard />
    </SectionStyle>
)
import React from "react";
import { Text } from "../../smart/text/text";
import { SkillsData, ISkillCard } from "../../../data/skills.data";

import { Carousel } from "../../common/carousel/carousel.";
import {
    SectionStyle,
    SectionTitle
} from "../section.styled";


export const Skills: React.FC = () => {
    return (
        <SectionStyle>
            <SectionTitle align='right'>
                <Text tid='SKILLS' />
            </SectionTitle>
            <Carousel cardsData={SkillsData} />
        </SectionStyle>
    );
}
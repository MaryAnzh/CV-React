import React from "react";

import { Text } from "../../../smart/text/text";
import {
    MyCardStyle,
    AboutMeText
} from "./my-card.styled";

export const MyCard: React.FC = () => {
    return (
        <MyCardStyle>
            <AboutMeText>
                <Text tid="ABOUT_1" />
            </AboutMeText>
            <AboutMeText>
                <Text tid="ABOUT_2" />
            </AboutMeText>
            <AboutMeText>
                <Text tid="ABOUT_3" />
            </AboutMeText>
            <AboutMeText>
                <Text tid="ABOUT_4" />
            </AboutMeText>
            <AboutMeText>
                <Text tid="ABOUT_5" />
            </AboutMeText>
            <AboutMeText>
                <Text tid="ABOUT_6" />
            </AboutMeText>
        </MyCardStyle>
    );
}
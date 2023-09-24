import React from "react";

import {
    EducationInfoStyle,
    EducationInfoText
} from "./education-info.styled";
import { Text } from "../../smart/text/text";

export const EducationInfo = () => {
    return (
        <EducationInfoStyle>
            <EducationInfoText>
                <Text tid='EDUCATION_INFO' />
            </EducationInfoText>
        </EducationInfoStyle>
    );
}
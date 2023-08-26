import React from "react";


import { Sphere } from "../../common/sphere/sphere";
import { BannerStyled } from "./banner.styled";

export const Banner: React.FC = () => {
    return (
        <BannerStyled>
            <Sphere />
        </BannerStyled>
    );
}
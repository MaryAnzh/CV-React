import React, { useCallback, useState } from "react";


import { Sphere } from "../../common/sphere/sphere";
import { SphereClass } from "../../common/sphere-class/sphere-class";
import {
    BannerStyled,
    SpinSphereButton
} from "./banner.styled";

export const Banner: React.FC = () => {
    const [spin, setSpin] = useState(false);
    const onClick = useCallback(() => {
        setSpin((prev) => prev = !spin);
    }, [spin])

    return (
        <BannerStyled>
            <SphereClass isSpin={spin} />
            {/* <Sphere spin={spin} /> */}
            <SpinSphereButton
                onClick={onClick}>
                {spin ? 'Stop' : 'Spin'}
            </SpinSphereButton>
        </BannerStyled>
    );
}
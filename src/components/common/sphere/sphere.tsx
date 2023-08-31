import React, { memo } from "react";

import {
    SphereSpace,
    SphereWrap,
    SphereLine,
    SphereDot,
    SphereText
} from "./sphere,styled";

type SphereProps = {
    spin: boolean,
}

export const Sphere: React.FC<SphereProps> = ({ spin }) => {
    const angleStep = 10;

    const dotListFront = [...Array(36).keys()].map((el) => {
        const dotAngle = el * angleStep;
        return (
            <SphereDot
                key={el}
                angle={dotAngle}
                type='front' />
        );
    });
    const dotListBack = [...Array(36).keys()].map((el) => {
        const dotAngle = el * angleStep;
        return (
            <SphereDot
                key={el}
                angle={dotAngle}
                type='back' />
        );
    });

    const lineList = [...Array(24).keys()].map((el) => {
        const lineAngle = (360 / 24) * el;
        return (
            <SphereLine key={el} angle={lineAngle} >
                {dotListBack}
                {dotListFront}
            </SphereLine>
        );
    })

    return (
        <SphereSpace>
            <SphereText>
                CSS and JS
            </SphereText>
            <SphereWrap $spin={spin}>
                {lineList}
            </SphereWrap>
        </ SphereSpace>
    );
};
import React from "react";

import {
    SphereWrapStyle,
    SphereStyle,
    Parallel,
    Dot,
    CarouselBody,
    CarouselCard,
    CarouselCardBackFace,
    CarouselWrap,
    CarouselContainer,
    CarouselBodyWrap
} from "./sphere,styled";

export const Sphere: React.FC = () => {
    const dotsFront = [...Array(36).keys()].map((el: number) => {
        return (
            <Dot
                key={el}
                $front={true}
                index={el} />
        );
    });
    const dotsBack = [...Array(36).keys()].map((el: number) => {
        return (
            <Dot
                key={el}
                $front={false}
                index={el} />
        );
    });
    return <></>;
}
import React from "react";

import {
    CarouselWrap,
    CarouselContainer,
    CarouselBodyWrap,
    CarouselBody,
    CarouselCardFront,
    CarouselCardBack
} from "./carousel.styled";

export const Carousel: React.FC = () => {
    const list = [...Array(8).keys()].map((el) => {
        return (
            <CarouselCardFront key={el} index={el} />
        );
    });

    const listBack = [...Array(8).keys()].map((el) => {
        return (
            <CarouselCardBack key={el} index={el} />
        );
    });

    return (
        <CarouselWrap>
            <CarouselContainer>
                <CarouselBodyWrap>
                    <CarouselBody>
                        <CarouselBody>
                            {listBack}
                            {list}
                        </CarouselBody>
                    </CarouselBody>
                </CarouselBodyWrap>
            </CarouselContainer>
        </CarouselWrap>
    );
}
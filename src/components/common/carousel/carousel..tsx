import React from "react";

import { ArrowSVG } from "../../svg/arrow/arrow";
import {
    CarouselWrap,
    CarouselContainer,
    CarouselBodyWrap,
    CarouselBody,
    CarouselCard,
    CarouselButton
} from "./carousel.styled";

export const Carousel: React.FC = () => {
    const cards = [...Array(8).keys()].map((el) => {
        return (
            <CarouselCard
                key={el}
                index={el}
                type='front' />
        );
    });

    const cardsBAck = [...Array(8).keys()].map((el) => {
        return (
            <CarouselCard
                key={el}
                index={el}
                type='back' />
        );
    });

    return (
        <CarouselWrap>
            <CarouselButton direction='prev'>
                <ArrowSVG deration='prev' />
            </CarouselButton>
            <CarouselContainer>
                <CarouselBodyWrap>
                    <CarouselBody>
                        <CarouselBody>
                            {cardsBAck}
                            {cards}
                        </CarouselBody>
                    </CarouselBody>
                </CarouselBodyWrap>
            </CarouselContainer>
            <CarouselButton direction='nest'>
                <ArrowSVG deration='next' />
            </CarouselButton>
        </CarouselWrap>
    );
}
import React, { useCallback, useState } from "react";

import { ArrowSVG } from "../../svg/arrow/arrow";
import {
    CarouselWrap,
    CarouselContainer,
    CarouselBodyWrap,
    CarouselBody,
    CarouselCard,
    CarouselButton
} from "./carousel.styled";
import { Text } from "../../smart/text/text";

export const Carousel: React.FC = () => {
    const [angle, setAngle] = useState<number>(0);
    const angleStep = 45;
    const [isTransition, seIstTransition] = useState<boolean>(false);

    const cards = [...Array(8).keys()].map((el) => {
        return (
            <CarouselCard
                key={el}
                index={el}
                type='front'>
                <Text tid='SPIN' />
            </CarouselCard>
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

    const onClick = useCallback((type: 'prev' | 'next') => {
        setAngle((prev) => prev = type === 'prev' ? angle + angleStep : angle - angleStep);
        seIstTransition(() => true);
    }, [angle, isTransition]);

    const onTransitionEnd = useCallback(() => {
        seIstTransition(() => false);
    }, [angle]);

    return (
        <CarouselWrap>
            <CarouselButton
                direction='prev'
                $disabled={isTransition}
                onClick={() => onClick('prev')}>
                <ArrowSVG deration='prev' />
            </CarouselButton>
            <CarouselContainer>
                <CarouselBodyWrap
                    angle={angle}
                    onTransitionEnd={onTransitionEnd}>
                    <CarouselBody>
                        <CarouselBody>
                            {cardsBAck}
                            {cards}
                        </CarouselBody>
                    </CarouselBody>
                </CarouselBodyWrap>
            </CarouselContainer>
            <CarouselButton
                direction='nest'
                $disabled={isTransition}
                onClick={() => onClick('next')}>
                <ArrowSVG deration='next' />
            </CarouselButton>
        </CarouselWrap>
    );
}
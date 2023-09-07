import React, { useCallback, useState } from "react";
import { ISkillCard } from "../../../data/skills.data";

import { carouselConst } from "./carousel.const";
import { ArrowSVG } from "../../svg/arrow/arrow";
import {
    CarouselWrap,
    CarouselContainer,
    CarouselBodyWrap,
    CarouselBody,
    CarouselCard,
    CarouselCardTitle,
    CarouselCardList,
    CarouselCardListItem,
    CarouselButton
} from "./carousel.styled";
import { Text } from "../../smart/text/text";

type CarouselProps = {
    cardsData: ISkillCard[],
}

export const Carousel: React.FC<CarouselProps> = ({ cardsData }) => {
    const [angle, setAngle] = useState(0);
    const angleStep = carouselConst.roundStep(cardsData.length);
    const [isTransition, seIstTransition] = useState<boolean>(false);

    const cards = cardsData.map((el, i) => {
        const items: JSX.Element[] | null = el.addition ?
            el.addition.map(el => {
                return (
                    <CarouselCardListItem key={el}>{el}</CarouselCardListItem>
                )
            }) : null;

        return (
            <CarouselCard
                key={el.name}
                index={i}
                type='front'>
                <CarouselCardTitle>
                    <Text tid={el.translateID} />
                    {items &&
                        <CarouselCardList>
                            {items}
                        </CarouselCardList>}
                </CarouselCardTitle>
            </CarouselCard>
        );
    });

    const cardsBAck = cardsData.map((el, i) => {
        return (
            <CarouselCard
                key={el.name}
                index={i}
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
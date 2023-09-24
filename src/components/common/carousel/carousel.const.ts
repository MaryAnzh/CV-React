interface ICarouselConst {
    carouselWidth: number,
    cardWidth: number,
    cardHight: number,
    wrapHight: number,
    cardsInterval: number,
    buttonSize: number,
    roundDeg: number,
    roundStep: (cardsNumber: number) => number
}

export const carouselConst: ICarouselConst = {
    carouselWidth: 860,
    cardWidth: 200,
    cardHight: 150,
    wrapHight: 360,
    cardsInterval: 20,
    buttonSize: 50,
    roundDeg: 360,
    roundStep(cardsNumber) { return this.roundDeg / cardsNumber },
}
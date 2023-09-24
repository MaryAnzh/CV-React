import React from "react";

import { Text } from "../../../components/smart/text/text";
import { IGame } from "../game.interface";
import { GamesNavStyle, GamesNavItem } from "./nav-games.styled";



type GamesNavProps = {
    games: IGame[],
    changeGame: (game: number) => void,
}

export const GamesNav: React.FC<GamesNavProps> = ({ games, changeGame }) => {
    const list = games.map(({ translateKey, isActive }, index) => {
        return (
            <GamesNavItem
                key={translateKey}
                $active={isActive}
                onClick={() => changeGame(index)}>
                <Text tid={translateKey} />
            </GamesNavItem>
        );
    });

    return (
        <GamesNavStyle>
            {list}
        </GamesNavStyle>
    );
}
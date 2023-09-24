import React, { useCallback, useState } from 'react';

import { Text } from '../../components/smart/text/text';
import { PageStyle, PageTitleStyle } from '../page.styled';
import { gamesList } from './games.const';
import { IGame } from './game.interface';
import { GamesNav } from './nav-games/nav-games';
import { GamesLinks } from './games-link/game-link';
import { Game2024 } from './2024-game/2024-game';

export const Games: React.FC = () => {
    const [game2024, setGame2024] = useState(true);
    const [gameLinks, setGameLinks] = useState(false);

    const games: IGame[] = [
        { translateKey: gamesList[0], isActive: game2024 },
        { translateKey: gamesList[1], isActive: gameLinks }
    ];

    const changeGame = useCallback((game: number) => {
        if (game === 0) {
            setGame2024(() => true);
            setGameLinks(() => false);
            return;
        }
        setGame2024(() => false);
        setGameLinks(() => true);
        return;
    }, [games]);

    return (
        <PageStyle>
            <PageTitleStyle>
                <Text tid='NAV_GAMES' />
            </PageTitleStyle>
            <GamesNav
                games={games}
                changeGame={changeGame} />
            {game2024 &&
                <Game2024 />}
            {gameLinks &&
                <GamesLinks />}
        </PageStyle>
    );
}
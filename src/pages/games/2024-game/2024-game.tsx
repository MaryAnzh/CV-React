import React from "react";

import { SizeChecker } from "./size-checker/size-checker";

import { Game2024Style } from "./2024-game.styled";

export const Game2024: React.FC = () => {
    return (
        <Game2024Style>
            <h3>Game 2024</h3>
            <SizeChecker />
        </Game2024Style>
    )
}
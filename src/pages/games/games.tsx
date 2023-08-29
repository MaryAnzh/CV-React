import React from 'react';
import { GamesStyle } from './games.styled';
import { PageTitle } from '../../AppStyle';
import { Text } from '../../components/smart/text/text';

export const Games = () => {
    return (
        <GamesStyle>
            <PageTitle>
                <Text tid='NAV_GAMES' />
            </PageTitle>
            <Text tid='PROGRESS' />
        </GamesStyle>
    );
}
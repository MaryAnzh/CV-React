import styled from "@emotion/styled";
import { PC24_SIZE } from "~constants";

export const GamesPageWrap = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: min-content auto min-content;
`;

export const GamesWrapper = styled.div`
    width: 100%;
    max-width: ${PC24_SIZE}px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
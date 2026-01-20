import styled from "@emotion/styled";
import { AccountPAgeWrap } from "../styled";
import { MIN_LAPTOP } from "~constants";

export const AboutMePageWrap = styled(AccountPAgeWrap)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--p-2);
    align-items: center;
    justify-content: center;
    
    @media (min-width: ${MIN_LAPTOP}) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);

        & > section:nth-of-type(1) {
            grid-column: 1/2;
        }

        & > section:nth-of-type(2) {
            grid-column: 2/4;
        }

        & > section:nth-of-type(4) {
            background: var(--gray-700);
        }
    }
`;
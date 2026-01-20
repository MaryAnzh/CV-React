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

    & > section:nth-of-type(3) {
        background: var(--gray-700);
    }  
    
    @media (min-width: ${MIN_LAPTOP}) {
        display: grid;
        grid-template-columns: 30% 10% 30% 30%;
        grid-template-rows: repeat(2, 1fr);

        & > section:nth-of-type(1) {
            grid-column: 1/3;
        }

        & > section:nth-of-type(2) {
            grid-column: 3/5;
        }

        & > section:nth-of-type(3) {
            grid-column: 1/2;
        }   

        & > section:nth-of-type(4) {
            grid-column: 2/4;
        }
    }
`;
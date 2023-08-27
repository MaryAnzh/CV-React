import styled, { css } from "styled-components";

const rotateEng = 90;

export const ArrowStyle = styled.svg<{ deration: 'prev' | 'next' }>`
   ${({ theme, deration }) =>
        css`
          width: 80%;
          height: 80%;
          fill: ${theme.colors.arrow};
          transform: rotate(${deration === 'prev' ? `${rotateEng}deg` : `-${rotateEng}deg`});
          transition: .3s;

   `}
`;
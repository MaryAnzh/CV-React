import styled from 'styled-components';

export const HeaderStyle = styled.header`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
`;

export const HeaderWrap = styled.div`
    max-width: ${({ theme }) => theme.constants.maxAppSize};
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const ThemeWrap = styled.div`
  position: relative;
  width: calc(${({ theme }) => theme.constants.iconSize} * 2.5);
  height: ${({ theme }) => theme.constants.iconSize};
  border-radius: 50%;
  background: red;
`;
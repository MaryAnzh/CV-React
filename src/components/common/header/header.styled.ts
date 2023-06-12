import styled from 'styled-components';

export const HeaderStyle = styled.header`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
`;

export const HeaderWrap = styled.div`
    position: relative;
    max-width: ${({ theme }) => theme.constants.maxAppSize};
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const HeaderTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.constants.mediaPhonePoint}) {
      flex-direction: column-reverse;
      align-items: flex-start;
      gap: 0.8rem;
    }

`;

export const LogoName = styled.div`
  display: flex;

`;

export const AuthorName = styled.h1`
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
`;

export const SettingsSection = styled.div`
  display: flex;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.constants.mediaPhonePoint}) {
    width: 100%;
    justify-content: space-between;
    }
`;

export const ThemeWrap = styled.div`
  position: relative;
  width: calc(${({ theme }) => theme.constants.iconSize} * 2.5);
  height: ${({ theme }) => theme.constants.iconSize};
  transform-style: preserve-3d;
  perspective: calc(${({ theme }) => theme.constants.iconSize} * 2.5);
`;

export const NavWrap = styled.div`
  width: 100%;
  position: absolute;
  bottom: -120%;
  display: flex;
  justify-content: right;
`;
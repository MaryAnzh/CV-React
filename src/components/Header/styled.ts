import styled from "styled-components";

export const HeaderWrap = styled.header`
  width: 100%;
  padding: var(--p-3);
  gap: var(--p-2);
  display: grid;
  background-color: var(--secondary-300);
  grid-template-columns: auto max-content;
`;

export const HeaderThemeWrap = styled.div`
  display: flex;
  gap: var(--p-1);
`;

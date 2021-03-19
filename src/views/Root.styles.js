import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 15px;
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

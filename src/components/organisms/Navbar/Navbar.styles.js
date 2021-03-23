import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  padding: 30px 0;
  grid-row: 1 / 3;
  grid-column: 1 / 1;
`;

export const StyledTitle = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 30px;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 15px;
    margin-right: 20px;
    text-align: right;
  }
`;

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: bold;
  text-decoration: none;
  text-align: right;
  margin: 15px 20px 15px auto;
  position: relative;

  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    transition: opacity 0.4 ease-in-out;
    content: '';
    position: absolute;
    width: 18px;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    right: -20px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;

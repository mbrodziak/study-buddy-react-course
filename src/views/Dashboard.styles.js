import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledGroupName = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 117px;
  margin-bottom: 60px;

  h1 {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 30px;
    margin-right: 30px;
  }
`;

export const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  margin-right: 20px;
`;

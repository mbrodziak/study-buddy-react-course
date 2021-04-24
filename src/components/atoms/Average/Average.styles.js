import styled from 'styled-components';

export const StyledAverage = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  background-color: ${({ theme, average }) => {
    if (average > 4) return theme.colors.success;
    if (average > 3) return theme.colors.warning;
    if (average > 1) return theme.colors.error;
    return theme.colors.grey;
  }};
  color: ${({ theme }) => theme.colors.white};
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

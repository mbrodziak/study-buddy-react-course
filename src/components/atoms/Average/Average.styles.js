import styled from 'styled-components';

export const StyledAverage = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  background-color: ${({ theme, average }) => (average < 3 ? theme.colors.error : average >= 4 ? theme.colors.success : theme.colors.warning)};
  color: ${({ theme }) => theme.colors.white};
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

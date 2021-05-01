import styled from 'styled-components';
import { StyledAverage } from 'components/atoms/Average/Average.styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px;
  position: relative;
  width: 100%;
`;

export const StyledAverageBigger = styled(StyledAverage)`
  width: 68px;
  height: 68px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  position: absolute;
  left: 40px;
`;

export const StyledDetails = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  padding: 40px;
`;

export const StyledLabel = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const StyledInfo = styled.p`
  font-size: ${({ theme, isBig }) => (isBig ? theme.fontSize.xl : theme.fontSize.l)};
  margin-right: 20px;
`;

export const StyledSubjectInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
`;

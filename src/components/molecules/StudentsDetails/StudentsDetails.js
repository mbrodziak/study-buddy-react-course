import { StyledAverage } from 'components/atoms/Average/Average.styles';
import { Title } from 'components/atoms/Title/Title';
import {
  Wrapper,
  StyledAverageBigger,
  StyledDetails,
  StyledLabel,
  StyledInfo,
  StyledSubjectInfo,
} from 'components/molecules/StudentsDetails/StudentsDetails.styles';

const StudentsDetails = ({ student }) => {
  return (
    <Wrapper>
      <StyledAverageBigger average={student.average}>{student.average}</StyledAverageBigger>
      <Title>{student.name}</Title>
      <StyledDetails>
        <StyledLabel>Course:</StyledLabel>
        <StyledInfo isBig>Economy and finances </StyledInfo>
        <StyledLabel>Average grades:</StyledLabel>
        <StyledSubjectInfo>
          <StyledInfo>Modern Economy</StyledInfo>
          <StyledAverage average={'3.4'}>3.4</StyledAverage>
        </StyledSubjectInfo>
        <StyledSubjectInfo>
          <StyledInfo>Trade and Logistic</StyledInfo>
          <StyledAverage average={'4.1'}>4.1</StyledAverage>
        </StyledSubjectInfo>
        <StyledSubjectInfo>
          <StyledInfo>Buisness Philosophy</StyledInfo>
          <StyledAverage average={'5.0'}>5.0</StyledAverage>
        </StyledSubjectInfo>
      </StyledDetails>
    </Wrapper>
  );
};

export default StudentsDetails;

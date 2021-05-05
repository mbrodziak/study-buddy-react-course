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
        <StyledInfo isBig>{student.course}</StyledInfo>
        <StyledLabel>Average grades:</StyledLabel>
        {student.grades.map(({ subject, average }) => (
          <StyledSubjectInfo key={subject}>
            <StyledInfo>{subject}</StyledInfo>
            <StyledAverage average={average}>{average}</StyledAverage>
          </StyledSubjectInfo>
        ))}
      </StyledDetails>
    </Wrapper>
  );
};

export default StudentsDetails;

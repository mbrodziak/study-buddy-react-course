import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from 'components/molecules/ErrorMessage/ErrorMessage.styles';
import { Title } from 'components/atoms/Title/Title';

const defaultErrorMessage = 'Something went wrong. Please try again, or contact out support.';

const ErrorMessage = ({ message = defaultErrorMessage }) => {
  return (
    <Wrapper>
      <Title>Oops!</Title>
      <p>{message}</p>
    </Wrapper>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;

import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { useError } from 'hooks/useError';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import AuthenticationApp from 'views/AuthenticationApp';
import UnauthenticationApp from 'views/UnauthenticationApp';

const Root = () => {
  const auth = useAuth();
  const { error } = useError();

  return (
    <>
      {error ? <ErrorMessage message={error} /> : null}
      {auth.user ? <AuthenticationApp /> : <UnauthenticationApp />};
    </>
  );
};

export default Root;

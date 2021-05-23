import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { Wrapper, StyledTitle, StyledLink } from './Navbar.styles';

const Navbar = () => {
  const auth = useAuth();

  return (
    <Wrapper>
      <StyledTitle>
        <h1>
          Study <br /> Buddy
        </h1>
      </StyledTitle>
      <StyledLink to="/group">Dashboard</StyledLink>
      <StyledLink as="a" onClick={auth.signOut}>
        Login
      </StyledLink>
    </Wrapper>
  );
};

export default Navbar;

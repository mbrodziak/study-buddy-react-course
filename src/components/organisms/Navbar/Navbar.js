import React from 'react';
import { Wrapper, StyledTitle, StyledLink } from './Navbar.styles';

const Navbar = () => {
  return (
    <Wrapper>
      <StyledTitle>
        <h1>
          Study <br /> Buddy
        </h1>
      </StyledTitle>
      <StyledLink to="/group">Dashboard</StyledLink>
    </Wrapper>
  );
};

export default Navbar;

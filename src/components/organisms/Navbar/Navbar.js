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
      <StyledLink to="/">Dashboard</StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
      <StyledLink to="/">Settings</StyledLink>
      <StyledLink to="/">Logout</StyledLink>
    </Wrapper>
  );
};

export default Navbar;

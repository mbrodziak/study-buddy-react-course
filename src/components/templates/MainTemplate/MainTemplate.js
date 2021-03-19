import React from 'react';
import Navbar from 'components/organisms/Navbar/Navbar';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;

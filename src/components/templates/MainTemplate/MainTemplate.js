import React from 'react';
import Navbar from 'components/organisms/Navbar/Navbar';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';
import { SearchBar } from 'components/organisms/SearchBar/SearchBar';
import NewsSection from 'components/templates/NewsSection/NewsSection';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTemplate;

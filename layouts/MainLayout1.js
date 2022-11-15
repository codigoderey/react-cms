import React from 'react';
import MainNavigation1 from '../components/MainNavigation1';
import Footer1 from '../components/Footer1';

const MainLayout = ({ children }) => {
  return (
    <>
      <MainNavigation1 />
      {children}
      <Footer1 />
    </>
  );
};

export default MainLayout;

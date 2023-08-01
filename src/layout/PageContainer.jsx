import React from "react";
import cntl from "cntl";
import Navbar from './Navbar';

const className = {
  mainBox: cntl`flex flex-col`,
};

const PageContainer = ({ children }) => {
  return (
    <main className={className.mainBox}>
      <Navbar />
      {children}
    </main>
  );
};

export default PageContainer;

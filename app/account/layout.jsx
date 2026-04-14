import React from 'react';
import SideNavigation from '../_components/SideNavigation.jsx';

const Layout = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto py-6 px-8 xl:px-0 lg:grid lg:grid-cols-[16rem_1fr] w-full h-full gap-12">
      <SideNavigation />

      <div>{children}</div>
    </div>
  );
};

export default Layout;

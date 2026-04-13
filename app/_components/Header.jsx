'use client';

import React from 'react';
import Logo from './Logo.jsx';
import Navigation from './Navigation.jsx';
import { usePathname } from 'next/navigation.js';

const Header = () => {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  return (
    <header
      className={`w-full z-50 px-8 py-5 transition-all ${
        isHomepage
          ? 'absolute top-0 left-0 bg-transparent'
          : 'relative border-b border-primary-900'
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};
export default Header;

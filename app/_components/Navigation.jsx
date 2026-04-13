'use client';

import React from 'react';
import Link from 'next/link.js';
import { usePathname } from 'next/navigation.js';

const Navigation = () => {
  const pathname = usePathname();
  const isActive = (href) =>
    `hover:text-accent-400 transition-colors ${
      href === pathname ? 'text-accent-400' : ''
    }`;

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-10 items-center">
        <li>
          <Link href="/" className={isActive('/')}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/cabins" className={isActive('/cabins')}>
            Cabins
          </Link>
        </li>
        <li>
          <Link href="/about" className={isActive('/about')}>
            About
          </Link>
        </li>
        <li>
          <Link href="/account" className={isActive('/account')}>
            Account
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

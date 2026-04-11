import Link from 'next/link.js';
import React from 'react';

const Navigation = () => {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/" className="hover:text-[#d2af84] transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/cabins"
            className="hover:text-[#d2af84] transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-[#d2af84] transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-[#d2af84] transition-colors"
          >
            Account
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

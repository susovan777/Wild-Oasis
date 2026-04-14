'use client';

import React from 'react';
import {
  ArrowRightEndOnRectangleIcon,
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link.js';
import { usePathname } from 'next/navigation.js';

const navLinks = [
  {
    name: 'Home',
    href: '/account',
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: 'Reservations',
    href: '/account/reservations',
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: 'Guest profile',
    href: '/account/profile',
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

const SideNavigation = () => {
  const path = usePathname();

  const isActive = (href) =>
    `${
      path === href ? 'bg-primary-900 text-primary-100' : ''
    } py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200`;

  return (
    <nav className="hidden lg:block border-r border-primary-900">
      <ul className="flex flex-col gap-2 text-lg h-full">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className={isActive(link.href)}>
              {link.icon}
              {link.name}
            </Link>
          </li>
        ))}

        {/* SignOut Button */}
        <li className="mt-auto">
          <button
            type="button"
            className="py-3 cursor-pointer px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full"
          >
            <ArrowRightEndOnRectangleIcon className="h-5 w-5 text-primary-600" />
            <span>Sign out</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavigation;

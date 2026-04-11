import Image from 'next/image.js';
import Link from 'next/link.js';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-5 z-4">
      <Image loading='eager' src="/icon.png" alt="Wild Oasis Logo" width="60" height="60" />
      <span className="text-xl font-semibold text-primary-100 no-underline">Wild Oasis</span>
    </Link>
  );
};

export default Logo;

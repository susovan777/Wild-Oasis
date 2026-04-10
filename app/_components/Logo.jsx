import Image from 'next/image.js';
import Link from 'next/link.js';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-10 z-4">
      <Image loading='eager' src="/icon.png" alt="Wild Oasis Logo" width="50" height="50" />
      <h3 className="text-xl font-semibold text-[#d4dee7] no-underline">Wild Oasis</h3>
    </Link>
  );
};

export default Logo;

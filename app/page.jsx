import React from 'react';
import Link from 'next/link.js';
import Image from 'next/image.js';
import bg from '@/public/img/bg.png';

const Home = () => {
  return (
    <div className="relative h-screen w-full">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={75}
        className="object-cover object-top"
        alt="Mountains and forest with cabin"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary-900/10" />

      <div className="relative flex flex-col items-center justify-center h-full text-center z-10">
        <h1 className="lg:text-8xl md:text-6xl sm:text-5xl text-4xl text-primary-50 mb-6 tracking-tight font-normal">
          Welcome to Paradise
        </h1>
        <Link
          href="/cabins"
          className="px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-5 bg-accent-500 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore Luxury Cabins
        </Link>
      </div>
    </div>
  );
};

export default Home;

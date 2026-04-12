import React from 'react';
import Link from 'next/link.js';
import Image from 'next/image.js';
import bg from '@/public/img/bg.png';

const Home = () => {
  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={75}
        className="object-cover object-top -z-10"
        alt="Mountains and forest with cabin"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary-950/20" />

      <div className="relative text-center z-10">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to Paradise
        </h1>
        <Link
          href="/cabins"
          className="px-4 py-4 bg-accent-500 text-lg font-semibold"
        >
          Explore Luxury Cabins
        </Link>
      </div>
    </main>
  );
};

export default Home;

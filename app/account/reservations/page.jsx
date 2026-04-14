import React from 'react';
import Link from 'next/link.js';

export const metadata = {
  title: 'Reservations',
};

const Reservations = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 px-8 xl:px-0">
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      <p className="text-lg">
        You have no reservations yet. Check out our{' '}
        <Link className="underline text-accent-500" href="/cabins">
          luxury cabins &rarr;
        </Link>
      </p>
    </div>
  );
};

export default Reservations;

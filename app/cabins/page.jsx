import React, { Suspense } from 'react';
import Loading from '@/app/cabins/loading.jsx';
import Filter from '@/app/_components/Filter.jsx';
import CabinList from '@/app/_components/CabinList.jsx';

export const metadata = {
  title: 'Cabins',
};

const Cabins = () => {
  const filter = 'all';

  return (
    <div className="max-w-7xl mx-auto py-6 px-8 xl:px-0">
      <h1 className="text-4xl text-accent-400 font-medium mb-5">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature &#x27;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      {/* Filter */}
      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      {/* Cabin List */}
      <Suspense fallback={<Loading />}>
        <CabinList filter={filter} />
      </Suspense>

      {/* Footer */}
    </div>
  );
};

export default Cabins;

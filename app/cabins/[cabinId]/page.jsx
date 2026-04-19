import React from 'react';
import { getCabin } from '@/app/_lib/data-service.js';
import CabinHero from '@/app/_components/CabinHero.jsx';

// Dynamic metadata
export const generateMetadata = async ({ params }) => {
  const { cabinId } = await params;
  const { name } = await getCabin(cabinId);
  return { title: name };
};

const Page = async ({ params }) => {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  return (
    <>
      <div className="max-w-6xl mx-auto mt-8 py-6 px-8 xl:px-0">
        <CabinHero cabin={cabin} />

        <div>
          <h2 className="text-5xl fon   t-semibold text-center mb-10 text-accent-500">
            Reserve Cabin today. Pay on arrival.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Page;

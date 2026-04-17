import React from 'react';
import CabinCard from './CabinCard.jsx';
import { getCabins } from '../_lib/data-service.js';

const CabinList = async ({ filter }) => {
  const cabins = await getCabins();
  let displayCabins;

  if (filter === 'all') displayCabins = cabins;
  if (filter === 'small') {
    displayCabins = cabins.filter((c) => c.maxCapacity <= 3);
  }
  if (filter === 'medium') {
    displayCabins = cabins.filter(
      (c) => c.maxCapacity > 3 && c.maxCapacity <= 7
    );
  }
  if (filter === 'large') {
    displayCabins = cabins.filter(
      (c) => c.maxCapacity > 7 && c.maxCapacity <= 12
    );
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayCabins.map((c) => (
        <CabinCard cabin={c} key={c.id} />
      ))}
    </div>
  );
};

export default CabinList;

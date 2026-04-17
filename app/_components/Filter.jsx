'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation.js';

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // This line looks at the URL and asks: "Is there a value for capacity?" if nothing set to default 'all'
  const activeFilter = searchParams.get('capacity') ?? 'all';

  const handleFilter = (filter) => {
    // Duplicate the current params
    const params = new URLSearchParams(searchParams);

    // Set the new value
    params.set('capacity', filter);

    // Update the address bar
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
};

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`cursor-pointer flex gap-1 items-center px-5 py-2 disabled:cursor-not-allowed hover:bg-primary-700 ${
        filter === activeFilter ? 'bg-primary-700 text-primary-50' : ''
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;

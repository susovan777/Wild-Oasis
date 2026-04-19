import React from 'react';

const CabinListSkeleton = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {/* Renders 4 cards in a 2x2 grid on medium+ screens */}
      {Array.from({ length: 4 }).map((_, i) => (
        <CabinCardSkeleton key={i} />
      ))}
    </div>
  );
};

const CabinCardSkeleton = () => {
  return (
    // <div className="flex border border-primary-800">
    //   {/* Left: Image Placeholder */}
    //   <div className="relative h-full w-32 sm:w-48 bg-primary-900 animate-pulse border-r border-primary-800 aspect-square sm:aspect-auto"></div>

    //   {/* Middle: Content area */}
    //   <div className="grow p-6 flex flex-col gap-3">
    //     {/* Title */}
    //     <div className="h-8 w-3/4 bg-primary-900 animate-pulse rounded"></div>

    //     {/* Capacity / Icon area */}
    //     <div className="flex items-center gap-3">
    //       <div className="h-5 w-5 rounded-full bg-primary-900 animate-pulse"></div>
    //       <div className="h-5 w-1/3 bg-primary-900 animate-pulse rounded"></div>
    //     </div>

    //     {/* Price / Discount area */}
    //     <div className="flex items-baseline gap-3 mt-auto">
    //       <div className="h-7 w-20 bg-primary-900 animate-pulse rounded"></div>
    //       <div className="h-5 w-12 bg-primary-800 animate-pulse rounded"></div>
    //     </div>
    //   </div>

    //   {/* Right: Button/Action Area */}
    //   <div className="p-4 border-l border-primary-800 flex items-end">
    //     <div className="h-10 w-24 bg-primary-900 animate-pulse rounded"></div>
    //   </div>
    // </div>
    <div className="flex flex-col md:flex-row bg-primary-900 border border-primary-800">
        <div className="relative w-full h-[200px] md:w-[25%] lg:w-[35%] md:h-auto">
          <div className="animate-pulse h-full bg-primary-900 rounded"></div>
        </div>
      
        <div className="grow">
          <div className="pt-5 pb-4 px-7 bg-primary-800">
            <div className="animate-pulse h-8 bg-primary-900 rounded mb-2"></div>
            <div className="flex gap-3 items-center mb-2">
              <div className="h-5 w-5 bg-primary-900 rounded"></div>
              <div className="animate-pulse h-6 bg-primary-900 rounded w-1/2"></div>
            </div>
            <div className="flex gap-3 justify-end items-baseline">
              <div className="animate-pulse h-10 bg-primary-900 rounded w-1/4"></div>
              <div className="animate-pulse h-6 bg-primary-900 rounded w-1/4"></div>
            </div>
          </div>
      
          <div className="bg-primary-800 border-t border-primary-800 text-right">
            <div className="animate-pulse border-l border-primary-800 py-4 px-6 inline-block bg-primary-900 rounded"></div>
          </div>
        </div>
      </div>
  );
};

export default CabinListSkeleton;

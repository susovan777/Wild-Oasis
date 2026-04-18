import React from 'react';
import Spinner from '@/app/_components/Spinner.jsx';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-600 mt-5">Loading...</p>
    </div>
  );
};

export default Loading;

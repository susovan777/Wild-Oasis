import React from 'react';

const UpdateProfileForm = () => {
  const inputClass = `bg-primary-400 text-primary-800 px-5 py-2 w-full shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 focus:outline-none`;

  return (
    <form
      action=""
      className="text-lg bg-primary-900 px-12 py-8 flex flex-col gap-6"
    >
      <div className="space-y-2">
        <label htmlFor="fullname">Full Name</label>
        <input name="fullname" className={inputClass} />
      </div>
      <div className="space-y-2">
        <label htmlFor="email">Email Address</label>
        <input name="email" className={inputClass} />
      </div>
      <div className="space-y-2">
        <label htmlFor="country">Country</label>
        <input name="country" className={inputClass} />
      </div>
      <div className="space-y-2">
        <label htmlFor="national-id">National ID</label>
        <input name="national-id" className={inputClass} />
      </div>

      {/* Update buttton */}
      <div className="flex items-center justify-end mt-2">
        <button className="px-8 py-3 text-primaty-800 font-semibold bg-accent-500 hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 transition-all">
          Update profile
        </button>
      </div>
    </form>
  );
};

export default UpdateProfileForm;

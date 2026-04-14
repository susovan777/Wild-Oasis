import React from 'react';

export const metadata = {
  title: 'Profile',
};

const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 px-8 xl:px-0">
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
    </div>
  );
};

export default Profile;

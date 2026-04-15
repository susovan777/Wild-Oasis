import UpdateProfileForm from '@/app/_components/UpdateProfileForm.jsx';
import React from 'react';

export const metadata = {
  title: 'Profile',
};

const Profile = () => {
  return (
    <div className="xl:px-0">
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm/>
    </div>
  );
};

export default Profile;

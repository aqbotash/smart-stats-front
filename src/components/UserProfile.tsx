// UserProfile.tsx
import React from 'react';

interface Props {
  firstName: string;
  lastName: string;
  ranking: number;
}

const UserProfile: React.FC<Props> = ({ firstName, lastName, ranking }) => {
  return (
    <div className="flex flex-col rounded-lg p-6 gap-4 bg-white">
      <div className="flex flex-row">
        <div className="w-32 h-32 rounded-full bg-gray-300 mr-5"></div>
        <div className="flex flex-col gap-1.5 justify-center items-left">
          <h1 className="font-semibold">{firstName}</h1>
          <h1 className="font-semibold">{lastName}</h1>
          <p className="font-thin text-base">Ranking: {ranking}/30</p>
        </div>
      </div>
      <button className="bg-blue-400 text-black border-none px-5 py-2.5 rounded-full cursor-pointer text-base font-medium shadow-lg transition-colors duration-300 hover:bg-blue-300">Edit Profile</button>
    </div>
  );
};

export default UserProfile;

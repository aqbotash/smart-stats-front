// UserProfile.tsx
import React from 'react';
import styles from './UserProfile.module.css';

interface Props {
  firstName: string;
  lastName: string;
  ranking: number;
}

const UserProfile: React.FC<Props> = ({ firstName, lastName, ranking }) => {
  return (
    <div className="flex flex-col rounded-lg p-6 gap-4 bg-white">
      <div className="flex flex-row">
        <div className={styles.avatarPlaceholder}></div>
        <div className="flex flex-col gap-1.5 justify-center items-left">
          <h1 className="font-semibold">{firstName}</h1>
          <h1 className="font-semibold">{lastName}</h1>
          <p className="font-thin text-base">Ranking: {ranking}/30</p>
        </div>
      </div>
      <button className={styles.editButton}>Edit Profile</button>
    </div>
  );
};

export default UserProfile;

import React from "react";

type ProfileCardProps = {
  imageUrl: string;
  name: string;
  className: string;
  division: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  imageUrl,
  name,
  className,
  division,
}) => {
  return (
    <div className='w-70 bg-white rounded-lg shadow-lg overflow-hidden place-items-center'>
      <img
        src={imageUrl}
        alt='Profile picture'
        className='w-40 object-cover '
      />
      <div className='p-4'>
        <h2 className='text-xl font-semibold text-gray-900'>{name}</h2>
        <p className='text-gray-600'>Kelas: {className}</p>
        <p className='text-gray-600'>Divisi: {division}</p>
      </div>
    </div>
  );
};

export default ProfileCard;

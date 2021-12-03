import * as React from 'react';

import NextImage from '@/components/NextImage';

import { AchievementType } from './CardSection';

const formatDriveUrl = (data: string): string => {
  const first = data.indexOf('/d/') + 3;
  const last = data.indexOf('/view');
  const result = data.substring(first, last);
  return `https://drive.google.com/uc?export=view&id=${result}`;
};

export default function SingleAchievementCard({
  value,
}: {
  value: AchievementType;
}) {
  return (
    <div className='p-4 bg-primary-100 border-2 border-primary-900 shadow'>
      <div className='bg-small-grid p-8 pb-0 bg-top bg-no-repeat bg-contain'>
        <NextImage
          className='w-full border-2 border-primary-900 shadow-sm'
          src={formatDriveUrl(value.img[0])}
          alt=''
          width={602}
          height={752}
        />
      </div>
      <div className='p-4'>
        <p className='heading'>{value.title}</p>
        <hr className='my-2 border-primary-700' />
        <div>
          {value.person.map((name, i) => (
            <p className='content' key={i}>
              {name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

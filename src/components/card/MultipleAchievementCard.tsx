import * as React from 'react';

import { AchievementType } from '@/lib/type';

import CarouselWithThumbnail from '@/components/carousel/CarouselWithThumbnail';

const formatDriveUrl = (data: string): string => {
  const first = data.indexOf('/d/') + 3;
  const last = data.indexOf('/view');
  const result = data.substring(first, last);
  return `https://drive.google.com/uc?export=view&id=${result}`;
};

const formateImageArray = (data: string[]): string[] =>
  data.map((item) => formatDriveUrl(item));

export default function MultipleAchievementCard({
  value,
}: {
  value: AchievementType;
}) {
  return (
    <div className='p-4 bg-primary-100 border-2 border-primary-900 shadow'>
      <div className='bg-small-grid p-8 pb-0 bg-top bg-no-repeat bg-contain'>
        <CarouselWithThumbnail images={formateImageArray(value.img)} />
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

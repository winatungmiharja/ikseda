import * as React from 'react';

import { AchievementType } from '@/lib/type';

import CarouselWithThumbnail from '@/components/carousel/CarouselWithThumbnail';

export default function MultipleAchievementCard({
  value,
}: {
  value: AchievementType;
}) {
  return (
    <div className='p-4 bg-primary-100 border-2 border-primary-900 shadow'>
      <div className='bg-small-grid p-8 pb-0 bg-top bg-no-repeat bg-contain'>
        <CarouselWithThumbnail images={value.img} />
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

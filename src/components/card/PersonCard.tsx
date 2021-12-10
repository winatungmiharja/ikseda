/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import * as React from 'react';

import { PersonType } from '@/lib/type';

export default function PersonCard({
  status,
  name,
  type = 'dark',
  color,
  img,
}: PersonType) {
  return (
    <div className='relative border-2 border-primary-900 divide-x-0 divide-y-2 divide-primary-900 shadow-sm transition-all duration-150 ease-in-out hover:shadow-md'>
      <img
        src={img}
        alt=''
        className='aspect-[2/1] object-cover w-full md:aspect-[3/4]'
      />
      <div
        className={clsx(
          'p-2',
          {
            'text-white': type === 'light',
          },
          {
            'bg-teal': color === 'teal',
            'bg-mustard': color === 'mustard',
            'bg-magenta': color === 'magenta',
            'bg-navy': color === 'navy',
            'bg-primary-500': color === 'orange',
            'bg-primary-600': color === 'brown',
          }
        )}
      >
        <p className='text-lg font-semibold'>{status}</p>
        <p className='text-sm'>{name}</p>
      </div>
    </div>
  );
}

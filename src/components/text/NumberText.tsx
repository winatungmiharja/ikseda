/* eslint-disable @next/next/no-img-element */

import clsx from 'clsx';
import * as React from 'react';

export default function NumberText({
  content,
  className,
  isHover,
}: {
  content: string;
  className?: string;
  isHover?: boolean;
}) {
  return (
    <div className='relative flex-shrink-0'>
      <img
        src='/images/nail.svg'
        alt='nail'
        className='absolute -top-1 left-1/2 z-10 w-4 -translate-x-1/2'
      />
      <div
        className={clsx(
          'relative p-0.5 w-12 h-12 bg-primary-100 rounded-full transition-all duration-100 ease-in-out',
          {
            'rotate-12': isHover,
          },
          className
        )}
      >
        <div className='flex justify-center items-center p-1 w-full h-full rounded-full border-2 border-primary-900'>
          <p className='heading'>{`0${content}.`}</p>
        </div>
      </div>
    </div>
  );
}

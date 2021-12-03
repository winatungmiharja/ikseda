import clsx from 'clsx';
import React, { ReactEventHandler } from 'react';

import NextImage from '../NextImage';
type ThumbType = {
  selected: boolean;
  onClick: ReactEventHandler;
  imgSrc: string;
};
export const Thumb = ({ selected, onClick, imgSrc }: ThumbType) => (
  <div
    style={{ width: '96px', minWidth: '96px' }}
    className={clsx('embla__slide p-1', {
      'bg-teal': selected,
      'bg-primary-700': !selected,
    })}
  >
    <button
      onClick={onClick}
      className='block relative w-full h-16 bg-transparent cursor-pointer'
      style={{ touchAction: 'manipulation' }}
      type='button'
    >
      <NextImage
        className='w-full border-2 border-primary-900'
        priority
        src={imgSrc}
        alt='achievement'
        width={602}
        height={752}
      />
    </button>
  </div>
);

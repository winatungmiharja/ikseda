/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

export default function CoverSection() {
  return (
    <div className='layout p-4 w-full md:p-16'>
      <div className=''>
        <h1 className='font-outline-900-sm text-transparent uppercase md:font-outline-900-md'>
          Our
        </h1>
        <h1 className='font-outline-900-sm text-primary-500 uppercase md:font-outline-900-md'>
          <span className='text-mustard'>Achieve</span>
          ment
        </h1>
      </div>
      <div className='w-full h-full'>
        <img src='/images/achievements.svg' alt='' className='' />
      </div>
    </div>
  );
}

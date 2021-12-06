/* eslint-disable @next/next/no-img-element */

import * as React from 'react';

export default function VideoSection() {
  return (
    <div className='bg-primary-400'>
      <div className='layout min-h-main flex justify-end items-center w-full'>
        <div className=''>
          <img src='/images/video-grid.svg' alt='grid' className='' />
          {/* <img src="/images/video-frame.svg" alt="video-frame" className='' />
              <img src="/images/disc.svg" alt="disc" className='' />
              <img src="/images/loading.svg" alt="loading" className='' /> */}
        </div>
      </div>
    </div>
  );
}

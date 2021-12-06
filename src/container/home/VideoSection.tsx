/* eslint-disable @next/next/no-img-element */

import * as React from 'react';

export default function VideoSection() {
  return (
    <div className='overflow-hidden py-16 bg-primary-400'>
      <div className='bg-video-grid p-16 bg-contain md:p-0'>
        <div className='layout flex relative flex-col justify-center items-center w-full md:min-h-main'>
          <div className='relative'>
            <img src='/images/video-frame.svg' alt='' className='w-full' />
            <img
              src='/images/disc.svg'
              alt=''
              className='absolute top-0 right-0 w-32 translate-x-1/2 -translate-y-1/2 md:w-64'
            />
            <div
              className='absolute top-0 w-full h-full bg-red-800'
              style={{
                top: '24%',
                left: '6%',
                height: '74%',
                width: '92%',
              }}
            >
              Video
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

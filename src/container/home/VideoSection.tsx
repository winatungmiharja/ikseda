/* eslint-disable @next/next/no-img-element */

import * as React from 'react';
import ReactPlayer from 'react-player';

export default function VideoSection() {
  return (
    <div className='min-h-main flex overflow-hidden px-2 py-16 bg-primary-400 md:px-16 md:py-32'>
      <div className='bg-video-grid w-full min-h-full bg-cover md:bg-fill'>
        <div className='layout flex relative flex-col justify-center items-center min-h-full'>
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
              <ReactPlayer
                width={'100%'}
                height={'100%'}
                url='https://www.youtube.com/watch?v=eSakB6M8sWQ&t=2'
                controls={true}
                light={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

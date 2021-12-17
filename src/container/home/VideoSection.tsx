/* eslint-disable @next/next/no-img-element */

import clsx from 'clsx';
import * as React from 'react';
import ReactPlayer from 'react-player';

export default function VideoSection() {
  const [isPlay, setIsPlay] = React.useState<boolean>(false);
  return (
    <div className='flex overflow-hidden px-2 py-4 bg-primary-400 md:min-h-main md:px-16 md:py-16'>
      <div className='bg-video-grid w-full min-h-full bg-no-repeat bg-cover'>
        <div className='layout flex relative flex-col justify-center items-center p-8 min-h-full md:p-24'>
          <div className='relative max-w-2xl'>
            <img src='/images/video-frame.svg' alt='' className='w-full' />
            <img
              src='/images/disc.svg'
              alt=''
              className={clsx(
                'absolute top-0 -right-8 z-20 w-16 md:-right-16 md:w-32',
                {
                  'animate-spin ease-in-out': isPlay,
                },
                {
                  'animate-none': !isPlay,
                }
              )}
            />
            <div
              className='absolute top-0 w-full h-full'
              style={{
                top: '24%',
                left: '6%',
                height: '74%',
                width: '92%',
              }}
            >
              <div className='bg-paper absolute top-1/2 left-1/2 z-10 p-2 w-full h-full border-2 border-primary-900 shadow-inner -translate-x-1/2 -translate-y-1/2'>
                <ReactPlayer
                  onPlay={() => setIsPlay(true)}
                  onPause={() => setIsPlay(false)}
                  onEnded={() => setIsPlay(false)}
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
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import { aboutData } from '@/data/about';

import SectionText from '@/components/text/SectionText';

export default function CoverSection() {
  return (
    <div className='layout min-h-main flex relative flex-wrap p-4 w-full md:pt-16 lg:pt-0'>
      <div className='flex flex-col gap-4 justify-center w-full lg:w-7/12'>
        <SectionText titleOne='about' titleTwo=' us' />
        <div className='bg-primary-400'>
          <p className='p-8 text-sm font-semibold border-2 border-primary-900 shadow'>
            {aboutData.desc}
          </p>
        </div>
      </div>
      <div className='flex items-start ml-auto w-8/12 lg:items-center lg:ml-0 lg:w-5/12'>
        <img src='/images/ikseda-megaphone.svg' alt='' className='' />
      </div>
    </div>
  );
}

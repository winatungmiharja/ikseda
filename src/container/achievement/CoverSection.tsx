/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import SectionText from '@/components/text/SectionText';

export default function CoverSection() {
  return (
    <div className='layout flex flex-col gap-4 p-4 w-full h-full md:gap-0 md:p-16'>
      <SectionText titleOne='our' titleTwo='achieve' titleThree='ments' />
      <div className='w-full h-full'>
        <img src='/images/achievements.svg' alt='' className='' />
      </div>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import { dataCalendarSection } from '@/data/calendar';

// import { dataAchievementSection } from '@/data/achievement';
import SectionText from '@/components/text/SectionText';

export default function CoverSection() {
  return (
    <div className='layout flex flex-col gap-4 p-4 w-full h-full md:gap-0 md:p-16 lg:p-0 lg:pt-16'>
      <SectionText
        titleOne={dataCalendarSection.firstTitle}
        titleTwo={dataCalendarSection.secondTitle}
        titleThree={dataCalendarSection.thirdTitle}
      />
      <div className='overflow-hidden w-full translate-x-8 md:w-11/12 md:translate-x-1/4'>
        <img src='/images/calendar.svg' alt='calendar' />
      </div>
    </div>
  );
}

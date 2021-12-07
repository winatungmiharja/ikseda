/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import { dataAchievementSection } from '@/data/achievement';

import SectionText from '@/components/text/SectionText';

export default function CoverSection() {
  return (
    <div className='layout flex flex-col gap-4 p-4 w-full h-full md:gap-0 md:p-16 lg:p-0 lg:pt-16'>
      <SectionText
        titleOne={dataAchievementSection.firstTitle}
        titleThree={dataAchievementSection.secondTitle}
        titleFour={dataAchievementSection.thirdTitle}
      />
      <div className='w-full h-full'>
        <img src='/images/achievements.svg' alt='' className='' />
      </div>
    </div>
  );
}

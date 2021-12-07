/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import * as React from 'react';

import { aboutData } from '@/data/about';

import MisiItem from '@/components/card/MisiItem';
import AnimatedCharacters from '@/components/text/AnimatedCharacters';
import TitleText from '@/components/text/TitleText';

const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

export default function VisiMisiSection() {
  return (
    <div className='grid grid-cols-1 h-full border-t-2 border-primary-900 divide-y-2 divide-primary-900 md:grid-cols-2 md:divide-x-2 md:divide-y-0'>
      <div className='flex flex-col gap-8 p-8 bg-primary-400 md:p-16'>
        <div className='relative'>
          <img
            src='/images/sparkle.svg'
            alt='sparkle'
            className='absolute left-28 w-4'
          />
          <TitleText titleOne='Misi' className='text-primary-500' />
          <div className='w-1/3 h-0.5 bg-primary-900'></div>
        </div>
        <ul className='flex flex-col gap-6 mt-4'>
          {aboutData.misi.map((misi, i) => (
            <MisiItem id={i} mission={misi} key={i} />
          ))}
        </ul>
      </div>
      <div className='flex flex-col gap-8 p-8 bg-primary-500 md:p-16'>
        <div className='relative'>
          <img
            src='/images/sparkle.svg'
            alt='sparkle'
            className='absolute right-28 w-4'
          />
          <TitleText titleOne='Visi' className='text-right text-primary-100' />
          <div className='ml-auto w-1/3 h-0.5 bg-primary-900'></div>
        </div>
        <div className='flex flex-col gap-6 justify-center items-center h-full'>
          <img
            src='/images/quote.svg'
            alt=''
            className='mr-auto w-12 filter drop-shadow-md rotate-180'
          />
          <div className='flex justify-center px-8'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              variants={container}
            >
              <AnimatedCharacters text={aboutData.visi} />
            </motion.div>
          </div>
          <img
            src='/images/quote.svg'
            alt=''
            className='ml-auto w-12 filter drop-shadow-md'
          />
        </div>
      </div>
    </div>
  );
}

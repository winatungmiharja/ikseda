/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion';
import * as React from 'react';

import LandingButton from '@/components/button/LandingButton';
import SectionText from '@/components/text/SectionText';

import ParagraphSection from './ParagraphSection';

export default function MainSection() {
  return (
    <div className='layout min-h-main flex relative flex-wrap p-4 w-full md:pt-16 lg:pt-0'>
      <div className='flex flex-col gap-4 justify-center w-full lg:w-6/12'>
        <div>
          <SectionText titleOne='IKSEDA' titleTwo=' FIB UI' />
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: '60%',
              transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99],
              },
            }}
            className='w-9/12 h-1 bg-primary-500'
          ></motion.div>
        </div>
        <ParagraphSection />
        <LandingButton />
      </div>
      <div className='flex items-start mt-auto ml-auto w-11/12 lg:items-center lg:ml-0 lg:w-6/12'>
        <img src='/images/ikseda-computer.svg' alt='komputerIkseda' />
      </div>
    </div>
  );
}

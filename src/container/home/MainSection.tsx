/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion';
import * as React from 'react';

import Button from '@/components/button/Button';
import SectionText from '@/components/text/SectionText';

import ParagraphSection from './ParagraphSection';

const fadeInUp = {
  initial: {
    y: 60,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function MainSection() {
  return (
    <div className='layout min-h-main flex flex-wrap gap-y-4 justify-center items-center'>
      <div className='flex flex-col gap-4 w-full md:w-7/12'>
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
        <Button />
      </div>
      <motion.div
        variants={fadeInUp}
        className='flex relative flex-col justify-center items-center w-8/12 md:w-5/12'
      >
        <img src='/images/ikseda-computer.svg' alt='komputerIkseda' />
      </motion.div>
    </div>
  );
}

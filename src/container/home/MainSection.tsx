/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion';
import * as React from 'react';

import Button from '@/components/button/Button';
import TitleText from '@/components/text/TitleText';

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
    <div className='layout min-h-main flex flex-col justify-center items-center space-y-6 md:flex-row md:pt-0 md:space-y-0'>
      <div className='flex-grow-0 flex-shrink-0 space-y-4'>
        <TitleText titleOne='IKSEDA' titleTwo='FIB' titleThree='UI' />
        <ParagraphSection />
        <Button />
      </div>
      <motion.div
        variants={fadeInUp}
        className='layout flex relative z-10 flex-col justify-center items-center'
      >
        <img src='/images/ikseda-computer.svg' alt='komputerIkseda' />
      </motion.div>
    </div>
  );
}

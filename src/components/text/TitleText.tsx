import clsx from 'clsx';
import { motion } from 'framer-motion';
import * as React from 'react';

enum TypeAlign {
  'center',
  'start',
}

type TitleTextType = {
  titleOne: string;
  titleTwo?: string;
  titleThree?: string;
  align?: keyof typeof TypeAlign;
};

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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function TitleText({
  titleOne,
  titleTwo,
  titleThree,
  align = 'start',
}: TitleTextType) {
  return (
    <>
      <motion.div
        variants={stagger}
        className={clsx('flex flex-col items-center space-y-1 md:items-start', {
          'md:items-start': align === 'start',
          'md:items-center': align === 'center',
        })}
      >
        <motion.h1
          variants={fadeInUp}
          className='font-outline-900-sm text-transparent uppercase md:font-outline-900-md'
        >
          {titleOne}
          <span className='text-primary-500'> {titleTwo}</span>
          <span className='text-primary-500'> {titleThree}</span>
        </motion.h1>
        <motion.div
          variants={fadeInUp}
          className='py-1 w-56 bg-primary-500 md:w-96'
        ></motion.div>
      </motion.div>
    </>
  );
}

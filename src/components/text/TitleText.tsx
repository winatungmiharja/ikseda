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

export default function TitleText({
  titleOne,
  titleTwo,
  titleThree,
  align = 'start',
}: TitleTextType) {
  return (
    <>
      <motion.div
        variants={fadeInUp}
        className={clsx('flex flex-col items-center space-y-1 md:items-start', {
          'md:items-start': align === 'start',
          'md:items-center': align === 'center',
        })}
      >
        <h1 className='font-outline-900-sm text-transparent uppercase md:font-outline-900-md'>
          {titleOne}
          <span className='text-primary-500'> {titleTwo}</span>
          <span className='text-primary-500'> {titleThree}</span>
        </h1>
        <div className='py-1 w-56 bg-primary-500 md:w-96'></div>
      </motion.div>
    </>
  );
}

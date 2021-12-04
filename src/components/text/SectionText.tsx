import { motion } from 'framer-motion';
import * as React from 'react';

type SectionTextType = {
  titleOne: string;
  titleTwo?: string;
  titleThree?: string;
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

export default function SectionText({
  titleOne,
  titleTwo,
  titleThree,
}: SectionTextType) {
  return (
    <>
      <motion.div variants={stagger}>
        <motion.h1
          variants={fadeInUp}
          className='font-outline-900-sm text-transparent uppercase md:font-outline-900-md'
        >
          {titleOne}
        </motion.h1>

        <motion.h1
          variants={fadeInUp}
          className='font-outline-900-sm text-primary-500 uppercase md:font-outline-900-md'
        >
          <span className='text-mustard'>{titleTwo}</span>
          {titleThree}
        </motion.h1>
      </motion.div>
    </>
  );
}

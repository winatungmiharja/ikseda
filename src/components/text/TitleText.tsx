import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';

type SectionTextType = {
  titleOne?: string;
  titleTwo?: string;
  titleThree?: string;
  titleFour?: string;
  className?: string;
  uppercase?: boolean;
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
  titleFour,
  className,
  uppercase = false,
}: SectionTextType) {
  return (
    <>
      <AnimatePresence>
        <motion.div variants={stagger}>
          <motion.h2
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.3 }}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: [0.6, -0.05, 0.01, 0.99],
                },
              },
              hidden: { opacity: 0, y: 60 },
            }}
            className={clsx(
              'font-outline-900-sm relative md:font-outline-900-md',
              {
                uppercase: uppercase,
              },
              className
            )}
          >
            {titleOne}
            <span className='font-outline-900-sm text-primary-500 md:font-outline-900-md'>
              {titleTwo}
            </span>
          </motion.h2>

          <motion.h2
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: [0.6, -0.05, 0.01, 0.99],
                },
              },
              hidden: { opacity: 0, y: 60 },
            }}
            className={clsx(
              'font-outline-900-sm text-primary-500 md:font-outline-900-md',
              {
                uppercase: uppercase,
              }
            )}
          >
            <span className='text-mustard'>{titleThree}</span>
            {titleFour}
          </motion.h2>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

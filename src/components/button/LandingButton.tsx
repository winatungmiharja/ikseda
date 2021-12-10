import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';

export default function LandingButton() {
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

  return (
    <div className='flex justify-center w-full md:justify-start'>
      <motion.button
        variants={fadeInUp}
        className='px-4 py-1 bg-primary-500 border border-primary-900 shadow transition-all duration-150 ease-in-out md:px-6 md:py-2 md:text-xl hover:shadow-md'
      >
        <Link href='/about'>
          <a className='text-lg font-semibold text-white md:text-2xl'>
            Tentang Kami
          </a>
        </Link>
      </motion.button>
    </div>
  );
}

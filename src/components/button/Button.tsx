import { motion } from 'framer-motion';
import * as React from 'react';

export default function Button() {
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
        className='px-6 py-2 text-xl bg-primary-500 border border-black'
      >
        <h3 className='text-white'>Tentang Kami</h3>
      </motion.button>
    </div>
  );
}

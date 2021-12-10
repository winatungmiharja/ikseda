import { motion } from 'framer-motion';
import * as React from 'react';

export default function ParagraphSection() {
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
    <>
      <motion.div variants={fadeInUp} className='text-left'>
        <h4>
          Ikatan Kekeluargaan Studi Belanda <br />
          Fakultas Ilmu Pengetahuan Budaya <br />
          Universitas Indonesia
        </h4>
      </motion.div>
    </>
  );
}

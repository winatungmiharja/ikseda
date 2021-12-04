import { motion } from 'framer-motion';
import * as React from 'react';

import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        {children}
      </motion.div>
    </>
  );
}

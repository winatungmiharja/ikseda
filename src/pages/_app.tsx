import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/components/carousel/embla.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;

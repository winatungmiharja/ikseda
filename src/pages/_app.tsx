import { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/components/carousel/embla.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

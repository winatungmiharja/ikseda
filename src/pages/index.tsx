import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import MainSection from '@/container/home/MainSection';
import VideoSection from '@/container/home/VideoSection';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <section className='flex relative flex-col bg-primary-100 divide-y-2 divide-primary-600'>
          <MainSection />
          <VideoSection />
        </section>
      </main>
    </Layout>
  );
}

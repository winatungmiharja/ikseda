import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import MainSection from '@/container/home/MainSection';
import VideoSection from '@/container/home/VideoSection';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main>
        <section className='flex relative flex-col bg-primary-100 border-b-2 border-primary-600'>
          <MainSection />
        </section>
        <section>
          <VideoSection />
        </section>
      </main>
    </Layout>
  );
}

import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import MainSection from '@/container/home/MainSection';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main>
        <section className='flex relative flex-col bg-primary-100'>
          <MainSection />
        </section>
      </main>
    </Layout>
  );
}

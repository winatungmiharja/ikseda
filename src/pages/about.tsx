import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function AboutPage() {
  return (
    <Layout>
      <Seo templateTitle='About' />
      <main>
        <section className=''>
          <div className='layout py-20 min-h-screen'>
            <h1>halo</h1>
          </div>
        </section>
      </main>
    </Layout>
  );
}

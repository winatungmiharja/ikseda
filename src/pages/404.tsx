import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function SandboxPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-paper'>
          <div className='layout flex justify-center items-center py-4 h-full min-h-screen bg-primary-100'>
            <div className=''>
              <h2>404</h2>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

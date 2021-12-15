import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import MainSection from '@/container/contact/MainSection';

export default function ContactPage() {
  return (
    <Layout>
      <Seo templateTitle='Contact Us' />
      <main className='bg-shapes-light flex relative flex-col bg-primary-100 bg-contain lg:py-16'>
        <section className='layout overflow-x-hidden p-4 w-full md:overflow-x-visible md:gap-0 md:p-16 lg:p-0'>
          <div className='min-h-cover flex z-0 items-center w-full'>
            <MainSection />
          </div>
        </section>
      </main>
    </Layout>
  );
}

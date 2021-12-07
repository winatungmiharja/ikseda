/* eslint-disable @next/next/no-img-element */

import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import CoverSection from '@/container/about/CoverSection';
import DepartemenSection from '@/container/about/DepartemenSection';
import KepengurusanSection from '@/container/about/KepengurusanSection';
import VisiMisiSection from '@/container/about/VisiMisiSection';

export default function AboutPage() {
  return (
    <Layout>
      <Seo templateTitle='About' />
      <main>
        <section className='bg-shapes-light flex relative flex-col bg-primary-100 bg-contain'>
          <div className='min-h-main flex sticky top-0 z-0 items-center w-full'>
            <CoverSection />
          </div>
          <div className='z-10 divide-y-2 divide-primary-900'>
            <VisiMisiSection />
            <KepengurusanSection />
            <DepartemenSection />
          </div>
        </section>
      </main>
    </Layout>
  );
}

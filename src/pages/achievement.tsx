/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import CoverSection from '@/container/achievement/CoverSection';

export default function AchievementPage() {
  return (
    <Layout>
      <Seo templateTitle='Achievement' />

      <main>
        <section className='flex relative flex-col bg-primary-100'>
          <div className='sticky top-0 z-0 w-full md:min-h-screen'>
            <CoverSection />
          </div>
          <div className='layout flex z-10 flex-col justify-center items-center'>
            <img
              src='/images/rope.svg'
              alt=''
              className='relative top-4 w-1/5'
            />
            <div className='w-full bg-primary-400 border-2 border-primary-900'>
              <h1>test</h1>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

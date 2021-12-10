/* eslint-disable @next/next/no-img-element */

import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import CalendarSection from '@/container/calendar/CalendarSection';
import CoverSection from '@/container/calendar/CoverSection';

export default function CalendarPage() {
  return (
    <Layout>
      <Seo templateTitle='Calendar' />
      <main>
        <section className='flex relative flex-col bg-primary-100'>
          <div className='min-h-cover flex overflow-x-hidden top-0 z-0 items-center w-full'>
            <CoverSection />
          </div>
          <div className='flex relative z-10 flex-col justify-center items-center lg:layout'>
            <div className='mb-12 w-full'>
              <CalendarSection />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

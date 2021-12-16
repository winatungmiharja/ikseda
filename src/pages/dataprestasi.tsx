/* eslint-disable @next/next/no-img-element */

import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import CoverSection from '@/container/dataprestasi/CoverSection';
import InputPrestasi from '@/container/dataprestasi/InputPrestasi';

export default function DataPrestasiPage() {
  return (
    <Layout>
      <Seo templateTitle='High Achiever Data' />
      <main className='bg-shapes-light flex relative flex-col bg-primary-100 bg-contain lg:py-16'>
        <section className='layout overflow-x-hidden p-4 w-full md:overflow-x-visible md:gap-0 md:p-16 lg:p-0'>
          <div className='min-h-cover flex z-0 items-center w-full'>
            <CoverSection />
          </div>

          <div className='flex relative z-10 flex-col justify-center items-center mb-16'>
            <div className='mt-4 w-full text-left md:mt-16'>
              <h2 className='font-outline-900-sm text-2xl text-primary-300 md:text-4xl'>
                Input Data Prestasi
              </h2>
            </div>
            <div className='relative p-1 mt-4 w-full bg-primary-100 border border-primary-900 border-dashed'>
              <img
                src='/images/medal.svg'
                alt=''
                className='absolute -top-2 right-2 z-20 w-16 translate-x-1/2 md:w-20'
              />
              <img
                src='/images/nail.svg'
                alt=''
                className='absolute top-0 left-0 w-6 -translate-x-1/4 -translate-y-1/4'
              />
              <img
                src='/images/nail.svg'
                alt=''
                className='absolute top-0 right-0 z-30 w-6 translate-x-1/4 -translate-y-1/4'
              />
              <img
                src='/images/nail.svg'
                alt=''
                className='absolute bottom-0 left-0 w-6 -translate-x-1/4 translate-y-1/4'
              />
              <img
                src='/images/nail.svg'
                alt=''
                className='absolute right-0 bottom-0 w-6 translate-x-1/4 translate-y-1/4'
              />
              <div className='bg-texture w-full bg-primary-600 border-2 border-primary-900'>
                <InputPrestasi />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import SectionText from '@/components/text/SectionText';

import InputContact from './InputContact';

export default function MainSection() {
  return (
    <>
      <div className='flex flex-col w-full h-full'>
        <SectionText titleOne={'Contact-'} titleTwo={'Us'} />
        <div className='relative p-1 mt-4 w-full border border-primary-900 border-dashed'>
          <img
            src='/images/nail.svg'
            alt=''
            className='absolute top-0 left-0 w-6 -translate-x-1/4 -translate-y-1/4'
          />
          <img
            src='/images/nail.svg'
            alt=''
            className='absolute top-0 right-0 w-6 translate-x-1/4 -translate-y-1/4'
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
          <div className='bg-paper grid grid-cols-1 gap-y-2 p-4 w-full text-sm border-2 border-primary-900 shadow-inner md:p-8'>
            <h3 className=''>Punya Pertanyaan?</h3>
            <div className='flex'>
              <h4>Yuk, Hubungi Kami Melalui Formulir Dibawah Ini</h4>
            </div>
            <div className='flex flex-col divide-y divide-primary-900'>
              <p>
                Pesan Yang Kamu Kirim Akan Kami Balas Via Surel Email, Harap Isi
                Surel Kamu Dengan Benar.
              </p>
            </div>
            <div className='p-4 w-full bg-primary-300 border border-primary-900 shadow-md'>
              <InputContact />
            </div>
            <p className='mt-8 ml-auto font-semibold'>Ikseda UI 2021</p>
          </div>
        </div>
      </div>
    </>
  );
}

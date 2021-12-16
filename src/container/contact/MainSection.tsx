/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import SectionText from '@/components/text/SectionText';

import InputContact from './InputContact';

export default function MainSection() {
  return (
    <>
      <div className='flex flex-col mb-16 w-full h-full'>
        <SectionText titleOne={'Contact-'} titleTwo={'Us'} />
        <div className='relative p-1 mt-4 w-full border border-primary-900 border-dashed'>
          <img
            src='/images/nail.svg'
            alt=''
            className='absolute top-0 left-0 z-10 w-6 -translate-x-1/4 -translate-y-1/4'
          />
          <img
            src='/images/nail.svg'
            alt=''
            className='absolute top-0 right-0 z-10 w-6 translate-x-1/4 -translate-y-1/4'
          />
          <img
            src='/images/nail.svg'
            alt=''
            className='absolute bottom-0 left-0 z-10 w-6 -translate-x-1/4 translate-y-1/4'
          />
          <img
            src='/images/nail.svg'
            alt=''
            className='absolute right-0 bottom-0 z-10 w-6 translate-x-1/4 translate-y-1/4'
          />

          <div className='bg-paper grid relative z-0 grid-cols-1 gap-y-2 p-4 w-full text-sm border-2 border-primary-900 shadow-inner md:p-8'>
            <img
              src='/images/ask.svg'
              alt=''
              className='-top-[3px] absolute right-5 w-16 md:w-24'
            />

            <h3 className='mr-16 md:mr-24'>Punya Pertanyaan?</h3>
            <div className='flex'>
              <h4>Yuk, Hubungi Kami Melalui Formulir Dibawah Ini</h4>
            </div>
            <div className='flex flex-col divide-y divide-primary-900'>
              <p>
                Pesan Yang Kamu Kirim Akan Kami Balas Via Surel Email, Harap Isi
                Surel Kamu Dengan Benar.
              </p>
            </div>

            <InputContact />

            <p className='mt-8 ml-auto font-semibold'>IKSEDA FIB UI 2021</p>
            <img
              src='/images/champion.svg'
              alt=''
              className='absolute bottom-0 left-4 mb-auto w-16 translate-y-1/3 md:w-24'
            />
          </div>
        </div>
      </div>
    </>
  );
}

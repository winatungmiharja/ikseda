/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import ContactInput from '@/components/input/ContactInput';
import ContactTextArea from '@/components/input/ContactTextArea';

export default function InputContact() {
  return (
    <>
      <form className='flex flex-col gap-y-8'>
        <div className='grid grid-cols-2 gap-x-4 gap-y-4'>
          <div className='col-span-2 md:col-span-1'>
            <ContactInput name='email' label='Email / Surel' />
          </div>
          <div className='col-span-2 md:col-span-1'>
            <ContactInput name='nohp' label='Nomor HP' />
          </div>
          <div className='col-span-2'>
            <ContactInput name='nama' label='Nama' />
          </div>
          <div className='col-span-2'>
            <ContactTextArea name='pesan' label='Pesan' />
          </div>
        </div>
        <div className='flex justify-end'>
          <button
            className='px-4 py-2 w-20 text-primary-100 bg-primary-700 rounded border border-primary-700 shadow-sm transition-all hover:shadow-md focus:bg-primary-600'
            onClick={(e) => e.preventDefault()}
          >
            Kirim
          </button>
        </div>
      </form>
    </>
  );
}

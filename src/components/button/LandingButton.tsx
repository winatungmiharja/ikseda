import Link from 'next/link';
import * as React from 'react';

export default function LandingButton() {
  return (
    <div className='flex justify-start w-full'>
      <button className='px-4 py-1 bg-primary-500 border border-primary-900 shadow transition-all duration-150 ease-in-out md:px-6 md:py-2 md:text-xl hover:shadow-md'>
        <Link href='/about'>
          <a className='text-lg font-semibold text-white md:text-xl'>
            Tentang Kami
          </a>
        </Link>
      </button>
    </div>
  );
}

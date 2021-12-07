import * as React from 'react';

import { ProkerType } from '@/lib/type';

export default function ProkerCard({ value }: { value: ProkerType }) {
  return (
    <div
      className='bg-teal flex-shrink-0 p-4 w-56 border-2 border-primary-900 shadow-sm md:p-8 md:w-1/3 hover:shadow'
      style={{ minWidth: 'calc(100%/3)' }}
    >
      <div className='flex gap-2 items-center'>
        <div className='flex flex-shrink-0 justify-center items-center p-0.5 w-10 h-10 rounded-full border-2 border-primary-900'>
          <div className='flex flex-shrink-0 justify-center items-center w-full h-full bg-primary-200 rounded-full'>
            {value.icon}
          </div>
        </div>
        <p className='text-lg font-bold text-primary-200'>{value.title}</p>
      </div>
      <p className='content mt-2'>{value.content}</p>
    </div>
  );
}

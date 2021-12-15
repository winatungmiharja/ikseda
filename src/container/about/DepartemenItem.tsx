/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import { DepartemenType } from '@/lib/type';

import { dataDepartemenSection } from '@/data/departemen';

import PersonCard from '@/components/card/PersonCard';
import ProkerCard from '@/components/card/ProkerCard';

export default function DepartemenItem({
  value,
  id,
}: {
  value: DepartemenType;
  id: number;
}) {
  return (
    <div id={value.url} className='py-16 w-full'>
      <div className='flex flex-col gap-8 justify-center items-center'>
        <h2 className='font-outline-900-sm text-teal text-3xl md:text-4xl'>
          0{id + 1}.{value.title}
        </h2>
        <div className='grid relative grid-cols-1 gap-4 w-full md:grid-cols-2 lg:gap-16 lg:max-w-xl'>
          {value.mandataris.map((item, i) => (
            <PersonCard
              key={i}
              status={item.status}
              name={item.name}
              color={item.color}
              type={item.type}
              img={item.img}
            />
          ))}
        </div>

        <div className='flex flex-col gap-4 items-center mt-4 w-full'>
          <h2 className='font-outline-900-sm text-2xl text-primary-300'>
            {dataDepartemenSection.staffTitle}
          </h2>
          <div className='relative p-1 w-full border border-primary-900 border-dashed'>
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
            <div className='bg-paper grid grid-cols-1 gap-x-8 p-4 w-full border-2 border-primary-900 shadow-inner md:grid-cols-3 md:p-8'>
              {value.staff.map((person, i) => (
                <p key={i} className='text-base font-medium text-center'>
                  {person}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 items-center mt-4 w-full'>
          <h2 className='font-outline-900-sm text-2xl text-primary-300'>
            {dataDepartemenSection.prokerTitle}
          </h2>
          <div className='relative p-1 w-full border border-primary-900 border-dashed'>
            <div className='bg-paper scroll-s snap-x flex overflow-x-scroll gap-x-8 p-4 border-2 border-primary-900 md:p-8'>
              {value.proker.map((item, i) => (
                <ProkerCard key={i} value={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

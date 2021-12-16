/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import * as React from 'react';

import { dataKepengurusan, dataKepengurusanSection } from '@/data/kepengurusan';

import PersonCard from '@/components/card/PersonCard';
import TitleText from '@/components/text/TitleText';

export default function KepengurusanSection() {
  return (
    <div className='bg-shapes min-h-main flex relative flex-col py-16 bg-primary-100'>
      <div className='layout flex z-10 flex-col gap-16 items-center'>
        <TitleText
          titleOne={dataKepengurusanSection.firstTitle}
          titleTwo={` ` + dataKepengurusanSection.secondTitle}
          className='z-10 text-center text-primary-100'
        />
        <div className='flex relative flex-col items-center w-full'>
          <div className='grid relative grid-cols-1 gap-4 w-full md:grid-cols-2 lg:gap-16 lg:max-w-xl'>
            {dataKepengurusan.map((item, i) => (
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
        </div>
      </div>
      <div className='layout absolute inset-0 top-16'>
        <motion.img
          src='/images/particle-calendar.svg'
          alt=''
          className='absolute left-0 top-16 z-20 w-1/6 -rotate-12 translate-y-1/2 md:w-24'
        />
        <motion.img
          animate={{ y: 15 }}
          transition={{
            y: 0,
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          src='/images/particle-graph.svg'
          alt=''
          className='animate-float absolute right-0 top-1/3 invisible z-20 w-1/6 md:visible md:w-24'
        />
        <motion.img
          src='/images/particle-arrow.svg'
          alt=''
          className='absolute left-0 top-1/2 invisible z-20 w-1/6 translate-y-1/2 md:visible md:w-24'
        />
        <motion.img
          animate={{ rotate: 5 }}
          transition={{
            rotate: 0,
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          src='/images/particle-telescope.svg'
          alt=''
          className='1-1/6 absolute right-0 top-2/3 invisible z-20 w-1/5 md:visible md:w-28'
        />
        <motion.img
          src='/images/particle-notes.svg'
          alt=''
          className='absolute left-0 top-full z-20 w-1/6 scale-75 rotate-12 -translate-y-1/2 lg:w-24'
        />
      </div>
    </div>
  );
}

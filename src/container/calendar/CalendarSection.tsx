/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import * as React from 'react';
import { BsDashCircleFill, BsPlusCircleFill } from 'react-icons/bs';

import { dataCalendar } from '@/data/calendar';

import SectionText from '@/components/text/SectionText';

export default function CalendarSection() {
  const [OpenedCalendar, setOpenedCalendar] = React.useState<string>('');

  function openCalendar(name: string) {
    if (name === OpenedCalendar) {
      setOpenedCalendar('');
    } else {
      setOpenedCalendar(name);
    }
  }

  return (
    <div className='min-h-main relative'>
      <div className='mx-auto w-full'>
        {dataCalendar.map((item) => (
          <>
            <div
              className='flex justify-between px-5 py-6 bg-primary-500 border-2 border-primary-900 cursor-pointer md:px-10 hover:text-primary-200'
              key={item.month}
              onClick={() => openCalendar(item.month)}
            >
              <SectionText titleOne='' titleThree={item.month} />
              <BsDashCircleFill
                className={clsx('text-3xl md:text-6xl', {
                  hidden: OpenedCalendar === item.month,
                })}
              />
              <BsPlusCircleFill
                className={clsx('text-3xl md:text-6xl', {
                  hidden: OpenedCalendar !== item.month,
                  active: OpenedCalendar === item.month,
                })}
              />
            </div>
            <div
              className={clsx(
                'max-h-full bg-primary-300 border-2 border-primary-900',
                {
                  hidden: OpenedCalendar !== item.month,
                }
              )}
            >
              <img src={item.img} alt={item.month} className='mx-auto' />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

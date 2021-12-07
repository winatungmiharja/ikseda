/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import * as React from 'react';
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';

import {
  dataDepartemenDanBiro,
  dataDepartemenSection,
} from '@/data/departemen';

import SidebarLink from '@/components/link/SidebarLink';
import TitleText from '@/components/text/TitleText';

import DepartemenItem from './DepartemenItem';

export default function DepartemenSection() {
  const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false);

  return (
    <div className='min-h-main flex relative flex-wrap justify-start items-start'>
      <div
        className={clsx(
          'py-16 w-full bg-primary-200 transition-all duration-150 lg:block',
          {
            'lg:w-9/12': isNavOpen,
            'lg:w-11/12': !isNavOpen,
          }
        )}
      >
        <div className='layout flex relative flex-col items-center'>
          <TitleText
            titleOne={dataDepartemenSection.firstTitle}
            titleTwo={dataDepartemenSection.secondTitle}
            className='z-10 text-center text-primary-300'
          />
          <img
            src='/images/sparkle.svg'
            alt='sparkle'
            className='absolute right-20 z-20 w-4 md:right-1/2'
          />
          <div className='flex flex-col w-full divide-y-2 divide-primary-900'>
            {dataDepartemenDanBiro.map((item, i) => (
              <DepartemenItem key={i} value={item} id={i} />
            ))}
          </div>
        </div>
      </div>

      <div
        className={clsx(
          'bg-paper hidden top-14 p-8 py-16 h-screen border-l-2 border-primary-900 transition-all duration-150 lg:block lg:sticky',
          {
            'lg:w-3/12': isNavOpen,
            'lg:w-1/12': !isNavOpen,
          }
        )}
      >
        <div className='absolute'>
          <button
            className='relative -left-8 bg-primary-200 rounded-md shadow -translate-x-1/2'
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? (
              <BsArrowRightSquare size={32} />
            ) : (
              <BsArrowLeftSquare size={32} />
            )}
          </button>
        </div>
        {isNavOpen && (
          <>
            <h2 className='font-outline-900-sm text-2xl text-primary-200'>
              {dataDepartemenSection.daftar}
            </h2>
            <div
              className='flex overflow-x-hidden flex-col gap-2 pr-2 mt-2 border border-primary-200 shadow-inner'
              style={{ maxHeight: 'calc(100vh - 56px - 12rem)' }}
            >
              {dataDepartemenDanBiro.map((item, i) => (
                <SidebarLink value={item} key={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

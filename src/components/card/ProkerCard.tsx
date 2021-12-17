import * as React from 'react';
import {
  HiOutlineBookOpen,
  HiOutlineChartSquareBar,
  HiOutlineDesktopComputer,
  HiOutlineGlobe,
  HiOutlinePlay,
  HiOutlineSparkles,
  HiOutlineSpeakerphone,
  HiOutlineUserCircle,
} from 'react-icons/hi';

import { ProkerType } from '@/lib/type';

export default function ProkerCard({ value }: { value: ProkerType }) {
  return (
    <div
      className='bg-teal snap-center flex-shrink-0 p-4 border-2 border-primary-900 shadow-sm md:p-8 md:w-1/3 hover:shadow'
      style={{ minWidth: 'calc(100%/3)' }}
    >
      <div className='flex gap-2 items-center h-full'>
        <div className='flex flex-shrink-0 justify-center items-center p-0.5 w-10 h-10 rounded-full border-2 border-primary-900'>
          <div className='flex flex-shrink-0 justify-center items-center w-full h-full bg-primary-200 rounded-full'>
            {value.type === 'culture' && <HiOutlineGlobe size={20} />}
            {value.type === 'bussiness' && (
              <HiOutlineChartSquareBar size={20} />
            )}
            {value.type === 'person' && <HiOutlineUserCircle size={20} />}
            {value.type === 'event' && <HiOutlineSpeakerphone size={20} />}
            {value.type === 'media' && <HiOutlinePlay size={20} />}
            {value.type === 'other' && <HiOutlineSparkles size={20} />}
            {value.type === 'academic' && <HiOutlineBookOpen size={20} />}
            {value.type === 'tech' && <HiOutlineDesktopComputer size={20} />}
          </div>
        </div>
        <p className='text-base font-bold text-primary-200'>{value.title}</p>
      </div>
    </div>
  );
}

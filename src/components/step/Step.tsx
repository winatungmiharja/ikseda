import clsx from 'clsx';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';

type StepType = {
  disabled?: boolean;
  current: number;
  detail: string[];
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function Step({
  current,
  detail,
  setStep,
  disabled = false,
}: StepType) {
  const { trigger } = useFormContext();
  const setNavigation = async (step: number) => {
    const isFullfilled = await trigger();
    if (isFullfilled) setStep(step);
  };
  return (
    <>
      <nav
        aria-label='Progress '
        className='bg-paper sticky top-14 z-10 mb-4 bg-primary-600'
      >
        <ol
          role='list'
          className='flex space-y-0 text-primary-200 md:space-x-8'
        >
          {detail.map((item, i) => (
            <li
              className={clsx('flex-1', {
                'hidden md:block': current !== i + 1,
                block: current === i + 1,
                'opacity-50 pointer-events-none select-none': disabled,
              })}
              key={i}
            >
              <button
                type='button'
                className={clsx('w-full')}
                onClick={() => setNavigation(i + 1)}
              >
                <div
                  className={clsx(
                    'h-2 border-2 border-primary-900 shadow-inner',
                    {
                      'bg-teal ': i + 1 <= current,
                      'bg-primary-100 group hover:bg-primary-300':
                        i + 1 > current,
                    }
                  )}
                ></div>
                <div
                  className={clsx(
                    'flex flex-col items-start mt-2 w-full transition-all'
                  )}
                  aria-current='step'
                >
                  <span
                    className={clsx('py-1 font-semibold', {
                      'bg-primary-800 shadow-inner px-2 rounded-sm':
                        i + 1 === current,
                      'px-0': i + 1 !== current,
                    })}
                  >
                    Langkah {i + 1}
                  </span>
                  <span className='text-sm'>{item}</span>
                </div>
              </button>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

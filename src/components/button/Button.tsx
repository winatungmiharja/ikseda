import clsx from 'clsx';
import * as React from 'react';
import { ImSpinner5 } from 'react-icons/im';

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  variants?: 'primary' | 'secondary';
  dotted?: boolean;
  icon?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'button'>;

export default function Button({
  children,
  disabled = false,
  isLoading = false,
  className,
  variants = 'primary',
  dotted = true,
  icon,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={isLoading || disabled}
      className={clsx(
        'inline-block relative flex-shrink-0 p-0.5 font-semibold rounded-sm',
        'focus:ring-1 focus:ring-primary-900 focus:outline-none',
        'text-white disabled:cursor-not-allowed',
        {
          'bg-gray-300 text-gray-400 hover:bg-gray-300': disabled,
        },
        {
          'bg-teal  hover:bg-navy  ': variants === 'primary',
          '  hover:bg-mustard bg-primary-500 ': variants === 'secondary',
        },
        {
          'relative !text-transparent hover:text-transparent !cursor-wait transition-none':
            isLoading,
        },

        className
      )}
    >
      {dotted ? (
        <div
          className={clsx(
            'flex items-center px-6 py-1 h-full rounded-sm border border-primary-100 border-dashed',
            className
          )}
        >
          {isLoading && (
            <div className='absolute top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2'>
              <ImSpinner5 className='animate-spin' />
            </div>
          )}
          <div className='flex gap-2 justify-center items-center'>
            {children}
            {icon ?? ''}
          </div>
        </div>
      ) : (
        <div className={clsx('flex items-center px-6 py-1 h-full')}>
          {isLoading && (
            <div className='absolute top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2'>
              <ImSpinner5 className='animate-spin' size={25} />
            </div>
          )}
          <div className='flex gap-2 justify-center items-center'>
            {children}
            {icon ?? ''}
          </div>
        </div>
      )}
    </button>
  );
}

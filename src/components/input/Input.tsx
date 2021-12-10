import clsx from 'clsx';
import * as React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

export type InputProps = {
  label: string;
  id: string;
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  helperText?: string;
  placeholder?: string;
  validation?: RegisterOptions;
  readOnly?: boolean;
  checkId?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export default function Input({
  id,
  label,
  className,
  type = 'text',
  helperText,
  placeholder = '',
  validation,
  readOnly = false,
  checkId,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div
      className={clsx({
        'justify-end flex flex-row-reverse items-center ': type === 'checkbox',
      })}
    >
      <label
        htmlFor={type === 'checkbox' ? `${id}${checkId}` : id}
        className={clsx('block text-primary-200', {
          'text-primary-900': type === 'checkbox',
        })}
      >
        {label}
      </label>
      <input
        {...register(id, validation)}
        {...rest}
        className={clsx(
          {
            'cursor-not-allowed bg-primary-200/30': readOnly,
          },
          'px-4 py-2 w-full placeholder-primary-300 bg-primary-200 rounded-sm border-0 shadow-inner focus:border focus:border-primary-900 focus:border-dashed focus:ring-0',
          {
            'w-6 h-6  checked:bg-teal px-0 py-0 mr-2 ': type === 'checkbox',
          },
          className
        )}
        type={type}
        id={type === 'checkbox' ? `${id}${checkId}` : id}
        name={id}
        aria-describedby={id}
        placeholder={placeholder}
      />
      <div className='mb-1'>
        {helperText && <p className='text-xs text-primary-200'>{helperText}</p>}
        {errors[id] && (
          <span className={clsx('text-xs text-primary-500')}>
            {errors[id]?.type === 'pattern' && `Please enter valid ${label}`}
            {errors[id]?.type === 'required' && `${label} is required`}
          </span>
        )}
      </div>
    </div>
  );
}

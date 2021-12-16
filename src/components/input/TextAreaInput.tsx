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
  dark?: boolean;
} & React.ComponentPropsWithoutRef<'textarea'>;

export default function TextAreaInput({
  id,
  label,
  className,
  type = 'text',
  helperText,
  placeholder = '',
  validation,
  dark = false,
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
        className={clsx(
          'block text-primary-200',
          {
            'text-primary-900': type === 'checkbox',
          },
          {
            'text-primary-900': dark,
          }
        )}
      >
        {label}
      </label>
      <textarea
        {...register(id, validation)}
        {...rest}
        className={clsx(
          'file:bg-primary-300 file:border file:border-dashed file:border-primary-900 file:hover:bg-primary-500 file:hover:text-primary-100 file:mr-2 file:shadow-inner',

          {
            'cursor-not-allowed bg-primary-200/30': readOnly,
          },
          'px-4 py-2 w-full placeholder-primary-300 bg-primary-200 rounded-sm border-0 shadow-inner focus:border focus:border-primary-900 focus:border-dashed focus:ring-0',
          {
            'w-6 h-6  checked:bg-teal px-0 py-0 mr-2 ': type === 'checkbox',
          },
          className
        )}
        id={type === 'checkbox' ? `${id}${checkId}` : id}
        name={id}
        aria-describedby={id}
        placeholder={placeholder}
      />
      <div className='mb-1'>
        {helperText && (
          <p
            className={clsx('text-xs text-primary-200', {
              'text-primary-900': dark,
            })}
          >
            {helperText}
          </p>
        )}
        {errors[id] && (
          <span
            className={clsx('text-xs text-primary-500', {
              'text-red-700': dark,
            })}
          >
            {errors[id]?.type === 'pattern' && `Please enter valid ${label}`}
            {errors[id]?.type === 'required' && `${label} is required`}
          </span>
        )}
      </div>
    </div>
  );
}

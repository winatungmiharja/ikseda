import clsx from 'clsx';
import * as React from 'react';

export type ContactInputProps = {
  label: string;
  name: string;
};

export default function ContactInput({ label, name }: ContactInputProps) {
  return (
    <div className='w-full'>
      <label htmlFor='test' className='block text-primary-700'>
        {label}
      </label>
      <input
        type='text'
        className={clsx(
          'w-full bg-primary-200 border border-primary-900 focus:border-dashed focus:ring-0'
        )}
        name={name}
      />
    </div>
  );
}

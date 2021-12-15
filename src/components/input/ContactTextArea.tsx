import * as React from 'react';

export type ContactTextAreaInputProps = {
  label: string;
  name: string;
};

export default function ContactTextArea({
  label,
  name,
}: ContactTextAreaInputProps) {
  return (
    <div className='w-full'>
      <label htmlFor='test' className='block text-primary-700'>
        {label}
      </label>
      <textarea
        className='w-full h-40 bg-primary-200 border border-primary-900 focus:border-dashed focus:ring-0'
        name={name}
        id={name}
      />
    </div>
  );
}

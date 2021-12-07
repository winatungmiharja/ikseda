import * as React from 'react';

type SidebarLinkType = {
  url: string;
  title: string;
};

export default function SidebarLink({ value }: { value: SidebarLinkType }) {
  return (
    <p className='text-md font-medium hover:underline'>
      <a key={value.url} href={`#${value.url}`}>
        {value.title}
      </a>
    </p>
  );
}

import * as React from 'react';

import NumberText from '@/components/text/NumberText';

type SyaratType = {
  id: number;
  syarat: string;
};

export default function SyaratItem({ id, syarat }: SyaratType) {
  const [isHover, setIsHover] = React.useState<boolean>(false);
  return (
    <li
      className='flex gap-4 items-center py-4'
      key={id}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <NumberText content={`${id + 1}`} isHover={isHover} />
      <p className='text-sm leading-tight cursor-default'>{syarat}</p>
    </li>
  );
}

import * as React from 'react';

import NumberText from '@/components/text/NumberText';

type MisiType = {
  id: number;
  mission: string;
};

export default function MisiItem({ id, mission }: MisiType) {
  const [isHover, setIsHover] = React.useState<boolean>(false);
  return (
    <li
      className='flex gap-4 items-center'
      key={id}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <NumberText content={`${id + 1}`} isHover={isHover} />
      <p className='font-semibold leading-tight cursor-default'>{mission}</p>
    </li>
  );
}

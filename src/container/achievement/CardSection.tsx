import * as React from 'react';

import { dataAchievement } from '@/data/achievement';

import MultipleAchievementCard from '@/components/card/MultipleAchievementCard';
import SingleAchievementCard from '@/components/card/SingleAchievementCard';

export default function CardSection() {
  return (
    <div className='grid grid-cols-1 gap-4 px-4 py-8 md:grid-cols-2 lg:grid-cols-3'>
      {dataAchievement.map((item) =>
        item.type === 'multiple' ? (
          <MultipleAchievementCard key={item.id} value={item} />
        ) : (
          <SingleAchievementCard key={item.id} value={item} />
        )
      )}
    </div>
  );
}

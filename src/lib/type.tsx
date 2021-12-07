export type ProkerType = {
  title: string;
  content: string;
  icon: React.ReactNode;
};

export type MandatarisType = {
  name: string;
  img: string;
};

export type DepartemenType = {
  url: string;
  title: string;
  mandataris: PersonType[];
  staff: string[];
  proker: ProkerType[];
};

export type AboutType = {
  desc: string;
  misi: string[];
  visi: string;
};

export type AchievementType = {
  id: number;
  title: React.ReactNode;
  person: string[];
  img: string[];
  type: 'single' | 'multiple';
};

export type PersonType = {
  status: string;
  name: string;
  type?: 'dark' | 'light';
  color?: 'teal' | 'mustard' | 'magenta' | 'orange' | 'brown' | 'navy';
  img: string;
};

export type ProkerType = {
  title: string;
  content?: string;
  type:
    | 'culture'
    | 'bussiness'
    | 'person'
    | 'event'
    | 'media'
    | 'academic'
    | 'tech'
    | 'other';
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

export type CalendarType = {
  month: string;
  img: string;
};

export type StepOneType = {
  email: string;
  pengisi: string;
  nama: string;
  line: string;
  npm: string;
  hp: string;
  kegiatan: string;
};

export type StepTwoType = {
  keikutsertaan: string;
  tim: string;
  kategori: string;
  pesertaNasional: string;
  pesertaInternasional: string;
  namaKegiatan: string;
  jumlahPeserta: string;
  penyelenggara: string;
  website: string;
};

export type StepThreeType = {
  pencapaian: string;
  tanggalMulai: Date | null;
  tanggalAkhir: Date | null;
  undangan: [File, MediaMetadata] | null;
  sertifikat: [File, MediaMetadata] | null;
  dokumentasi: [File, MediaMetadata] | null;
};

export type ContactType = {
  nama: string;
  email: string;
  nohp: string;
  pesan: string;
};

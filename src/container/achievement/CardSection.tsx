import * as React from 'react';

import MultipleAchievementCard from './MultipleAchievementCard';
import SingleAchievementCard from './SingleAchievementCard';

export type AchievementType = {
  id: number;
  title: React.ReactNode;
  person: string[];
  img: string[];
  type: 'single' | 'multiple';
};

const achievementData: AchievementType[] = [
  {
    id: 16,
    title: 'Juara 2 Face Painting OLIMBUD FIB UI 2021',
    person: [
      'Cika Talitha Huwaida (2020)',
      'Amabel Odelia Bilbo(2020)',
      'Ghozi Djayu Kumolo (2020)',
    ],
    img: [
      'https://drive.google.com/file/d/1STFIfyItjAcLYJX087qGGKIhlfyErIuI/view?usp=sharing',
      'https://drive.google.com/file/d/19ACzS9EqCgxlDQL3w_vxiGjKo0Vqir7k/view?usp=sharing',
      'https://drive.google.com/file/d/1MT1naPeM3-Z0E0ZoILqwNPQb_amhM3kn/view?usp=sharing',
    ],
    type: 'multiple',
  },

  // {
  //   id: 3,
  //   title:
  //     'Honourable Mention (3rd Highest) as the Kingdom of Netherlands, EuroMUN - Maastricht University',
  //   person: ['Lathifah Nurul Jannah (Sastra Belanda 2020)'],
  //   img: [
  //     'https://drive.google.com/file/d/1J-7WbXuI_L9Stv33iJu23vk5ZZ_RC45H/view?usp=sharing',
  //   ],
  //   type: 'single',
  // },

  // {
  //   id: 2,
  //   title:
  //     'Honorable Mention (2nd Highest Award) London International Model United Nations 2021',
  //   person: ['Ahsya Devinka (Sastra Belanda 2019)'],
  //   img: [
  //     'https://drive.google.com/file/d/1vLWVTA-fSWRGHcn4WN3CWcDLAZvpz9Tr/view?usp=sharing',
  //   ],
  //   type: 'single',
  // },
  // {
  //   id: 13,
  //   title: 'Juara 1 PUBG OLIMBUD FIB UI 2021',
  //   person: [
  //     'Mirzanda Abimanyu (2018)',
  //     'Vlady Pratama (2018)',
  //     'Fachri Nur Ikhsan Gunawan (2019)',
  //     'Rifat (2021)',
  //   ],
  //   img: [
  //     'https://drive.google.com/file/d/15p8t_Wg9OqlxkBlMheSR_Idy1tu4_Mvw/view?usp=sharing',
  //     'https://drive.google.com/file/d/1KJz9w5ndTWGPqCWfIpbmInpYa9Ttz6zf/view?usp=sharing',
  //     'https://drive.google.com/file/d/1v0PDcDhlHC2AE-ARmlXKpgHyLVyUMxzR/view?usp=sharing',
  //     'https://drive.google.com/file/d/1ItXGY8RQFHxYXXz-IAyKnclTs9hd45hF/view?usp=sharing',
  //   ],
  //   type: 'multiple',
  // },
  // {
  //   id: 18,
  //   title: 'Juara 3 Band OLIMBUD FIB UI 2021',
  //   person: [
  //     'Hasna Aulia Shabira (2020)',
  //     'David Septiandi (2020)',
  //     'Joshua Parlinggoman Siagian (2021)',
  //     'Christofer Wahyu Lorenzo Kadju (2021)',
  //     'Reiner Ayton Joseph Amadeo Silitonga (2021)',
  //   ],
  //   img: [
  //     'https://drive.google.com/file/d/1loCHlfZ0W6h4YW3Ko_uNOMbHvLlL3kvt/view?usp=sharing',
  //     'https://drive.google.com/file/d/1DwWZT6ey2Irz8Qjus0QHGtPHzj_aiyAc/view?usp=sharing',
  //     'https://drive.google.com/file/d/1CWbrVnIwnYGkDzHs-pJSIMDy4LBoISYT/view?usp=sharing',
  //     'https://drive.google.com/file/d/14eYUxjC_VROkPADvqw-Aa0tLviyxQCGV/view?usp=sharing',
  //     'https://drive.google.com/file/d/1ADRIihKYhmFGHCIOb7iKeAx0naY3Jsi1/view?usp=sharing',
  //   ],
  //   type: 'multiple',
  // },
  // {
  //   id: 1,
  //   title:
  //     'Juara Senimatic Videography Competition, Youth Action Art Competition, Universitas Muhammadiyah Tasikmalaya 2020-2021.',
  //   person: ['M. Fariz Kurniawan (Sastra Belanda 2020)'],
  //   img: [
  //     'https://drive.google.com/file/d/1q214H0TnSOr7wrAyB1SvySabvYYmE4WU/view?usp=sharing',
  //   ],
  //   type: 'single',
  // },

  // {
  //   id: 4,
  //   title:
  //     'Relawan Covid-19 bagian Health Care Assistant di Rumah Sakit Universitas Indonesia',
  //   person: ['Rizki Putra Nur Amin (Sastra Belanda 2019)'],
  //   img: [
  //     'https://drive.google.com/file/d/1zsX6HnazUA67Fw2tvtEIy7xayg-qsRCv/view?usp=sharing',
  //   ],
  //   type: 'single',
  // },
  // {
  //   id: 0,
  //   title: 'Mahasiswa Berperstasi Utama FIB UI 2021',
  //   person: ['Sandra Novita Manik (Sastra Belanda 2018)'],
  //   img: [
  //     'https://drive.google.com/file/d/1Mlk77I_ZAYRTXe6RhUcKqYCxQfOEG7eF/view?usp=sharing',
  //   ],
  //   type: 'single',
  // },
  // {
  //   id: 5,
  //   title: 'Juara 1 PKM AI OIM FIB UI 2021',
  //   person: [
  //     'Nurul Aini Ramadhanti (2019)',
  //     'Deanna Aisha Nurcahya (2020)',
  //     'Marsha Huwaida (2020)',
  //   ],
  //   img: [
  //     'https://drive.google.com/file/d/17cqrfasWtIRlWU3nlWKxqGOtADWBZs_C/view?usp=sharing',
  //   ],
  //   type: 'single',
  // },
  // {
  //   id: 6,
  //   title: 'Juara 1 PKM-R OIM FIB UI 2021',
  //   person: [
  //     'Rayvaldo (2019)',
  //     'Jennifer Otto Rivai (2019)',
  //     'Annisaa Eka Maulida (2019)',
  //     'Zaneta Gilda (2019)',
  //     'George William Douglas Hutabarat (2019)',
  //   ],
  //   img: [
  //     'https://drive.google.com/file/d/1ex-_yq5SExSoYecJ54z9jwg8NTLpVAk4/view?usp=sharing',
  //   ],
  //   type: 'single',
  // },
  // {
  //   id: 7,
  //   title: 'Juara 1 PKM-K OIM FIB UI 2021',
  //   person: [
  //     'Luthfiah Alfera Ningrum (2021)',
  //     'Salma Noor Febriana (2021)',
  //     'Kinanti Syabitha Azni (2021)',
  //     'Varel Ervanda Putri Windharta (2021)',
  //   ],
  //   img: [
  //     'https://drive.google.com/file/d/13R054g3fU7arJqHa6JyOe-EgE08Nj5A2/view?usp=sharing',
  //   ],
  //   type: 'single',
  // },
  // {
  //   id: 8,
  //   title: 'Juara 2 Kuis OIM FIB UI 2021',
  //   person: [
  //     'Christofer Wahyu Lorenzo Kadju (2021)',
  //     'Amabel Odelia Bilbo (2020)',
  //     'Baihaqi Hakim Mursalin (2021)',
  //     'Alfiyyah Fadiyah (2021)',
  //     'Yardan Juanda Prakusa (2021)',
  //   ],
  //   img: [
  //     'https://drive.google.com/file/d/1RHzXH_33l6Jqtht2XLpziBwewwQ5AG4m/view?usp=sharing',
  //   ],
  //   type: 'single',
  // },
  // {
  //   id: 9,
  //   title: 'Juara 3 Debat Bahasa Indonesia OIM FIB UI 2021',
  //   person: [
  //     'Muhammad Fariz Kurniawan (2020)',
  //     'Moza Defitra Nareswari (2020)',
  //     'Ranu Mahesta (2021)',
  //   ],
  //   img: [
  //     'https://drive.google.com/file/d/1snmz54RtlqQDzcHAUuqPQ4YWvyWH6fRm/view?usp=sharing',
  //   ],
  //   type: 'single',
  // },
  // {
  //   id: 10,
  //   title: 'Juara 3 Cipta Poster OIM FIB UI 2021',
  //   person: ['Widya Wijayanti Setiawan (2020)'],
  //   img: [
  //     'https://drive.google.com/file/d/1Fl5bkbiA1V34RSxnAeKjy1tIlti_7i7V/view?usp=sharing',
  //   ],
  //   type: 'single',
  // },
  // {
  //   id: 11,
  //   title: 'Juara 1 OOTD OLIMBUD FIB UI 2021',
  //   person: ['Prabu Wiwaha Lambri (2020)'],
  //   img: [
  //     'https://drive.google.com/file/d/1Uo-17tC5RtnJ8aAZkCTbBeP8ZhD8NkK_/view?usp=sharing',
  //   ],
  //   type: 'single',
  // },
  // {
  //   id: 12,
  //   title: 'Juara 1 Magic Chess OLIMBUD FIB UI 2021',
  //   person: ['Vlady Pratama (2018)'],
  //   img: [
  //     'https://drive.google.com/file/d/1JvpRZozXmWVlitvCTaEIx3Ak9Di2smhj/view?usp=sharing',
  //   ],
  //   type: 'single',
  // },

  // {
  //   id: 14,
  //   title: 'Juara 2 Puisi OLIMBUD FIB UI 2021',
  //   person: ['Nastiti Swasini Nurfiranti  (2021)'],
  //   img: [
  //     'https://drive.google.com/file/d/1FSu8jNA0AQS0M1TkVL9M69A9qpe-j42T/view?usp=sharing',
  //   ],
  //   type: 'single',
  // },
  // {
  //   id: 15,
  //   title: 'Juara 2 Solois OLIMBUD FIB UI 2021',
  //   person: ['Rusmasiela Mewipiana Presilla (2021)'],
  //   img: [
  //     'https://drive.google.com/file/d/12DfYJuFQRO1GNbmHkku4SecYdmkzdVlD/view?usp=sharing',
  //   ],
  //   type: 'single',
  // },
  // {
  //   id: 17,
  //   title: 'Juara 3 Fotofrafi OLIMBUD FIB UI 2021',
  //   person: ['Najla Maharani (2021)'],
  //   img: [
  //     'https://drive.google.com/file/d/1rnWri1_c7PGn5TNoXKPgV5TOggd-6ABG/view?usp=sharing',
  //   ],
  //   type: 'single',
  // },
];

export default function CardSection() {
  return (
    <div className='grid grid-cols-1 gap-4 px-4 py-8 md:grid-cols-2 lg:grid-cols-3'>
      {achievementData.map((item) =>
        item.type === 'multiple' ? (
          <MultipleAchievementCard key={item.id} value={item} />
        ) : (
          <SingleAchievementCard key={item.id} value={item} />
        )
      )}
    </div>
  );
}

import { FiInstagram } from 'react-icons/fi';

import { DepartemenType } from '../lib/type';

export const dataDepartemenSection = {
  firstTitle: 'Departemen',
  secondTitle: ' & Biro',
  daftar: 'Daftar Departemen & Biro',
  staffTitle: 'Staff',
  prokerTitle: 'Program Kerja',
};

export const dataDepartemenDanBiro: DepartemenType[] = [
  {
    url: 'humas',
    title: 'Departemen Humas',
    mandataris: [
      {
        status: 'Wakil Ketua',
        name: 'Mirzanda Abimanyu (2018)',
        type: 'light',
        color: 'navy',
        img: '/images/contoh.png',
      },
      {
        status: 'Wakil Ketua',
        name: 'Mirzanda Abimanyu (2018)',
        type: 'light',
        color: 'mustard',
        img: '/images/contoh.png',
      },
    ],
    staff: [
      'Fachri Nur Iksan Gunawan (2019)',
      'Fachri Nur Iksan Gunawan (2019)',
      'Fachri Nur Iksan Gunawan (2019)',
      'Fachri Nur Iksan Gunawan (2019)',
      'Fachri Nur Iksan Gunawan (2019)',
      'Fachri Nur Iksan Gunawan (2019)',
      'Fachri Nur Iksan Gunawan (2019)',
      'Fachri Nur Iksan Gunawan (2019)',
    ],
    proker: [
      {
        title: 'Media Sosial',
        content: 'Mengurus media sosial dan Instagram',
        icon: <FiInstagram size={20} />,
      },
      {
        title: 'Podcast Ikseda',
        content: 'Mengurus media sosial dan Instagram',
        icon: <FiInstagram size={20} />,
      },
      {
        title: 'Cakrawala Budaya',
        content: 'Mengurus media sosial dan Instagram',
        icon: <FiInstagram size={20} />,
      },
      {
        title: 'Media Sosial',
        content: 'Mengurus media sosial dan Instagram',
        icon: <FiInstagram size={20} />,
      },
      {
        title: 'Media Sosial',
        content: 'Mengurus media sosial dan Instagram',
        icon: <FiInstagram size={20} />,
      },
      {
        title: 'Media Sosial',
        content: 'Mengurus media sosial dan Instagram',
        icon: <FiInstagram size={20} />,
      },
    ],
  },
  {
    url: 'humaslalalas',
    title: 'Departemen Humas',
    mandataris: [
      {
        status: 'Wakil Ketua',
        name: 'Mirzanda Abimanyu (2018)',
        type: 'light',
        color: 'mustard',
        img: '/images/contoh.png',
      },
      {
        status: 'Wakil Ketua',
        name: 'Mirzanda Abimanyu (2018)',
        type: 'light',
        color: 'teal',
        img: '/images/contoh.png',
      },
    ],
    staff: [
      'Fachri Nur Iksan Gunawan (2019)',
      'Fachri Nur Iksan Gunawan (2019)',
      'Fachri Nur Iksan Gunawan (2019)',
      'Fachri Nur Iksan Gunawan (2019)',
      'Fachri Nur Iksan Gunawan (2019)',
      'Fachri Nur Iksan Gunawan (2019)',
      'Fachri Nur Iksan Gunawan (2019)',
      'Fachri Nur Iksan Gunawan (2019)',
    ],
    proker: [
      {
        title: 'Media Sosial',
        content: 'Mengurus media sosial dan Instagram',
        icon: <FiInstagram size={20} />,
      },
      {
        title: 'Podcast Ikseda',
        content: 'Mengurus media sosial dan Instagram',
        icon: <FiInstagram size={20} />,
      },
      {
        title: 'Cakrawala Budaya',
        content: 'Mengurus media sosial dan Instagram',
        icon: <FiInstagram size={20} />,
      },
      {
        title: 'Media Sosial',
        content: 'Mengurus media sosial dan Instagram',
        icon: <FiInstagram size={20} />,
      },
      {
        title: 'Media Sosial',
        content: 'Mengurus media sosial dan Instagram',
        icon: <FiInstagram size={20} />,
      },
      {
        title: 'Media Sosial',
        content: 'Mengurus media sosial dan Instagram',
        icon: <FiInstagram size={20} />,
      },
    ],
  },
];

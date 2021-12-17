import { IoIosArrowDroprightCircle } from 'react-icons/io';

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
        status: 'Ketua Departemen',
        name: 'Firyal Baedy (2018)',
        type: 'light',
        color: 'navy',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Departemen/Humas/Firyal_Baedy.jpg',
      },
      {
        status: 'Wakil Ketua Departemen',
        name: 'Michelin Magdalena (2018)',
        type: 'light',
        color: 'mustard',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Departemen/Humas/Michelin.jpg',
      },
    ],
    staff: [
      'Maria Antonia Djasmine (2020).',
      'Sekar Ozora Noor Mairas (2020)',
      'Stefani Indhyana. A. K (2020)',
      'Nadiya Agivia Larosa (2020)',
      'Amabel Odelia (2020)',
    ],
    proker: [
      {
        title: 'Media Sosial',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Podcast Ikseda',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Cakrawala Budaya',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title:
          'Webinar Studeren In Nederland: Grow Dutch Universities Representative & Higher Education X IKSEDA',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Developer WEBSITE IKSEDA',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Kunjungan Lembaga',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Bedah Kampus UI',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
    ],
  },
  {
    url: 'keuangan',
    title: 'Biro Keuangan',
    mandataris: [
      {
        status: 'Ketua Biro',
        name: 'Ananda Moza (2018)',
        type: 'light',
        color: 'magenta',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Biro/Keuangan/Moza.jpg',
      },
      {
        status: 'Wakil Ketua Biro',
        name: 'Saskia Putri (2018)',
        type: 'light',
        color: 'teal',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Biro/Keuangan/foto_saski.jpg',
      },
    ],
    staff: [
      'Selly Anggraeini (2020)',
      'Fairuz Rahimah (2020)',
      'Deanna Aisyah Nurcahya (2020)',
      'Saddatina Mutiara (2020) ',
      'Uni Yosefa Br Tarigan (2020)',
    ],
    proker: [
      {
        title: 'Pernak-Pernik IKSEDA',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Bisnis IKSEDA',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
    ],
  },
  {
    url: 'psdm',
    title: 'Biro PSDM',
    mandataris: [
      {
        status: 'Ketua Biro',
        name: 'Vlady Pratama (2018)',
        type: 'light',
        color: 'navy',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Biro/PSDM/Vlady.jpg',
      },
      {
        status: 'Wakil Ketua Biro',
        name: 'Alika Jantinia. C (2018)',
        type: 'light',
        color: 'mustard',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Biro/PSDM/Alika_-_Wakil.png',
      },
    ],
    staff: [
      'Bunga Catherine (2019)',
      'Deyva Budhyarty Nur (2019)',
      'Mita Ariqia (2019)',
      'Hanna Haris Rifai (2020)',
      'Aulyra Fitri Sylvanix (2020)',
      'Muhammad Fairuz Salam (2020)',
      'Ghozi Djayu Kumolo (2020)',
    ],
    proker: [
      {
        title:
          'Webinar Studeren In Nederland: Grow Dutch Universities Representative & Higher Education X IKSEDA',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Birthday Wish',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Sahabat Bidang',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Carreer Development',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Reward of Affection',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Appreciatie Nacht en Doei',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Welkom Staff',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Halal bihalal IKSEDA VERHEVEN',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Games dan nongkrong online IKSEDA',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
    ],
  },
  {
    url: 'kaderisasi',
    title: 'Biro Kaderisasi',
    mandataris: [
      {
        status: 'Ketua Biro',
        name: 'Hayfa Fawid Putri (2019)',
        type: 'light',
        color: 'mustard',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Biro/Kaderisasi/Hayfa.jpg',
      },
      {
        status: 'Wakil Ketua Biro',
        name: 'Orchida Balfas (2019)',
        type: 'light',
        color: 'teal',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Biro/Kaderisasi/Orchida.jpg',
      },
    ],
    staff: [
      'Anjlie Vyrsha (2019)',
      'Rayvaldo Sarayar (2019)',
      'Tito Inzaghi (2019)',
      'Nitis Kinasih (2019)',
      'Nisrina Fadila (2019)',
      'Cika Talitha Huwaida (2020)',
      'Amanda Leksono (2020)',
    ],
    proker: [
      {
        title: 'Temu Mahasiswa Baru',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Ospek Jurusan',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Pemilihan Raya IKSEDA 2022',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Thiskomt 2021',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
    ],
  },
  {
    url: 'medkre',
    title: 'Biro Media Kreatif',
    mandataris: [
      {
        status: 'Ketua Biro',
        name: 'Sophia Rania. S (2018)',
        type: 'light',
        color: 'navy',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Biro/Medkre/IMG_3805.jpg',
      },
      {
        status: 'Wakil Ketua Biro',
        name: 'Mumpuni Hadi (2018)',
        type: 'light',
        color: 'mustard',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Biro/Medkre/IMG_6431.jpg',
      },
    ],
    staff: [
      'Engga Polia Fajarwati (2020)',
      'Muhammad Fikri Ramdahan (2019)',
      'Aubrey Charissa (2020)',
      'Aisyah Nathania (2020)',
      'Muhammad Fariz Kurniawan (2020)',
    ],
    proker: [
      {
        title: 'Citra Kepengurusan',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Dokumentasi',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Poster Hari Raya',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Feeds Instagram',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Youtube Ikseda',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
    ],
  },
  {
    url: 'olahraga',
    title: 'Departemen Olahraga',
    mandataris: [
      {
        status: 'Ketua Biro',
        name: 'Naaraparasantya. A (2018)',
        type: 'light',
        color: 'magenta',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Departemen/Olahraga/IMG-20210125-WA0000.jpg',
      },
      {
        status: 'Wakil Ketua Biro',
        name: 'Sifa Fauziah (2018)',
        type: 'light',
        color: 'teal',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Departemen/Olahraga/Sifa_Fauziah.jpg',
      },
    ],
    staff: [
      'Natasha Azzahra Aziz (2019)',
      'Hasna Aulia Shabira (2020)',
      'Muhammad Iqbal Anggara. P (2020)',
      'Esther Dameria. A (2020)',
      'Novita Wulandari (2020)',
      'Moza Devitra Nareswari (2020)',
    ],
    proker: [
      {
        title: 'Blijf Gezond',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Oranje Wedstrijd',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Gezond dag met IKSEDA',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'E-sport Tournament Nederlands Festival 2021',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Samen op een podium',
        content: 'OLIMBUD Seni dan Olahraga',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'IKSEDA VOOR OLIMBUD ',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
    ],
  },
  {
    url: 'seni',
    title: 'Departemen Seni',
    mandataris: [
      {
        status: 'Ketua Departemen',
        name: 'Alisha Al Fani. I (2019)',
        type: 'light',
        color: 'navy',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Departemen/Seni/77ABA552-5312-4D3F-AA6A-F07D6E2D22C0.jpg',
      },
      {
        status: 'Wakil Ketua Departemen',
        name: 'George William Douglas. H (2019)',
        type: 'light',
        color: 'mustard',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Departemen/Seni/George.png',
      },
    ],
    staff: [
      'Tengku Nabila (2019)',
      'Khalisya Zahwa (2019)',
      'Fajar Ilahi Ramadhan (2019)',
      'Prabu Wiwaha lambri (2020)',
      'Amanda Uma Zahra (2020)',
      'Sofina Putri Srisantoso (2020)',
      'David Septiandi (2020)',
      'Faiqah Farras Syahira (2020)',
      'Nadhifah Ismah Putri (2020)',
      'Rafito Adrian Murdani (2020)',
    ],
    proker: [
      {
        title: 'Kunstsessie ',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Kunstmagazijn ',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Buku pesta cinta ',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Nederlands Festival 2021',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Samen op een podium',
        content: 'OLIMBUD Seni dan Olahraga ',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'IKSEDA VOOR OLIMBUD',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
    ],
  },
  {
    url: 'sosmas',
    title: 'Departemen Sosmas',
    mandataris: [
      {
        status: 'Ketua Departemen',
        name: 'Bunga Kemala (2018)',
        type: 'light',
        color: 'mustard',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Departemen/Sosmas/Bunga_sosmas.jpg',
      },
      {
        status: 'Wakil Ketua Departemen',
        name: 'Nanda Luthfiah (2018)',
        type: 'light',
        color: 'teal',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Departemen/Sosmas/Dono_sosmas.jpg',
      },
    ],
    staff: [
      'Darry Alexander Christian (2020)',
      'Widiya Wijayanti. S (2020)',
      'Muhammad Hawari Ibadillah (2020)',
      'Salwa Putri Abdiarti (2020)',
      'Ghiska Wina (2020)',
      'Andrea Paramita Nurmalita Sari (2020)',
    ],
    proker: [
      {
        title: 'Bulan Berkah',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Een stap dichterbij',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Een dag met IKSEDA ',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Subsidi BOP IKSEDA ',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
    ],
  },
  {
    url: 'kestari',
    title: 'Biro Kestari',
    mandataris: [
      {
        status: 'Ketua Biro',
        name: 'Intan Natasyah. P (2019)',
        type: 'light',
        color: 'magenta',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Biro/Kestari/foto_intan.jpg',
      },
      {
        status: 'Wakil Ketua Biro',
        name: 'Athala Rafi. P (2019)',
        type: 'light',
        color: 'teal',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Biro/Kestari/20210122_235625.jpg',
      },
    ],
    staff: ['Chairunnisa Octavia Ruswandi (2019)', 'Tiara Syahwalani(2019)'],
    proker: [
      {
        title: 'Surat-Menyurat ',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Sertifikat Kepengurusan ',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Webinar Kesekretariatan ',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
    ],
  },
  {
    url: 'keilmuan',
    title: 'Departemen Keilmuan',
    mandataris: [
      {
        status: 'Ketua Departemen',
        name: 'Raffiza Zahra. M (2019)',
        type: 'light',
        color: 'navy',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Departemen/Keilmuan/Raffiza.jpg',
      },
      {
        status: 'Wakil Ketua Departemen',
        name: 'Sarah Ardelia. S (2019)',
        type: 'light',
        color: 'mustard',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Departemen/Keilmuan/Sarah.jpg',
      },
    ],
    staff: [
      'Yasmin N. Oktaviani (2019)',
      'Ivana Dhea (2019)',
      'Rachel Wihelmina (2019)',
      'Shafina Sahrani (2019)',
      'Ficky Fadhilah (2020)',
      'Caesi Rosprianti (2020)',
    ],
    proker: [
      {
        title: 'Fun Fact',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Flashcards Ikseda',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Het Klaverblad ',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Tempoe doeloe ',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Samen op een podium: OIM',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'IKSEDA VOOR OIM',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Seminar Nederlands Festival 2021',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Kerja Sama IKSEDA dan SKS',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Quiz tijd',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Podcast IKSEDA',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'IKSEDA VOOR PKM 2021',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
    ],
  },
  {
    url: 'adkesma',
    title: 'Departemen Adkesma',
    mandataris: [
      {
        status: 'Ketua Departemen',
        name: 'Zaneta Gilda (2019)',
        type: 'light',
        color: 'mustard',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Departemen/Adkesma/Zaneta_Gilda.jpg',
      },
      {
        status: 'Wakil Ketua Departemen',
        name: 'Jennifer Otto. R (2019)',
        type: 'light',
        color: 'teal',
        img: 'https://res.cloudinary.com/etzy/image/upload/v1639538548/asset/Departemen/Adkesma/Jennifer_Otto.jpg',
      },
    ],
    staff: [
      'Tabina Ramiza (2019)',
      'Tanya Dwinanda (2020)',
      'Clarina Yosi Pratiwi (2020)',
      'Catur Prasetyo (2020)',
    ],
    proker: [
      {
        title: 'Verspreid de informatie ',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Info Mahasiswa Baru ',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Vertel Maar  ',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Stap voor stap',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Subsidi BOP IKSEDA',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'IKSEDA VOOR PKM 2021',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Spreadsheet Kelas Mata Kuliah Fakultas dan Eksternal',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Galang dana IKSEDA',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
      {
        title: 'Loker IKSEDA',
        content: '',
        icon: <IoIosArrowDroprightCircle size={20} />,
      },
    ],
  },
];

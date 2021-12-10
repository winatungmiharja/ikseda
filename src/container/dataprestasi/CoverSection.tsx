/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import SyaratItem from '@/components/card/SyaratItem';
import SectionText from '@/components/text/SectionText';

type HighAchieverDataType = {
  desc: React.ReactNode;
  syarat: string[];
};
const highAchieverData: HighAchieverDataType = {
  desc: (
    <>
      <p>
        Pertama-tama, kami ucapkan selamat kepada kalian yang sudah mengharumkan
        nama FEB UI di kancah regional, nasional, maupun internasional. Dalam
        rangka penilaian Pemeringkatan oleh Kemenristekdikti, kami meminta
        kepada seluruh High Achievers FEB UI yang telah meraih prestasi untuk
        mengisi formulir ini, baik prestasi di bidang keilmiahan, olahraga,
        maupun bidang seni.
        <br /> <br />
        Bagi mahasiswa FEB UI yang mengisi formulir ini akan mendapatkan
        insentif dari Kemahasiswaan FEB UI (untuk skala nasional dan
        internasional) dan akan langsung dipublikasikan di media sosial BEM FEB
        UI.
        <br /> <br />
        Adapun hal-hal yang perlu diperhatikan saat pengisian formulir antara
        lain:
      </p>
    </>
  ),
  syarat: [
    'Bukti Sertifikat adalah sertifikat asli (bukan fotokopi) yang dikeluarkan resmi oleh panitia penyelenggara. Jika kejuaraan tersebut tidak merilis sertifikat dan hanya memberikan piala/medali, maka piala/medali harus difoto/scan sejelas mungkin agar terbaca, diunggah dalam bentuk PDF yang berisi keterangan.',
    'Foto Upacara Penyerahan Penghargaan (UPP) dapat menggunakan foto bukti kalian sebagai peserta lomba (format .jpg atau .png dan max. 10mb).',
    'Foto/Scan undangan dapat berupa email maupun surat pengantar dari penyelenggara kegiatan (format .pdf atau .jpg)',
    'Penyelenggara Kegiatan dapat berupa institusi penyelenggara lomba/konferensi. Contoh: SPA FEB UI adalah penyelenggara IAF dan ATV, CFA Society Indonesia adalah penyelenggara CFA Research Challenge Indonesia.',
  ],
};

export default function CoverSection() {
  return (
    <div className='flex flex-col h-full'>
      <SectionText
        titleOne={'High-'}
        titleTwo={'Achievers'}
        titleFour={'Data'}
      />
      <div className='relative p-1 mt-4 w-full border border-primary-900 border-dashed'>
        <img
          src='/images/nail.svg'
          alt=''
          className='absolute top-0 left-0 w-6 -translate-x-1/4 -translate-y-1/4'
        />
        <img
          src='/images/nail.svg'
          alt=''
          className='absolute top-0 right-0 w-6 translate-x-1/4 -translate-y-1/4'
        />
        <img
          src='/images/nail.svg'
          alt=''
          className='absolute bottom-0 left-0 w-6 -translate-x-1/4 translate-y-1/4'
        />
        <img
          src='/images/nail.svg'
          alt=''
          className='absolute right-0 bottom-0 w-6 translate-x-1/4 translate-y-1/4'
        />
        <div className='bg-paper grid grid-cols-1 gap-y-2 p-4 w-full text-sm border-2 border-primary-900 shadow-inner md:p-8'>
          <p className='text-lg font-semibold'>
            Congreytulations, High-Achievers!
          </p>
          <div className='flex'>
            {highAchieverData.desc}
            <img
              src='/images/champion.svg'
              alt=''
              className='hidden mb-auto w-20 sm:block'
            />
          </div>
          <div className='flex flex-col divide-y divide-primary-900'>
            {highAchieverData.syarat.map((syarat, i) => (
              <SyaratItem key={i} id={i} syarat={syarat} />
            ))}
          </div>
          <p className='mt-8 ml-auto font-semibold'>BEM FEB UI 2021</p>
        </div>
      </div>
    </div>
  );
}

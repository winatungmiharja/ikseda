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
        Kami dari IKSEDA FIB UI 2021 ingin memberikan ucapan selamat dan
        apresiasi kepada teman-teman yang sudah mengharumkan nama IKSEDA FIB UI
        dalam bidang akademik dan non-akademik baik di dalam maupun luar kampus
        UI. Oleh sebab itu, kami ingin meminta kesediaan teman-teman untuk
        memberikan data prestasi bagi kakak-kakak serta teman-teman yang sudah
        pernah mengikuti ataupun memenangkan perlombaan.
        <br /> <br />
        Harap mengisi form di bawah ini dengan data prestasi yang telah dicapai
        dalam jangka waktu dari Desember 2021 sampai seterusnya.
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
          <p className='text-lg font-semibold'>Dag, IKSEDA!</p>
          {highAchieverData.desc}
          <div className='flex flex-col divide-y divide-primary-900'>
            {highAchieverData.syarat.map((syarat, i) => (
              <SyaratItem key={i} id={i} syarat={syarat} />
            ))}
          </div>
          <p className='mt-8 ml-auto font-semibold'>IKSEDA FIB UI 2021</p>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
// import { motion } from 'framer-motion';
import * as React from 'react';
import {
  FaInstagramSquare,
  FaLine,
  FaSpotify,
  FaTwitterSquare,
  FaYoutube,
} from 'react-icons/fa';

const footer = {};

export default function Footer() {
  return (
    // <footer className='py-16 bg-primary-900 border-t-4 border-primary-500'>
    //   <div className='layout flex gap-x-4 justify-center items-center text-gray-500 md:gap-x-8'>
    //     <a
    //       href='https://www.instagram.com/iksedafibui/?hl=id'
    //       rel='noopener noreferrer'
    //       target='_blank'
    //     >
    //       <FaInstagramSquare className='text-6xl md:text-6xl hover:text-primary-500' />
    //     </a>
    //     <a
    //       href='https://open.spotify.com/show/49s5NAfmjVqXSNz2Qnln47 '
    //       rel='noopener noreferrer'
    //       target='_blank'
    //     >
    //       <FaSpotify className='text-6xl md:text-6xl hover:text-primary-500' />
    //     </a>
    //     <a
    //       href='https://twitter.com/iksedafibui'
    //       rel='noopener noreferrer'
    //       target='_blank'
    //     >
    //       <FaTwitterSquare className='text-6xl md:text-6xl hover:text-primary-500' />
    //     </a>
    //     <a
    //       href='https://www.youtube.com/c/iksedafibui'
    //       rel='noopener noreferrer'
    //       target='_blank'
    //     >
    //       <FaYoutube className='text-6xl md:text-6xl hover:text-primary-500' />
    //     </a>
    //     <a
    //       href='https://timeline.line.me/user/_dYqX3FjwBYyfnZdXpcnsvx7EWVS1yDoA4QVGwzY?utm_medium=windows&utm_source=desktop&utm_campaign=OA_Profile'
    //       rel='noopener noreferrer'
    //       target='_blank'
    //     >
    //       <FaLine className='text-6xl md:text-6xl hover:text-primary-500' />
    //     </a>
    //   </div>
    // </footer>
    <footer
      className='bg-primary-900 border-t-4 border-primary-500'
      aria-labelledby='footer-heading'
    >
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='layout py-12 lg:py-16'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8 xl:col-span-1'>
            <img
              src='/images/logo-ikseda.png'
              alt='Logo Ikseda'
              className='h-24 bg-primary-100 rounded-full md:mx-auto'
            />
            <div className='py-0.5 bg-primary-500'></div>
            <div className='flex space-x-6 text-2xl md:justify-center'>
              <a
                href='https://www.instagram.com/iksedafibui/?hl=id'
                rel='noopener noreferrer'
                target='_blank'
                className='text-primary-100 hover:text-primary-500'
              >
                <FaInstagramSquare />
              </a>
              <a
                href='https://open.spotify.com/show/49s5NAfmjVqXSNz2Qnln47'
                rel='noopener noreferrer'
                target='_blank'
                className='text-primary-100 hover:text-primary-500'
              >
                <FaSpotify />
              </a>
              <a
                href='https://twitter.com/iksedafibui'
                rel='noopener noreferrer'
                target='_blank'
                className='text-primary-100 hover:text-primary-500'
              >
                <FaTwitterSquare />
              </a>
              <a
                href='https://www.youtube.com/c/iksedafibui'
                rel='noopener noreferrer'
                target='_blank'
                className='text-primary-100 hover:text-primary-500'
              >
                <FaYoutube />
              </a>
              <a
                href='https://timeline.line.me/user/_dYqX3FjwBYyfnZdXpcnsvx7EWVS1yDoA4QVGwzY?utm_medium=windows&utm_source=desktop&utm_campaign=OA_Profile'
                rel='noopener noreferrer'
                target='_blank'
                className='text-primary-100 hover:text-primary-500'
              >
                <FaLine />
              </a>
            </div>
          </div>
          <div className='mt-4 md:mt-0'>
            <h3 className='mb-4 text-sm font-semibold tracking-wider text-primary-100 uppercase'>
              Addresses
            </h3>
            <p className='text-base text-primary-100'>
              Universitas Indonesia, Jl. Prof. DR. Selo Soemardjan Kampus,
              Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat, 16424
            </p>
          </div>
          <div className='grid grid-cols-2 col-span-1 mt-4 md:mt-0'>
            <h3 className='col-span-2 text-sm font-semibold tracking-wider text-primary-100 uppercase'>
              Contact Us
            </h3>
            <div className='col-span-1 mt-4 md:mt-0'>
              <ul role='list' className='space-y-4'>
                <li>
                  <a className='text-base text-primary-100'>Twitter</a>
                </li>
                <li>
                  <a className='text-base text-primary-100'>Instagram</a>
                </li>
                <li>
                  <a className='text-base text-primary-100'>Line</a>
                </li>
                <li>
                  <a className='text-base text-primary-100'>Email</a>
                </li>
              </ul>
            </div>
            <div className='col-span-1 mt-4 md:mt-0'>
              <ul role='list' className='space-y-4'>
                <li>
                  <a className='text-base text-primary-100'>@iksedafibui</a>
                </li>
                <li>
                  <a className='text-base text-primary-100'>@iksedafibui</a>
                </li>
                <li>
                  <a className='text-base text-primary-100'>@WUH9969L</a>
                </li>
                <li>
                  <a className='text-base text-primary-100'>
                    ikseda.fib.ui@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

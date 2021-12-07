// import { motion } from 'framer-motion';
import * as React from 'react';
import {
  FaInstagramSquare,
  FaLine,
  FaSpotify,
  FaTwitterSquare,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='py-16 bg-primary-900 border-t-4 border-primary-500'>
      <div className='layout flex gap-x-4 justify-center items-center text-gray-500 md:gap-x-8'>
        <a
          href='https://www.instagram.com/iksedafibui/?hl=id'
          rel='noopener noreferrer'
          target='_blank'
        >
          <FaInstagramSquare className='text-6xl md:text-6xl hover:text-primary-500' />
        </a>
        <a
          href='https://open.spotify.com/show/49s5NAfmjVqXSNz2Qnln47 '
          rel='noopener noreferrer'
          target='_blank'
        >
          <FaSpotify className='text-6xl md:text-6xl hover:text-primary-500' />
        </a>
        <a
          href='https://twitter.com/iksedafibui'
          rel='noopener noreferrer'
          target='_blank'
        >
          <FaTwitterSquare className='text-6xl md:text-6xl hover:text-primary-500' />
        </a>
        <a
          href='https://www.youtube.com/c/iksedafibui'
          rel='noopener noreferrer'
          target='_blank'
        >
          <FaYoutube className='text-6xl md:text-6xl hover:text-primary-500' />
        </a>
        <a
          href='https://timeline.line.me/user/_dYqX3FjwBYyfnZdXpcnsvx7EWVS1yDoA4QVGwzY?utm_medium=windows&utm_source=desktop&utm_campaign=OA_Profile'
          rel='noopener noreferrer'
          target='_blank'
        >
          <FaLine className='text-6xl md:text-6xl hover:text-primary-500' />
        </a>
      </div>
    </footer>
  );
}

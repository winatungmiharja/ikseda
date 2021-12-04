/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion';
import * as React from 'react';
import { CgCloseR, CgMenuBoxed } from 'react-icons/cg';

import HeaderLink from '../link/HeaderLink';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/apaini', label: 'High-Achiever Data' },
  { href: '/achievement', label: 'Achievement' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false);
  return (
    <header className='sticky top-0 z-50 bg-primary-100 border-b-2 border-primary-600'>
      <div className='layout flex justify-between items-center h-14'>
        <div className='flex gap-2 items-center'>
          <img src='/images/logo-ui.png' alt='UI logo' className='w-10' />
          <img
            src='/images/logo-ikseda.png'
            alt='Ikseda Logo'
            className='w-10'
          />
        </div>
        <nav>
          <div className='hidden md:block'>
            <ul className='flex justify-between items-center space-x-4'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <HeaderLink href={href}>{label}</HeaderLink>
                </li>
              ))}
            </ul>
          </div>
          <div className='block md:hidden'>
            <ul className='flex justify-between items-center space-x-4'>
              <button
                className='text-primary-900'
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                <CgMenuBoxed size={32} />
              </button>
            </ul>

            {isNavOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className='bg-paper fixed inset-0 h-screen transition-all'
              >
                <div className='layout flex justify-between items-center h-14'>
                  <div className='flex gap-2 items-center'>
                    <img
                      src='/images/logo-ui.png'
                      alt='UI logo'
                      className='p-1 w-10 h-10 bg-primary-800 rounded-full ring-1 ring-primary-900 shadow-sm'
                    />
                    <img
                      src='/images/logo-ikseda.png'
                      alt='Ikseda Logo'
                      className='p-1 w-10 h-10 bg-primary-100 rounded-full ring-1 ring-primary-900 shadow-sm'
                    />
                  </div>
                  <ul className='flex justify-between items-center'>
                    <motion.button
                      initial={{ scale: 0 }}
                      animate={{
                        scale: 1,
                        transition: {
                          duration: 0.25,
                          ease: [0.6, -0.05, 0.01, 0.99],
                        },
                      }}
                      className='text-primary-900'
                      onClick={() => setIsNavOpen(!isNavOpen)}
                    >
                      <CgCloseR size={32} />
                    </motion.button>
                  </ul>
                </div>
                <div className='min-h-main flex justify-center items-center'>
                  <motion.ul
                    className='flex flex-col gap-2 -mt-12'
                    initial={{
                      y: 60,
                    }}
                    animate={{
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: [0.6, -0.05, 0.01, 0.99],
                      },
                    }}
                  >
                    {links.map(({ href, label }) => (
                      <li key={`${href}${label}`}>
                        <HeaderLink href={href} className='text-2xl'>
                          {label}
                        </HeaderLink>
                      </li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

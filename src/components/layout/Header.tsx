/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import HeaderLink from '../link/HeaderLink';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/apaini', label: 'High-Achiever Data' },
  { href: '/achievement', label: 'Achievement' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
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
          <ul className='flex justify-between items-center space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <HeaderLink href={href}>{label}</HeaderLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

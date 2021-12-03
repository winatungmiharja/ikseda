import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function SandboxPage() {
  return (
    <Layout>
      <Seo templateTitle='Sandbox' />

      <main>
        <section className='bg-shapes-light py-4 min-h-screen bg-primary-100 bg-contain'>
          <div className='p-4 md:p-16'>
            <ul className='flex flex-col gap-8'>
              <h2 className='text-primary-300'>
                Sandbox{' '}
                <span className='text-lg font-semibold'>for the website</span>
              </h2>
              <hr />
              <li>
                <p>
                  00. Premade background
                  <div>
                    use{' '}
                    <span className='px-2 py-1 bg-primary-300'>bg-paper</span>{' '}
                    for paper like background like on the left and right
                  </div>{' '}
                  <div>
                    use{' '}
                    <span className='px-2 py-1 bg-primary-300'>bg-shapes</span>{' '}
                    for background shapes dark
                  </div>
                  <div>
                    use{' '}
                    <span className='px-2 py-1 bg-primary-300'>
                      bg-shapes-light
                    </span>{' '}
                    for background shapes light
                  </div>
                </p>
              </li>
              <hr />
              <li>
                01. Typography
                <h1>
                  This is a{' '}
                  <span className='font-outline-900-sm md:font-outline-900-md'>
                    Main title
                  </span>
                </h1>
                <h2>
                  This is a smaller{' '}
                  <span className='font-outline-900-sm md:font-outline-900-md'>
                    Main title
                  </span>
                </h2>
                <h3>This is big subtitle</h3>
                <h4>This is smaller subtitle</h4>
                <p className='heading'>This is Heading</p>
                <p className='content'>This is content</p>
              </li>
              <hr />
              <li>
                02. Color Palette
                <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
                  <div className='flex flex-col gap-2'>
                    <p className='heading'>Main color</p>
                    <div className='p-4 w-full bg-primary-100 border-2 border-primary-900 shadow-xl'>
                      primary-100
                    </div>
                    <div className='p-4 w-full bg-primary-200 border-2 border-primary-900 shadow-xl'>
                      primary-200
                    </div>
                    <div className='p-4 w-full bg-primary-300 border-2 border-primary-900 shadow-xl'>
                      primary-300{' '}
                      <small>(for the left and right bg color)</small>
                    </div>
                    <div className='p-4 w-full bg-primary-400 border-2 border-primary-900 shadow-xl'>
                      primary-400 <small>(main yellow bg color)</small>
                    </div>
                    <div className='p-4 w-full bg-primary-500 border-2 border-primary-900 shadow-xl'>
                      primary-500{' '}
                      <small>
                        (main orange bg color, outline font color available)
                      </small>
                    </div>
                    <div className='p-4 w-full text-primary-100 bg-primary-600 border-2 border-primary-900 shadow-xl'>
                      primary-600
                    </div>
                    <div className='p-4 w-full text-primary-100 bg-primary-700 border-2 border-primary-900 shadow-xl'>
                      primary-700 <small>(outline font color available)</small>
                    </div>
                    <div className='p-4 w-full text-primary-100 bg-primary-800 border-2 border-primary-900 shadow-xl'>
                      primary-800
                    </div>
                    <div className='p-4 w-full text-primary-100 bg-primary-900 border-2 border-primary-900 shadow-xl'>
                      primary-900 <small>default text color</small>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <p className='heading'>Accent Color</p>
                    <div className='bg-teal p-4 w-full border-2 border-primary-900 shadow-xl'>
                      teal
                    </div>
                    <div className='bg-magenta p-4 w-full border-2 border-primary-900 shadow-xl'>
                      magenta
                    </div>
                    <div className='bg-navy p-4 w-full border-2 border-primary-900 shadow-xl'>
                      navy
                    </div>
                    <div className='bg-mustard p-4 w-full border-2 border-primary-900 shadow-xl'>
                      mustard
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}

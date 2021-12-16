import { motion } from 'framer-motion';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { TiTickOutline } from 'react-icons/ti';

import { ContactType } from '@/lib/type';

import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import TextAreaInput from '@/components/input/TextAreaInput';

export default function InputContact() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>(false);

  const methods = useForm<ContactType>({
    defaultValues: {
      nama: '',
      email: '',
      nohp: '',
      pesan: '',
    },
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const { handleSubmit, setValue } = methods;

  const onSubmit = async (data: ContactType) => {
    setLoading(true);

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (res.status === 201) {
      setSuccess(true);
      resetState();
    } else {
      setError(true);
      resetState();
    }
  };

  const resetState = () => {
    setLoading(false);
    setTimeout(() => {
      setError(false);
      setSuccess(false);
    }, 5000);
    setValue('nama', '');
    setValue('email', '');
    setValue('nohp', '');
    setValue('pesan', '');
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          className='flex relative flex-col mt-8'
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          {success && (
            <motion.div
              initial={{ y: 20 }}
              animate={{
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.6, -0.05, 0.01, 0.99],
                },
              }}
              className='absolute right-0 bottom-0 z-10 p-1 text-center bg-primary-600 rounded-sm shadow-inner'
            >
              <div className='flex gap-1 items-center px-2 py-1 text-primary-200 rounded-sm border border-primary-900 border-dashed'>
                <p>Thankyou for contacting us!</p>
                <TiTickOutline size={25} />
              </div>
            </motion.div>
          )}
          {error && (
            <motion.div
              initial={{ y: 20 }}
              animate={{
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.6, -0.05, 0.01, 0.99],
                },
              }}
              className='absolute right-0 bottom-0 p-1 text-center bg-red-700 rounded-sm shadow-inner'
            >
              <div className='flex gap-1 items-center px-2 py-1 text-primary-200 rounded-sm border border-primary-900 border-dashed'>
                <p>An Error Occured :(</p>
              </div>
            </motion.div>
          )}
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <Input
              id={'nama'}
              label={'Nama'}
              validation={{ required: true }}
              dark={true}
            />
            <Input
              type='email'
              id={'email'}
              label={'Email'}
              validation={{ required: true, pattern: /^\S+@\S+$/i }}
              dark={true}
            />
            <Input
              type='number'
              id={'nohp'}
              label={'No.Hp'}
              dark={true}
              validation={{ required: true, pattern: /^08\d{9,10}$/g }}
            />

            <TextAreaInput
              id={'pesan'}
              label={'Pesan'}
              validation={{ required: true }}
              dark={true}
            />
          </div>
          <div className='mt-4 text-center'>
            <Button type='submit' variants='secondary' isLoading={loading}>
              Kirim
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}
